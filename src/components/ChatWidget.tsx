"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

const G = {
  dark: "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
};

type Message = { from: "bot" | "user"; text: string; links?: { label: string; href: string }[] };

const GREETING: Message = {
  from: "bot",
  text: "Hi there! 👋 I'm the FlowFirst assistant. I can answer common questions about our plumbing services. What can I help you with?",
};

// ── Area coverage data ───────────────────────────────────────
const COVERED_AREAS: string[] = [
  // North Somerset
  "shipham","weston-super-mare","weston super mare","clevedon","nailsea","portishead","pill",
  "yatton","congresbury","winscombe","banwell","axbridge","cheddar","sandford","churchill",
  "long ashton","backwell","flax bourton","failand","wraxall","west end","locking","hutton",
  "bleadon","brean","berrow","brent knoll","east brent","loxton","christon","compton bishop",
  "wedmore","heath house","lympsham","uphill","worle","kewstoke",
  // Bath & North East Somerset
  "bath","keynsham","radstock","midsomer norton","peasedown st john","paulton","saltford",
  "chew magna","chew valley","clutton","temple cloud","pensford","whitchurch","farmborough",
  "high littleton","hallatrow","timsbury","camerton","dunkerton","wellow","freshford",
  "limpley stoke","combe down","odd down","twerton","larkhall","bathampton","batheaston",
  "bathford","corsham road","monkton combe","norton st philip","faulkland","nunney",
  // Sedgemoor / Somerset
  "bridgwater","burnham-on-sea","burnham on sea","highbridge","glastonbury","wells",
  "shepton mallet","street","cheddar","mark","woolavington","puriton","cannington",
  "nether stowey","stogursey","north petherton","durleigh","westonzoyland","middlezoy",
  "othery","moorlinch","catcott","shapwick","ashcott","pedwell","walton","meare",
  "godney","northload","west pennard","pilton","shepton","evercreech",
  // Bristol
  "bristol","clifton","redland","bishopston","horfield","filton","henleaze","westbury",
  "bedminster","southville","totterdown","windmill hill","knowle","brislington",
  "hanham","kingswood","staple hill","mangotsfield","downend","frampton cotterell",
  "coalpit heath","yate","chipping sodbury","wickwar","thornbury","almondsbury",
  "patchway","bradley stoke","stoke gifford","emersons green","warmley","longwell green",
  "keynsham","saltford","pensford","whitchurch","hartcliffe","stockwood","hengrove",
  "filwood","brentry","southmead","lockleaze","eastville","st george","barton hill",
  "lawrence hill","redcliffe","hotwells","cotham",
];

const MAYBE_AREAS: string[] = [
  "frome","shepton","taunton","minehead","watchet","williton","porlock","dulverton",
  "chard","ilminster","somerton","langport","yeovil","crewkerne","martock","castle cary",
  "wincanton","bruton","mere","warminster","westbury","trowbridge","chippenham","corsham",
  "bradford on avon","melksham","devizes","swindon","marlborough","cirencester","stroud",
  "nailsworth","tetbury","chipping sodbury","thornbury","dursley","berkeley",
];

// Must look like a location question before we try area matching
const LOCATION_INTENT = /come to|travel to|you cover|do you cover|can you get to|do you work in|available in|you available|you come out to|you service|your area|service area|do you visit|you travel|based in|near me|near you/i;

function getAreaResponse(input: string): string | null {
  // Only try area matching if the question is clearly about location coverage
  if (!LOCATION_INTENT.test(input)) return null;

  const lower = input.toLowerCase();
  const matchedCovered = COVERED_AREAS.find(a => lower.includes(a));
  if (matchedCovered) {
    const display = matchedCovered.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return `Yes, we cover ${display}! We're based in Shipham so that's well within our area. Get in touch and we'll arrange a visit.`;
  }
  const matchedMaybe = MAYBE_AREAS.find(a => lower.includes(a));
  if (matchedMaybe) {
    const display = matchedMaybe.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return `${display} may be at the edge of our usual coverage area — it's worth getting in touch directly and we can let you know if we can help.`;
  }
  return null;
}

