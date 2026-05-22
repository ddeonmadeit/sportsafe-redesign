import smj from "@/assets/partners/smj.png";
import blues from "@/assets/partners/blues.png";
import swans from "@/assets/partners/swans.jpeg";
import gymea from "@/assets/partners/gymea.png";
import rookieme from "@/assets/partners/rookieme.png";
import pure from "@/assets/partners/pure.png";

const partners = [
  { name: "South Metro Junior Football League", img: smj },
  { name: "Northern Blues VFL", img: blues },
  { name: "South Melbourne Swans", img: swans },
  { name: "Gymea Gorillas JRLFC", img: gymea },
  { name: "RookieMe", img: rookieme },
  { name: "Pure", img: pure },
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
              loading="eager"
              decoding="async"
              className="max-h-full w-auto object-contain opacity-80 transition-opacity"
              style={{ filter: "grayscale(15%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { partners };
