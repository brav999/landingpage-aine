export type LogoMarkProps = {
  className?: string;
  variant?: "color" | "mono";
};

const LogoMark = ({ className, variant = "color" }: LogoMarkProps) => {
  const gradientId = "aineGradient";
  const svgClassName = className ?? "h-16 w-16";
  const circleFill = variant === "color" ? `url(#${gradientId})` : "currentColor";
  const accentFill = variant === "color" ? "#F7F4FB" : "#FFFFFF";
  const leafFill = variant === "color" ? "#F0FDF9" : "currentColor";
  const baseFill = variant === "color" ? "#E7E2F6" : "currentColor";
  const leafOpacity = variant === "color" ? 0.85 : 0.3;
  const baseOpacity = variant === "color" ? 0.9 : 0.25;

  return (
    <svg
      className={svgClassName}
      viewBox="0 0 120 120"
      role="img"
      aria-labelledby="aine-logo-title aine-logo-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="aine-logo-title">Logotipo da Ainé Fisiopélvica</title>
      <desc id="aine-logo-description">
        Marca circular com a letra A estilizada e detalhes orgânicos representando cuidado e equilíbrio.
      </desc>
      {variant === "color" && (
        <defs>
          <linearGradient id={gradientId} x1="20" y1="18" x2="96" y2="102" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD9C9" />
            <stop offset="45%" stopColor="#9AD5C0" />
            <stop offset="100%" stopColor="#6B6BB5" />
          </linearGradient>
        </defs>
      )}
      <circle cx="60" cy="60" r="56" fill={circleFill} />
      <path
        d="M60 28c-18.5 0-34 15.5-34 34 0 15.1 9.4 28 22.8 32.7l11.1-30.3H46.8l-7.4 20.1C32 79.3 27 70.5 27 60.4 27 43.8 40.6 30.2 57.2 30.2c16.6 0 30.2 13.6 30.2 30.2 0 10.1-5 18.9-12.4 24.5l-7.4-20.1H60l11.1 30.3C84.6 90 94 77.1 94 62c0-18.5-15.5-34-34-34z"
        fill={accentFill}
      />
      <path
        d="M86.5 42c6.7 4.4 10.9 11.4 10.9 19.7 0 1.2-.1 2.3-.2 3.4-9.5-.7-17.1-6-20.7-13.4 2.3-4.3 5.4-7.8 10-9.7z"
        fill={leafFill}
        opacity={leafOpacity}
      />
      <path
        d="M38 92c6.6 6.9 15.9 11.2 26 11.2s19.4-4.3 26-11.2c-8.3 3.4-16.9 5.2-26 5.2S46.3 95.4 38 92z"
        fill={baseFill}
        opacity={baseOpacity}
      />
    </svg>
  );
};

export default LogoMark;
