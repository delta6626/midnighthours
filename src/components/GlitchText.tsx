export default function GlitchText({
  children,
  width,
  size = "md",
  borderOn,
}: {
  children: string;
  width: string;
  size?: "sm" | "md" | "lg";
  borderOn?: boolean;
}) {
  return (
    <div
      className="glitch"
      data-text={children}
      style={{ width: width, border: `${borderOn && "1px solid red"}` }}
      data-size={size}
    >
      {children}
    </div>
  );
}
