"use client";

import { Heart, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const posts = [
  {
    id: 1,
    likes: 47,
    comments: 8,
    bg: "linear-gradient(135deg, #1e3f52 0%, #2d5f78 100%)",
    src: "/insta-1.jpg",
  },
  {
    id: 2,
    likes: 93,
    comments: 14,
    bg: "linear-gradient(160deg, #2d5f78 0%, #419ebc 100%)",
    src: "/insta-2.jpg",
  },
  {
    id: 3,
    likes: 31,
    comments: 5,
    bg: "linear-gradient(135deg, #18303d 0%, #1e3f52 100%)",
    src: "/insta-3.jpg",
  },
];

// Subtle plumbing SVG watermark inside each tile
function PipeMark() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="opacity-[0.12]"
    >
      <rect x="0" y="20" width="18" height="8" rx="4" fill="white" />
      <path d="M14 24 Q14 10 24 10" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
      <rect x="20" y="0" width="8" height="14" rx="4" fill="white" />
      <rect x="26" y="20" width="22" height="8" rx="4" fill="white" />
      <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function InstagramSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="py-20 lg:py-28 bg-[#1e1e1e]"
      aria-label="Instagram feed"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 reveal">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl text-white"
                style={{ background: G.dark }}
              >
                <InstagramIcon size={18} />
              </span>
              <span
                className="text-sm font-700 tracking-[0.12em] uppercase bg-clip-text text-transparent"
                style={{ backgroundImage: G.medium }}
              >
                Instagram
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight">
              Follow the work
            </h2>
          </div>

          <a
            href="https://instagram.com/flowfirstplumbing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-600 text-white rounded-xl hover:opacity-85 transition-opacity self-start sm:self-auto shrink-0"
            style={{ background: G.dark }}
          >
            <InstagramIcon size={15} />
            @flowfirstplumbing
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl reveal">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/flowfirstplumbing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden block"
              style={{
                background: post.bg,
                boxShadow: "0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              aria-label="View on Instagram"
            >
              {/* Photo (swap src for real images) */}
              {post.src && (
                <img
                  src={post.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Watermark icon (hidden when real image is set) */}
              {!post.src && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PipeMark />
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-white font-600 text-sm">
                  <Heart size={16} fill="white" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-white font-600 text-sm">
                  <MessageCircle size={16} fill="white" />
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
