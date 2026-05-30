import Link from "next/link";

export const metadata = {
  title: "Terms of Service | FlowFirst Plumbing",
  description: "Terms and conditions for FlowFirst Plumbing & Heating services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-700 text-white mb-3">{title}</h2>
    <div className="text-gray-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-300">
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-700 text-white">Terms of Service</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <Section title="About these terms">
          <p>These terms apply to all services provided by FlowFirst Plumbing & Heating ("we", "us"), an independent plumbing and heating business based in Shipham, North Somerset. By engaging our services you agree to these terms.</p>
        </Section>

        <Section title="Quotes and estimates">
          <p>All quotes are provided following an in-person assessment of the work required. Written quotes are valid for 30 days from the date of issue unless otherwise stated.</p>
          <p>Estimates (where a fixed quote cannot yet be given) are indicative only. We will notify you promptly if the scope of work changes and obtain your agreement before proceeding with any additional costs.</p>
          <p>We do not charge for quotes or initial visits to assess a job.</p>
        </Section>

        <Section title="Booking and cancellations">
          <p>Jobs are confirmed by mutual agreement. We ask for as much notice as possible if you need to cancel or rearrange an appointment — ideally at least 24 hours.</p>
          <p>We reserve the right to charge a reasonable fee for late cancellations (less than 24 hours notice) where materials have already been purchased specifically for the job.</p>
        </Section>

        <Section title="Payment">
          <p>Payment is due on completion of the work unless otherwise agreed in writing. We accept bank transfer and cash.</p>
          <p>For larger jobs we may request a deposit before work commences, which will be agreed and confirmed in writing before you are committed.</p>
          <p>Invoices not settled within 14 days of the due date may be subject to a late payment charge in line with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
        </Section>

        <Section title="Our workmanship guarantee">
          <p>We stand behind the quality of our work. If you experience any issue directly relating to work we have carried out, contact us within 12 months and we will return to assess and rectify it at no additional charge, provided the issue is due to our workmanship and not caused by misuse, third-party interference, or pre-existing conditions unrelated to our work.</p>
          <p>Parts and materials are subject to their respective manufacturer warranties.</p>
        </Section>

        <Section title="Your responsibilities">
          <p>You agree to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide safe and reasonable access to the work area</li>
            <li>Inform us of any known issues, hazards, or relevant history of the property's plumbing system</li>
            <li>Ensure the work area is reasonably cleared before we arrive</li>
          </ul>
        </Section>

        <Section title="Liability">
          <p>We carry full public liability insurance. Our liability is limited to the value of the work carried out. We are not liable for any pre-existing defects, damage caused by unforeseen circumstances beyond our control, or consequential losses.</p>
          <p>We will always take reasonable care of your property and will notify you immediately if anything unexpected arises during the course of work.</p>
        </Section>

        <Section title="Disputes">
          <p>We hope to resolve any concerns informally. If you are unhappy with any aspect of our service, please contact us directly in the first instance and we will do our best to resolve the matter fairly and promptly.</p>
        </Section>

        <Section title="Governing law">
          <p>These terms are governed by the laws of England and Wales.</p>
        </Section>

        <Section title="Contact us">
          <p>Questions about these terms? Get in touch:</p>
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
