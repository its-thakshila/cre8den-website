interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({ src, alt, className, style }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
    />
  );
}
