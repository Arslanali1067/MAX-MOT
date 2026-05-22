import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";

type FooterIconName = "phone" | "mail" | "mapPin" | "clock" | "facebook" | "instagram" | "arrow";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const openingHours = [
  {
    title: "Monday - Friday",
    text: "9:00am - 5:00pm",
  },
];

const contactItems = [
  {
    icon: "phone",
    label: "01254 239685",
    href: "tel:01254239685",
  },
  {
    icon: "mail",
    label: "maxmotaccy@gmail.com",
    href: "mailto:maxmotaccy@gmail.com",
  },
  {
    icon: "mapPin",
    label: "Ranger St, Accrington BB5 0RL",
    href: "https://maps.google.com/?q=Ranger%20St%2C%20Accrington%20BB5%200RL%2C%20United%20Kingdom",
  },
] satisfies {
  icon: FooterIconName;
  label: string;
  href: string;
}[];

function FooterIcon({ name }: { name: FooterIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.2,
    viewBox: "0 0 24 24",
  };

  const icons: Record<FooterIconName, ReactNode> = {
    phone: (
      <svg {...commonProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    mapPin: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    clock: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    facebook: (
      <svg {...commonProps}>
        <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.3l.7-3h-3v-1.5a.5.5 0 0 1 .5-.5H17V8z" />
      </svg>
    ),
    instagram: (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
    arrow: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
  };

  return <span className="footer-icon">{icons[name]}</span>;
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p className="footer-summary">
            MOT &amp; Service Specialist
            <br />
            in Accrington
          </p>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook">
              <FooterIcon name="facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <FooterIcon name="instagram" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <FooterIcon name="arrow" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>OPENING HOURS</h4>
          <div className="footer-info-list">
            {openingHours.map((item) => (
              <div className="footer-info-item" key={item.title}>
                <FooterIcon name="clock" />
                <span>
                  <strong>{item.title}</strong>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <div className="footer-info-list">
            {contactItems.map((item) => (
              <a className="footer-info-item" href={item.href} key={item.label}>
                <FooterIcon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 Max MOT Centre. All rights reserved.</div>
    </footer>
  );
}
