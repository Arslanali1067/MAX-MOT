import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SiteIcon, type SiteIconName } from "@/components/SiteIcon";

export const metadata: Metadata = {
  title: "Contact | MAX MOT Centre",
  description:
    "Contact MAX MOT Centre in Accrington to book your MOT, service, diagnostics, or repair work.",
};

const contactCards: {
  icon: SiteIconName;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: "phone",
    title: "Call us",
    text: "01254 239685",
    href: "tel:01254239685",
  },
  {
    icon: "mail",
    title: "Email us",
    text: "maxmotaccy@gmail.com",
    href: "mailto:maxmotaccy@gmail.com",
  },
  {
    icon: "mapPin",
    title: "Find us",
    text: "Ranger St, Accrington BB5 0RL",
    href: "https://maps.google.com/?q=Ranger%20St%2C%20Accrington%20BB5%200RL%2C%20United%20Kingdom",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header activePath="/contact" />
      <main>
        <PageHero
          className="page-hero-contact"
          eyebrow="Contact MAX MOT Centre"
          title="Book your MOT or speak to the garage"
          text="Call, email, or send your details and we will help with MOT testing, servicing, diagnostics, and repairs."
        />

        <section className="page-section contact-overview">
          <div className="contact-card-grid">
            {contactCards.map((card) => (
              <a className="contact-card" href={card.href} key={card.title}>
                <SiteIcon name={card.icon} />
                <span>{card.title}</span>
                <strong>{card.text}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-layout">
          <div className="contact-panel">
            <p className="page-eyebrow">Send an enquiry</p>
            <h2>Tell us what your vehicle needs</h2>
            <form className="contact-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" placeholder="Your phone number" />
              </label>
              <label>
                Vehicle registration
                <input type="text" name="registration" placeholder="Vehicle reg" />
              </label>
              <label>
                How can we help?
                <textarea name="message" placeholder="MOT, service, repair or diagnostics" rows={5} />
              </label>
              <ButtonLink href="mailto:maxmotaccy@gmail.com?subject=Booking%20enquiry">
                <span aria-hidden="true">▣</span>
                SEND ENQUIRY
              </ButtonLink>
            </form>
          </div>

          <aside className="visit-panel">
            <div>
              <SiteIcon name="clock" />
              <h3>Opening hours</h3>
              <p>
                Monday - Friday
                <br />
                9:00am - 5:00pm
              </p>
            </div>
            <div>
              <SiteIcon name="mapPin" />
              <h3>Garage address</h3>
              <p>
                Ranger St, Accrington
                <br />
                BB5 0RL, United Kingdom
              </p>
            </div>
            <ButtonLink href="tel:01254239685" variant="dark">
              <span aria-hidden="true">☎</span>
              CALL NOW
            </ButtonLink>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
