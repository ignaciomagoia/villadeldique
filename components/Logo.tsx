type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 130 54"
      role="img"
      aria-label="Logo de Villa del Dique"
      className={className}
    >
      <rect x="0" y="0" width="130" height="54" rx="10" fill="transparent" />
      <text
        x="8"
        y="40"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-1"
      >
        <tspan fill="#A7BE16">V</tspan>
        <tspan fill="#70C2EE">dD</tspan>
      </text>
    </svg>
  );
}
