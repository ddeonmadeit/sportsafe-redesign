import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/athletes")({
  head: () => ({
    meta: [
      { title: "Athletes — SportSafe Australia" },
      {
        name: "description",
        content:
          "The clubs and athletes SportSafe Australia has proudly supplied custom mouthguards to — from Carlton FC and AFLW teams to Commonwealth Games medallists.",
      },
      { property: "og:title", content: "Athletes — SportSafe Australia" },
      {
        property: "og:description",
        content:
          "Clubs, AFLW teams and elite Australian athletes who trust SportSafe custom mouthguards.",
      },
    ],
  }),
  component: Athletes,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

type Club = {
  title: string;
  blurb?: string;
  images: string[];
};

const clubs: Club[] = [
  {
    title: "Carlton Football Club",
    blurb:
      "SportSafe Australia — proudly supplying custom mouthguards to the Carlton Football Club.",
    images: [
      "2018/11/01.png",
      "2018/11/02.png",
      "2018/12/Carlton-in-Action.png",
      "2018/11/3.png",
      "2018/11/4.png",
      "2018/11/5.png",
      "2018/11/08.png",
      "2018/11/06.png",
      "2018/11/10-3.png",
      "2018/11/07.png",
      "2018/11/05.png",
      "2018/11/04.png",
    ],
  },
  {
    title: "Collingwood Football Club — AFLW",
    blurb:
      "We were excited to work with outstanding athletes at Collingwood ahead of their AFLW season. Each squad member received a customised mouthguard.",
    images: [
      "2018/11/07-3.png",
      "2018/11/05-6.png",
      "2018/11/06-3.png",
      "2018/11/04-3.png",
      "2018/11/03-3.png",
      "2018/11/03-5.png",
      "2018/11/05-4.png",
      "2018/11/10-2.png",
      "2018/11/01-5.png",
      "2018/11/07-4.png",
      "2018/11/03-4.png",
      "2018/11/09-2.png",
    ],
  },
  {
    title: "Greater Western Sydney Giants — AFLW",
    blurb:
      "SportSafe Australia — proudly supplying custom mouthguards to the GWS Giants AFLW team.",
    images: [
      "2018/12/GWS-Giants.png",
      "2018/11/01-3.png",
      "2018/11/08-1.png",
      "2018/11/10-1.png",
      "2018/11/02-3.png",
      "2018/11/04-2.png",
      "2018/11/03-2.png",
    ],
  },
  {
    title: "AFLW Players",
    blurb:
      "Working with outstanding individual AFLW athletes from clubs across the league.",
    images: [
      "2018/11/Emma.png",
      "2018/12/Daisy-Bateman.png",
      "2018/11/Courtney.png",
      "2018/11/Tegan.png",
      "2018/11/KarenPaxman.png",
      "2018/12/Katherine-Smith.png",
      "2018/11/04-5.png",
      "2018/11/05-5.png",
      "2018/11/01-6.png",
      "2018/11/02-6.png",
      "2018/11/03-6.png",
    ],
  },
  {
    title: "Australian Outback Women's Gridiron",
    blurb:
      "SportSafe Australia proudly supported the Australian Outback Women's Gridiron team.",
    images: [
      "2018/11/01-7.png",
      "2018/11/02-7.png",
      "2018/11/Untitled-1.png",
      "2018/11/Athlete17.png",
      "2018/11/Athlete02.png",
      "2018/12/2018-12-11_15.57.04.jpg",
      "2018/11/IMG_9471.jpg",
      "2018/12/Baldacchino.png",
      "2018/12/Adam-Kaoullas.png",
      "2018/12/Caity-Becket.png",
    ],
  },
];

type Athlete = {
  name: string;
  role: string;
  images: string[];
  achievements: string[];
};

