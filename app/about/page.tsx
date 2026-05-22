import type { Metadata } from "next";
import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SiteIcon, type SiteIconName } from "@/components/SiteIcon";

export const metadata: Metadata = {
  title: "About Us | MAX MOT Centre",
  description:
    "Learn more about MAX MOT Centre, a trusted local MOT and service specialist in Accrington.",
};

const values: {
  icon: SiteIconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "shield",
    title: "Honest recommendations",
    text: "We explain what matters now, what can wait, and why the work is needed.",
  },
  {
    icon: "wrench",
    title: "Practical workmanship",
    text: "Your vehicle is handled with care by technicians focused on reliable everyday driving.",
  },
  {
    icon: "check",
    title: "Fair local service",
    text: "Straightforward pricing and a local team that wants customers to come back with confidence.",
  },
];

const stats = [
  { value: "4 & 7", label: "MOT classes" },
  { value: "5 days", label: "Open weekly" },
  { value: "Local", label: "Accrington garage" },
];

export default function AboutPage() {
  return (
    <>
      <Header activePath="/about" />
      <main>
        <PageHero
          className="page-hero-about"
          eyebrow="About MAX MOT Centre"
          title="Your local straight-talking garage"
          text="We help drivers in Accrington keep their vehicles roadworthy with MOT testing, servicing, diagnostics, and repair support."
        />

        <section className="split-section">
          <div>
            <p className="page-eyebrow">Who we are</p>
            <h2>Trusted support for everyday drivers</h2>
            <p>
              MAX MOT Centre is built around clear communication and dependable vehicle care.
              Whether you are booking an MOT, checking a fault, or planning a service, the goal is
              simple: make the next step easy to understand.
            </p>
            <p>
              We work with all makes and models, and we focus on the kind of advice customers
              actually need: plain, honest, and useful.
            </p>
          </div>
          <div className="stat-panel">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="section-heading">
            <p className="page-eyebrow">What matters to us</p>
            <h2>Good garage work should feel clear</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <SiteIcon name={value.icon} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-band">
          <p className="page-eyebrow">Our promise</p>
          <h2>No confusing jargon. No surprise work. Just proper care for your vehicle.</h2>
        </section>

        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
