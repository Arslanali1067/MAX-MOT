import type { Metadata } from "next";
import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SiteIcon, type SiteIconName } from "@/components/SiteIcon";

export const metadata: Metadata = {
  title: "Services | MAX MOT Centre",
  description:
    "MOT testing, servicing, diagnostics, repairs, and brake work for drivers in Accrington.",
};

const services: {
  icon: SiteIconName;
  title: string;
  text: string;
  items: string[];
}[] = [
  {
    icon: "badge",
    title: "MOT Testing",
    text: "Clear, reliable MOT testing for Class 4 and Class 7 vehicles.",
    items: ["Class 4 MOT", "Class 7 MOT", "Retest guidance"],
  },
  {
    icon: "wrench",
    title: "Vehicle Servicing",
    text: "Interim, full, and major servicing to keep your vehicle running properly.",
    items: ["Oil and filter checks", "Fluid top-ups", "Service schedule advice"],
  },
  {
    icon: "diagnostic",
    title: "Diagnostics",
    text: "Modern diagnostic checks to find faults quickly and explain them clearly.",
    items: ["Warning lights", "Electrical faults", "Performance issues"],
  },
  {
    icon: "car",
    title: "Repairs",
    text: "Practical repairs for everyday vehicles, handled by experienced technicians.",
    items: ["General repairs", "Suspension checks", "Exhaust work"],
  },
  {
    icon: "tool",
    title: "Brakes",
    text: "Brake inspections and replacement work for safer, more confident driving.",
    items: ["Brake pads", "Brake discs", "Safety checks"],
  },
  {
    icon: "shield",
    title: "Pre-MOT Checks",
    text: "Helpful checks before your MOT so there are fewer surprises on test day.",
    items: ["Lights", "Tyres", "Wipers and visibility"],
  },
];

const processSteps = [
  "Book a time that suits you",
  "We inspect and explain the work",
  "You approve before repairs start",
  "Drive away with clear advice",
];

export default function ServicesPage() {
  return (
    <>
      <Header activePath="/services" />
      <main>
        <PageHero
          className="page-hero-services"
          eyebrow="Garage services in Accrington"
          title="Services built around honest advice"
          text="From MOT testing to diagnostics and repairs, MAX MOT Centre keeps things straightforward, practical, and fairly priced."
        />

        <section className="page-section">
          <div className="section-heading">
            <p className="page-eyebrow">What we do</p>
            <h2>Garage care without the guesswork</h2>
          </div>
          <div className="detail-grid">
            {services.map((service) => (
              <article className="detail-card" key={service.title}>
                <SiteIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <SiteIcon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section split-section-dark">
          <div>
            <p className="page-eyebrow">How it works</p>
            <h2>Simple process, clear answers</h2>
            <p>
              We keep you informed before any work is carried out. You get a clear explanation,
              useful options, and no unnecessary pressure.
            </p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <div className="process-item" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
