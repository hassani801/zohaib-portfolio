export function CRTText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`crt-root text-brand font-medium text-base lg:text-lg ${className}`}>
      <span aria-hidden className="crt-wrap">
        {text.split("").map((char, i) => (
          <span key={`${char}-${i}`} className="crt-cell" style={{ "--i": i } as React.CSSProperties}>
            <span className="crt-stack">
              <span className="crt-glyph">{char === " " ? "\u00A0" : char}</span>
              <span className="crt-glyph">{char === " " ? "\u00A0" : char}</span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
