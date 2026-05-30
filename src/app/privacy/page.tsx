import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FlowFirst Plumbing",
  description: "Privacy policy for FlowFirst Plumbing & Heating.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-700 text-white mb-3">{title}</h2>
    <div className="text-gray-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-300">
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-700 text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <Section title="Who we are">
          <p>FlowFirst Plumbing & Heating is an independent plumbing and heating business based in Shipham, North Somerset. When we refer to "we", "us" or "our" in this policy, we mean FlowFirst Plumbing & Heating.</p>
          <p>We are committed to protecting your personal data and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
        </Section>

        <Section title="What information we collect">
          <p>We collect personal information you provide when you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fill in the contact form on our website (name, phone number, email address, and message)</li>
            <li>Contact us directly by phone or WhatsApp</li>
            <li>Enquire about or book our services</li>
          </ul>
          <p>We do not collect any sensitive personal data, and we do not use cookies beyond those strictly necessary for the website to function.</p>
        </Section>

        <Section title="How we use your information">
          <p>We use the information you provide solely to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your enquiry or quote request</li>
            <li>Arrange and carry out plumbing or heating work</li>
            <li>Send you relevant information about your job (invoices, appointment confirmations)</li>
          </ul>
          <p>We will never sell, rent or share your personal data with third parties for marketing purposes.</p>
        </Section>

        <Section title="Legal basis for processing">
          <p>We process your personal data on the basis of:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-gray-300">Legitimate interests</strong> — responding to enquiries and providing our services</li>
            <li><strong className="text-gray-300">Contract</strong> — where you have engaged us to carry out work</li>
            <li><strong className="text-gray-300">Legal obligation</strong> — where we are required to retain records by law</li>
          </ul>
        </Section>

        <Section title="Third-party services">
          <p>Our contact form is powered by <strong className="text-gray-300">Formspree</strong>, which processes form submissions on our behalf. Formspree may temporarily store your submission data. You can view their privacy policy at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#9ee7f0] hover:underline">formspree.io</a>.</p>
          <p>Our website is hosted by <strong className="text-gray-300">Vercel</strong>, which may collect standard server logs (IP address, browser type, pages visited). View their privacy policy at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#9ee7f0] hover:underline">vercel.com</a>.</p>
        </Section>

        <Section title="How long we keep your data">
          <p>We retain enquiry data for up to 12 months. Data related to completed jobs (invoices, correspondence) is kept for 6 years in line with UK tax and business record-keeping requirements, after which it is securely deleted.</p>
        </Section>

        <Section title="Your rights">
          <p>Under UK GDPR you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (where no legal obligation requires us to keep it)</li>
            <li>Object to or restrict our processing</li>
            <li>Lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#9ee7f0] hover:underline">ico.org.uk</a></li>
          </ul>
          <p>To exercise any of these rights, please contact us at the details below.</p>
        </Section>

        <Section title="Contact us about this policy">
          <p>If you have any questions about this privacy policy or how we handle your data, please get in touch:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Phone / WhatsApp: <a href="tel:+447946113945" className="text-[#9ee7f0] hover:underline">07946 113945</a></li>
            <li>Website: <Link href="/#contact" className="text-[#9ee7f0] hover:underline">Contact form</Link></li>
          </ul>
        </Section>

        <div className="pt-6 border-t border-white/10">
          <Link href="/" className="text-[#9ee7f0] hover:underline text-sm">← Back to FlowFirst Plumbing</Link>
        </div>
      </div>
    </div>
  );
}
