const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

const partners = [
  { name: "South Metro Junior Football League", img: `${SRC}/2018/11/SMJ-150x150.png` },
  { name: "Northern Blues VFL", img: `${SRC}/2018/11/BluesPortrait-128x128.png` },
  { name: "South Melbourne Swans", img: `${SRC}/2018/11/swans.jpeg` },
  { name: "Gymea Gorillas JRLFC", img: `${SRC}/2018/11/gymea-300x292.png` },
  { name: "RookieMe", img: `${SRC}/2018/11/RookieMe-150x150.png` },
  { name: "Pure", img: `${SRC}/2018/11/Pure-150x150.png` },
  { name: "Garside & Whateley Boxing", img: `${SRC}/2018/12/GarsideWhateleyBannerV2.png` },
];

export function PartnersMarquee() {
  // duplicate the list so the translateX(-50%) loop is seamless
  const loop = [...partners, ...partners];
  return (
    <div className="marquee py-4">
      <div className="marquee__track">
        {loop.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex items-center justify-center h-20 md:h-24 shrink-0"
            title={p.name}
          >
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              className="max-h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              style={{ filter: "grayscale(15%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { partners };
