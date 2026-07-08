import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

interface Props {
  size?: "sm" | "md" | "lg";
  theme?: "black" | "white";
  className?: string;
}

export function Cre8denMark({ size = "md", theme = "black", className }: Props) {
  // Use custom className if provided, otherwise fall back to scaled defaults
  const heightCls = className || (size === "sm" ? "h-4" : size === "lg" ? "h-9" : "h-6");
  const logo = theme === "white" ? logoWhite : logoBlack;
  
  return (
    <img src={logo} alt="CRE8DEN Logo" className={`w-auto object-contain ${heightCls}`} />
  );
}
