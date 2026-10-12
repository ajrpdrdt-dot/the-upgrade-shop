type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

// Shop photos are portrait 3:4. Each has 480w, 800w and 1200w WebP variants in /public/shop.
const VERSION = "v=r2";

export function ShopImg({ src, alt, priority = false, sizes, className }: Props) {
  const base = src.split("?")[0];
  if (!base.startsWith("/shop/") || !base.endsWith(".webp")) {
    return <img src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} decoding="async" />;
  }
  const stem = base.slice(0, -5);
  const srcSet = `${stem}-480.webp?${VERSION} 480w, ${stem}-800.webp?${VERSION} 800w, ${stem}.webp?${VERSION} 1200w`;
  return (
    <img
      src={`${stem}-800.webp?${VERSION}`}
      srcSet={srcSet}
      sizes={sizes ?? "(max-width: 900px) 100vw, 50vw"}
      width={1200}
      height={1600}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