const athletes: Athlete[] = [
  {
    name: "Harry Garside",
    role: "Australian Boxer — 60kg Division",
    images: [],
    achievements: [
      "2018 Commonwealth Games — Gold Medallist (60kg)",
      "2018 Australasian Golden Glove Champion (60kg)",
      "2017 60kg Australian, King of the Ring & Oceanic Champion",
      "2015–2017 Multiple Elite Victorian and Australian Champion (60kg / 64kg)",
      "Represented Australia — World Boxing Championship, Hamburg (2017)",
      "Flag bearer — 2017 Oceanic Championships, QLD",
      "Training Camp — USA Olympic Training Facility, Colorado (2017)",
      "Represented Australia — Olympic Qualifiers in China & Azerbaijan (2016)",
      "2011–2014 Junior & Youth Victorian Champion",
    ],
  },
  {
    name: "Jason Whateley",
    role: "Australian Boxer — 91kg Heavyweight",
    images: ["2018/11/05-1.png", "2018/11/04-1.png", "2018/11/WhatelyMouthGuard.png", "2018/11/06-1.png", "2018/11/07-1.png", "2018/11/02-2.png"],
    achievements: [
      "2018 Commonwealth Games (Gold Coast) — Silver Medallist (91kg)",
      "Represented Australia — RIO 2016 Olympic Games (91kg)",
      "2016 Asia/Oceania Olympic Qualification Tournament — 1st (91kg)",
      "2016 Australian Championships — 1st (91kg)",
      "2015 Australian Championships — 2nd (91kg)",
      "2015 OCBC Oceania Championships — Represented Australia (91kg)",
      "2015 Doha International Tournament (Qatar)",
    ],
  },
  {
    name: "Shelley Watts",
    role: "Australian Boxer — 60kg Lightweight",
    images: ["2018/11/watts.png", "2018/11/watts2.png"],
    achievements: [
      "Represented Australia — RIO 2016 Olympic Games (60kg)",
      "2016 Asia/Oceania Olympic Qualification Tournament — 1st (60kg)",
      "2015 International Silesian Tournament (Poland) — 1st (64kg)",
      "2015 Queens Cup International Tournament (Germany) — 1st (64kg)",
      "2015 Australian Championships — 1st (60kg)",
      "2014 Commonwealth Games — Glasgow, Great Britain",
    ],
  },
  {
    name: 'Jai "Fuego" Alexander',
    role: "Boxer",
    images: [],
    achievements: [
      "6× Victorian Titles",
      "3× Australian Titles",
      "Youth Commonwealth Games Bronze Medallist — Pune, India",
    ],
  },
];

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
      {images.map((path, i) => (
        <Reveal key={path} delay={i * 0.03}>
          <div className="aspect-square overflow-hidden rounded-xl bg-muted/30">
            <img
              src={`${SRC}/${path}`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Athletes() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trusted by the best"
        title="Athletes & clubs."
        description="Custom-fitted mouthguards worn by AFL and AFLW clubs, Commonwealth Games and Olympic medallists, and elite Australian athletes."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* St Kilda — text-only feature */}
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                St Kilda Football Club
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In collaboration with the Snowdome Foundation — a not-for-profit
                that funds research into new treatments for blood cancers —
                Maddie Riewoldt's Vision aims to raise funds to{" "}
                <span className="font-semibold text-foreground">
                  #fightlikemaddie
                </span>{" "}
                and find new treatments for Bone Marrow Failure. In 2017, St
                Kilda's Senior AFL players wore our custom-made mouthguards in
                their match against Richmond in support of the charity and
                Maddie's Vision.
              </p>
            </div>
          </Reveal>

          {/* Club galleries */}
          {clubs.map((club) => (
            <div key={club.title}>
              <Reveal className="max-w-3xl mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {club.title}
                </h2>
                {club.blurb && (
                  <p className="mt-3 text-muted-foreground">{club.blurb}</p>
                )}
              </Reveal>
              <Gallery images={club.images} />
            </div>
          ))}

          {/* Individual athletes */}
          <div className="space-y-20 pt-4">
            {athletes.map((a) => (
              <Reveal key={a.name}>
                <div className="grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-5">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {a.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground uppercase tracking-[0.16em] font-semibold">
                      {a.role}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {a.achievements.map((ach) => (
                        <li
                          key={ach}
                          className="flex gap-3 text-[15px] leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {a.images.length > 0 && (
                    <div className="md:col-span-7">
                      <Gallery images={a.images} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
