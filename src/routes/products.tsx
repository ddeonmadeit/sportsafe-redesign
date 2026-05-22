import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";
import { SelectableCard } from "@/components/SelectionBar";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — SportSafe Australia" },
      { name: "description", content: "Our complete range of custom-made mouthguards: triple colours, team logos, names, fangs, grills, marble, harlequin and more." },
    ],
  }),
  component: Products,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads/2018/11";

type Category = { name: string; description: string; images: string[] };

const categories: Category[] = [
  { name: "Triple Colours", description: "Three colour combinations tailored to your team or personal palette.", images: ["Three-001.png", "Three-002.png", "Three-003.png", "Three-004.png"] },
  { name: "Team Logos", description: "Your club's logo crafted into the mouthguard for instant team pride.", images: ["Logo01.png", "Logo02.png", "Logo03.png", "Logo04.png"] },
  { name: "Single Colours", description: "Clean, classic single-colour mouthguards in your chosen shade.", images: ["single01.png", "single02.png", "single03.png", "single04.png"] },
  { name: "Pearl Colours", description: "A subtle, premium pearl finish for a refined look.", images: ["pearl01-1.png", "pearl02-1.png", "pearl03-1.png"] },
  { name: "Names & Slogans", description: "Personalise with a name, number or slogan moulded right in.", images: ["slogans01.png", "slogans02.png", "slogans03.png", "slogans04.png"] },
  { name: "Multi Stripes", description: "Bold stripes in your team's colours for a striking finish.", images: ["stripes01.png", "stripes02.png", "stripes03.png", "stripes04.png"] },
  { name: "Multi Colours", description: "Mix multiple colours into one unique custom design.", images: ["multicolor01.png", "multicolor02.png", "multicolor03.png", "multicolor04.png"] },
  { name: "Micro Harlequin", description: "A precise harlequin pattern in a finer, micro scale.", images: ["harlequin01.png", "harlequin02.png", "harlequin03.png", "harlequin04.png"] },
  { name: "Marble Effect", description: "Beautiful swirled marble patterns — no two are alike.", images: ["marble01.png", "marble02.png", "marble03.png", "marble04.png"] },
  { name: "Maddie Riewoldt's Vision", description: "Mouthguards crafted in support of Maddie Riewoldt's Vision.", images: ["maddie01.png", "maddie02.png"] },
  { name: "Flavoured", description: "Add a flavour to make wearing your mouthguard more enjoyable.", images: ["flavour01.png", "flavour02.png", "flavour03.png", "flavour04.png"] },
  { name: "Dual Colours", description: "Two colours layered for a sharp two-tone effect.", images: ["dual01.png", "dual02.png", "dual03.png", "dual04.png"] },
  { name: "Customised Grills", description: "Statement grill-style mouthguards customised to your design.", images: ["grills01.png", "grills02.png", "grills03.png", "grills04.png"] },
  { name: "Customised Fangs", description: "Add fangs to your mouthguard for a fierce, fun look.", images: ["fangs01.png", "fangs02.png", "fangs03.png", "fangs04.png"] },
  { name: "Country Flag", description: "Wear your country's flag — perfect for representative competition.", images: ["Flag01.png", "Flag02.png", "Flag03.png", "Flag04.png"] },
  { name: "Carlton", description: "Club-specific designs — Carlton-themed mouthguards.", images: ["Calton01.png", "Calton02.png", "Calton03.png"] },
];

function Products() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our range"
        title="Custom mouthguard designs."
        description="Sixteen ranges of professionally fitted, custom-made mouthguard styles — from clean single colours to bold team designs."
      />

      <section className="px-6 space-y-24">
        {categories.map((cat) => (
          <div key={cat.name} className="mx-auto max-w-6xl">
            <Reveal className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{cat.name}</h2>
              <p className="mt-3 text-muted-foreground">{cat.description}</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {cat.images.map((img, i) => {
                const url = `${SRC}/${img}`;
                const label = `${cat.name} #${i + 1}`;
                return (
                  <Reveal key={img} delay={i * 0.04}>
                    <SelectableCard item={{ id: `prod:${cat.name}:${img}`, name: label, img: url }}>
                      <div className="aspect-square flex items-center justify-center">
                        <img
                          src={url}
                          alt={label}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain pointer-events-none"
                        />
                      </div>
                    </SelectableCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