// ── FAQ matching rules ───────────────────────────────────────
const rules: {
  patterns: RegExp[];
  response: string;
  links?: { label: string; href: string }[];
}[] = [
  {
    patterns: [/quote|price|cost|how much|estimate|charge/i],
    response:
      "We don't give quotes over the phone — every job is different, so we prefer to visit first and give you a clear, honest price with no surprises. Get in touch and we'll arrange a convenient time.",
    links: [
      { label: "Request a visit →", href: "#contact" },
      { label: "Message on WhatsApp", href: "https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote." },
    ],
  },
  {
    patterns: [/emergency|urgent|burst pipe|flood|no water|water everywhere|water pouring|right now|asap|straight away/i],
    response:
      "For emergencies, the fastest way to reach us is by phone or WhatsApp. We prioritise urgent jobs like burst pipes and flooding.",
    links: [
      { label: "Call now", href: "tel:+447946113945" },
      { label: "WhatsApp us", href: "https://wa.me/447946113945?text=I+have+a+plumbing+emergency." },
    ],
  },
  // ── Leaks ──
  {
    patterns: [/leak(ing|y)?|dripping|drips|water coming through|damp patch|wet patch|water damage|water stain/i],
    response:
      "Leaks can cause real damage if left — we offer leak detection and repair. We'll locate the source and fix it properly. Get in touch and we'll arrange a visit.",
    links: [{ label: "Book a visit →", href: "#contact" }],
  },
  // ── Drains & blockages ──
  {
    patterns: [/block(ed|age)?|drain|slow drain|won't drain|not draining|clogged|gurgling|smell(ing|y)? drain|sewer/i],
    response:
      "Blocked drains and slow drainage are a common one — we clear blockages in sinks, toilets, showers and external drains. Give us a message and we'll sort it.",
    links: [{ label: "Get in touch →", href: "#contact" }],
  },
  // ── Toilets ──
  {
    patterns: [/toilet|loo|wc|cistern|flush(ing)?|won't flush|running toilet|constantly running|overflowing toilet/i],
    response:
      "Whether it's a toilet that won't flush, keeps running, or is overflowing — we can fix it. Toilet repairs are usually a quick job. Drop us a message.",
    links: [{ label: "Message on WhatsApp", href: "https://wa.me/447946113945?text=Hi%2C%20I%20need%20help%20with%20my%20toilet." }],
  },
  // ── Taps ──
  {
    patterns: [/tap(s)?|dripping tap|leaking tap|fix my tap|tap won't turn|no hot water from tap|running tap/i],
    response:
      "Dripping or leaking taps waste a surprising amount of water. We can repair or replace taps on sinks, baths and showers. Get in touch and we'll take a look.",
    links: [{ label: "Contact us →", href: "#contact" }],
  },
  // ── Bath ──
  {
    patterns: [/fix my bath|bath not draining|bath leak|bath overflow|bath tap|bath seal|bath panel|bathtub/i],
    response:
      "Yes, we can help with bath repairs — whether it's a leaking tap, poor drainage, a faulty overflow or a cracked seal. Get in touch and we'll come and take a look.",
    links: [{ label: "Book a visit →", href: "#contact" }],
  },
  // ── Shower ──
  {
    patterns: [/shower|shower tray|shower head|shower leak|shower not working|power shower|electric shower|shower drain/i],
    response:
      "We install and repair showers — from electric and power showers to full shower enclosures and trays. Happy to come and assess what you need.",
    links: [{ label: "Get in touch →", href: "#contact" }],
  },
  // ── Bathroom installs ──
  {
    patterns: [/bathroom|new bathroom|bathroom fit|bathroom install|bathroom suite|bathroom renovation|bathroom refurb/i],
    response:
      "Bathroom installations are one of our specialities — from full suites to individual unit replacements. We'll come out, assess the space and give you a clear price.",
    links: [{ label: "Request a visit →", href: "#contact" }],
  },
  // ── Boiler & heating ──
  {
    patterns: [/boiler|central heating|no heat|heating not working|heating broke|radiator|cold radiator|bleed|thermostat|pressure|boiler pressure|pilot light/i],
    response:
      "We carry out heating system maintenance including radiator repairs, bleeding, thermostat checks and general boiler servicing. Drop us a message and we'll talk it through.",
    links: [{ label: "Contact us →", href: "#contact" }],
  },
  // ── Hot water ──
  {
    patterns: [/no hot water|hot water not working|cold water only|hot water gone|hot water tank|cylinder|immersion/i],
    response:
      "No hot water is a real inconvenience — we can diagnose the cause whether it's the boiler, cylinder, immersion heater or pipework. Get in touch and we'll get it sorted.",
    links: [
      { label: "Call now", href: "tel:+447946113945" },
      { label: "WhatsApp us", href: "https://wa.me/447946113945" },
    ],
  },
  // ── Pipes ──
  {
    patterns: [/pipe(s|work)?|pipework|frozen pipe|pipe burst|pipe repair|copper pipe|plastic pipe|push fit|water pressure|low pressure|high pressure/i],
    response:
      "We handle all kinds of pipework — repairs, replacements, new runs and pressure issues. Tell us what's going on and we'll come and assess it.",
    links: [{ label: "Get in touch →", href: "#contact" }],
  },
  // ── Water pressure ──
  {
    patterns: [/water pressure|low pressure|pressure drop|no pressure|weak flow/i],
    response:
      "Low water pressure can be caused by a few different things — blocked filters, pipework issues or supply problems. We can investigate and fix it. Get in touch.",
    links: [{ label: "Book a visit →", href: "#contact" }],
  },
  // ── General service/repair question ──
  {
    patterns: [/can you fix|can you help|can you sort|do you fix|do you repair|do you install|what do you do|what can you do|services|what do you cover/i],
    response:
      "We cover a wide range of plumbing work — leaks, blocked drains, toilets, taps, showers, baths, bathroom installations, pipework, and heating maintenance. What's the issue you're dealing with?",
    links: [{ label: "View all services →", href: "#services" }],
  },
  // ── Area ──
  {
    patterns: [/area|cover|location|where do you|what area|which area|service area|do you come out/i],
    response:
      "We cover North Somerset, Bath & North East Somerset, Sedgemoor and Bristol — based in Shipham so we're well placed for the whole region. Ask me about a specific town and I'll let you know!",
  },
  // ── Qualifications ──
  {
    patterns: [/qualified|insured|certification|gas safe|qualif|registered|accredited/i],
    response:
      "Yes — we're fully qualified and carry public liability insurance. You can ask to see our documents at any time.",
  },
  // ── Hours ──
  {
    patterns: [/hours|open|available|weekend|saturday|sunday|when do you work|working hours/i],
    response:
      "We work Monday to Saturday, 7am–7pm. For genuine emergencies outside those hours, give us a call and we'll do our best to help.",
  },
  // ── Contact ──
  {
    patterns: [/phone|number|call|ring|telephone|how do i contact|get in touch/i],
    response: "You can reach us on 07946 113945.",
    links: [
      { label: "Call now", href: "tel:+447946113945" },
      { label: "WhatsApp", href: "https://wa.me/447946113945" },
    ],
  },
  {
    patterns: [/whatsapp|message|chat|text/i],
    response: "Tap below to open a WhatsApp chat — we reply promptly.",
    links: [{ label: "Message on WhatsApp", href: "https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20some%20help." }],
  },
  // ── Pleasantries ──
  {
    patterns: [/thank|thanks|cheers|great|perfect|helpful|brilliant/i],
    response: "No problem at all! Is there anything else I can help with?",
  },
  {
    patterns: [/hi|hello|hey|morning|afternoon|evening|howdy/i],
    response: "Hi! How can I help you today? Feel free to ask about our services, areas we cover, or anything else.",
  },
];

function getBotResponse(input: string): Message {
  // Check specific area lookup first
  const areaReply = getAreaResponse(input);
  if (areaReply) {
    return {
      from: "bot",
      text: areaReply,
      links: [
        { label: "Get in touch →", href: "#contact" },
        { label: "WhatsApp us", href: "https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20to%20book%20a%20visit." },
      ],
    };
  }
  for (const rule of rules) {
    if (rule.patterns.some((p) => p.test(input))) {
      return { from: "bot", text: rule.response, links: rule.links };
    }
  }
  return {
    from: "bot",
    text: "I'm not sure about that one — for anything specific it's best to get in touch directly and we'll be happy to help.",
    links: [
      { label: "Contact us →", href: "#contact" },
      { label: "WhatsApp us", href: "https://wa.me/447946113945" },
    ],
  };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Nudge notification after 8s
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setUnread(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, getBotResponse(text)]);
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-96 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ maxHeight: "75vh", boxShadow: "0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)", bottom: "calc(4.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ background: G.dark }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white font-700 text-sm">
              FF
            </div>
            <div>
              <p className="text-white font-700 text-sm leading-tight">FlowFirst Plumbing</p>
              <p className="text-white/60 text-xs">Typically replies in minutes</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#1a1a1a" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] ${msg.from === "user" ? "" : ""}`}>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "text-[#1e3f52] font-600 rounded-br-sm"
                      : "text-gray-200 bg-[#2c2c2c] rounded-bl-sm"
                  }`}
                  style={msg.from === "user" ? { background: "linear-gradient(135deg,#9ee7f0,#419ebc)" } : {}}
                >
                  {msg.text}
                </div>
                {msg.links && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => { if (!l.href.startsWith("http")) setOpen(false); }}
                        className="inline-block text-xs font-600 px-3 py-1.5 rounded-lg transition-opacity hover:opacity-80"
                        style={{ background: "#2c2c2c", color: "#9ee7f0", border: "1px solid rgba(158,231,240,0.2)" }}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-[#2c2c2c] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 flex-shrink-0" style={{ background: "#242424", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask a question…"
            className="flex-1 bg-[#2c2c2c] text-white text-sm px-4 py-2.5 rounded-xl placeholder:text-gray-600 focus:outline-none"
            onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(65,158,188,0.4)")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
          <button
            onClick={send}
            disabled={!input.trim()}
            aria-label="Send message"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-85 disabled:opacity-30"
            style={{ background: G.dark }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed right-4 sm:right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: G.dark, boxShadow: "0 8px 32px rgba(45,95,120,0.5)", bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className={`transition-all duration-200 ${open ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </div>

        {/* Unread dot */}
        {unread && !open && (
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-[#242424]" />
        )}
      </button>
    </>
  );
}
