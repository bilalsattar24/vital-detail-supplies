import Image from "next/image";
import { STORE } from "@/lib/store";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "header" | "hero";
};

const sizes = {
  header: { width: 148, height: 102, className: "h-10 w-auto sm:h-11" },
  hero: {
    width: 560,
    height: 384,
    className:
      "h-auto w-[min(100%,17rem)] sm:w-[min(100%,22rem)] md:w-[min(100%,26rem)]",
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
