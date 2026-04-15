/**
 * Renders a gradient bridge between two adjacent sections.
 * Negative vertical margins let it overlap both sections so there's
 * no gap in the layout — just a smooth colour blend.
 */
export default function SectionFade({
  from,
  to,
  height = 80,
}: {
  from: string;
  to: string;
  height?: number;
}) {
  const half = height / 2;
  return (
    <div
      aria-hidden="true"
      className="relative pointer-events-none"
      style={{
        height,
        marginTop: -half,
        marginBottom: -half,
        zIndex: 1,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}
