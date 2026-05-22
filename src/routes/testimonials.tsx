import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — SportSafe Australia" },
      { name: "description", content: "Hear from clubs and customers about our custom mouthguards and mobile fitting service." },
    ],
  }),
  component: Testimonials,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads/2018/11";

const items = [
  {
    quote: "I just want to say these guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted sports mouthguards. We are receiving lots of compliments. Thank you again.",
    name: "Andrew Gommers",
    role: "Marketing, Sponsorship & Events Manager — Northern Blues (VFL)",
    img: "BluesPortrait-128x128-1.png",
  },
  {
    quote: "SportSafe Australia is a valued partner of the Harlequin Rugby Club. For many years they have provided mouthguards to the junior and senior teams with the highest quality materials and fitting. Harlequins demand high standards for safety equipment provided to their rugby players and SportSafe Australia are our preferred supplier of custom made professionally fitted sports mouthguards.",
    name: "Kim Hamilton",
    role: "Chair of Marketing — Harlequins Rugby Union Club",
    img: "harlequin.jpg",
  },
  {
    quote: "We are one of the biggest junior football clubs in the Yarra Junior Football League with over 500 kids and as a family club we highly recommend SportSafe Australia to all sporting clubs for their mouthguard service, quality and sponsorship.",
    name: "Evan Butterworth",
    role: "President — St Marys Greensborough Junior Football Club",
    img: "st-marys-1.png",
  },
  {
    quote: "The East Burwood Junior Football Club has been using SportSafe Australia as our provider of custom made professionally fitted mouthguards for our junior players for the past three years. Over this time we have been more than satisfied with the service and quality. They have proven to be reliable and safe with great care taken in the fitting for every child. The staff have always been a pleasure to deal with and the service first class. On every occasion the mouthguards have been delivered on time and to specification. The ability to reclaim a large portion of the fee through private health insurance has been very well received with our parent group. I would have no hesitation in recommending SportSafe Australia to any other sporting organisation.",
    name: "John Brady",
    role: "Secretary — East Burwood Junior Football Club",
    img: "725974_1_S-150x150.jpg",
  },
  {
    quote: "The St Paul's McKinnon Junior Football Club used SportSafe Australia as our mouthguard supplier for the first time for the 2015 season. Everyone involved was really pleased with the outcome. The SportSafe team was great to work with, accommodating of our needs (turning up on two separate occasions) and the process of ordering and fitting on the day was smooth and hassle free. The product is great and delivery was very quick. Members could get a valid receipt to easily claim from their health fund. The biggest problem anyone has is what colour to choose! We will certainly engage them again and recommend them to any sporting club.",
    name: "Katherine Smith",
    role: "Sponsorship & Marketing Coordinator — St Paul's McKinnon JFC",
    img: "st-pauls.jpg",
  },
  {
    quote: "Our club has been using SportSafe Australia as our mouthguard supplier since 2009. We have an annual Registration Day which they attend and take moulds for the duration of the day. The quality of the product is excellent and their service and turn-around time is fantastic.",
    name: "Corey Hattwell",
    role: "President — Doncaster Junior Football Club",
    img: "Doncaster-Cats-JFC1.jpg",
  },
  {
    quote: "Our club has been using SportSafe Australia as our mouthguard supplier since 2009. We have an annual Registration Day which they attend and take moulds for the duration of the day. The quality of the product is excellent and their service and turn-around time is fantastic.",
    name: "Chris Denier",
    role: "Gymea Gorillas Junior Rugby League Club, Sydney",
    img: "gymea-1-300x292.png",
  },
  {
    quote: "The Altona Junior Football Club has been using SportSafe Australia's custom made mouthguards since 2009. They offer a comprehensive range while keeping family budgets in mind. The team come out to our Registration Day every year to conveniently fit approximately 100 children consecutively — a service that is second to none, quick and extremely professional. The turnaround from fitting day to wearing is remarkably fast and a second fitting day is really convenient for late registrations. We have even had families contact SportSafe directly for an urgent replacement and to our surprise it was remodelled and posted out. We cannot recommend them highly enough.",
    name: "Naomi Redpath",
    role: "Administrator — Altona Junior Football Club",
    img: "Altona-JFC-150x150.png",
  },
  {
    quote: "Canterbury Junior Football Club used SportSafe for all their mouthguard needs for the 2011 season. We had an overwhelming response to the first evening and had to run a second night to ensure everyone could be fitted before the season. SportSafe were extremely professional and their customer service was second to none. One or two of the boys wanted adjustments after receiving them, and SportSafe went out of their way to accommodate. I would highly recommend their service to any club.",
    name: "John Rutledge",
    role: "President — Canterbury Junior Football Club",
    img: "canterbury.jpg",
  },
  {
    quote: "We found your team to be friendly, professional and prompt with both your service and delivery. It made it very easy and convenient that you were able to come to our club at a time that suited us to undertake both the fittings and delivery. The quality of your product is excellent and we are very thankful and impressed that you were able to meet our incredibly tight deadline. We have no hesitation in recommending SportSafe to any sports club. Looking forward to doing business with you again.",
    name: "Michelle Blake",
    role: "Secretary — Surrey Park Junior Football Club",
    img: "93080_1_S.jpg",
  },
];

function Testimonials() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="What people say about us."
      />

      <section className="px-6 space-y-24">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <div className="mx-auto max-w-3xl">
              <p className="text-2xl md:text-3xl leading-snug tracking-tight font-medium">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={`${SRC}/${t.img}`} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
