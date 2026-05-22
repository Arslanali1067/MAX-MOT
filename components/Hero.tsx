import { ButtonLink } from "@/components/ButtonLink";
import { CalendarIcon } from "@/components/CalendarIcon";

const trustItems = [
  {
    icon: "△",
    title: "MOT TESTING",
    text: "Class 4 & 7",
  },
  {
    icon: "✓",
    title: "QUALITY SERVICE",
    text: "Honest & Reliable",
  },
  {
    icon: "£",
    title: "FAIR PRICES",
    text: "Best Value Guarantee",
  },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span>MAX</span>
          MOT CENTRE
        </h1>
        <div className="tagline">MOT &amp; SERVICE SPECIALIST</div>
        <p className="intro">
          Trusted local garage in Accrington offering honest service and fair prices.
        </p>

        <div className="trust-row">
          {trustItems.map((item) => (
            <div className="trust" key={item.title}>
              <div className="trust-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <ButtonLink href="#book">
            <CalendarIcon />
            BOOK YOUR MOT
          </ButtonLink>
          <ButtonLink href="#contact" variant="dark">
            <span aria-hidden="true">☎</span>
            CONTACT US
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
