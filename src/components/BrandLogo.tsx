import Image from "next/image";
import { STORE } from "@/lib/store";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "header" | "hero";
};

const sizes = {
  header: { width: 148, height: 84, className: "h-11 w-auto sm:h-12" },
  hero: {
    width: 520,
    height: 294,
    className: "h-auto w-[min(100%,22rem)] sm:w-[min(100%,28rem)] md:w-[min(100%,34rem)]",
  },
} as const;

export function BrandLogo({
  className = "",
  priority = false,
  size = "header",
}: BrandLogoProps) {
  const config = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt={STORE.name}
      width={config.width}
      height={config.height}
      priority={priority}
      className={`${config.className} ${className}`.trim()}
    />
  );
}
