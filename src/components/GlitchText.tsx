export default function GlitchText({ children }: { children: string }) {
  return (
    <div className="glitch" data-text={children}>
      {children}
    </div>
  );
}
