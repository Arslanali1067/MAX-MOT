import type { ReactNode } from "react";

type ServiceIconName = "clipboard" | "wrench" | "car" | "scan" | "brake";

const services: {
  icon: ServiceIconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "clipboard",
    title: "MOT TESTING",
    text: "Class 4 & 7",
  },
  {
    icon: "wrench",
    title: "SERVICING",
    text: "Interim, Full & Major Services",
  },
  {
    icon: "car",
    title: "REPAIRS",
    text: "All Makes & Models Welcome",
  },
  {
    icon: "scan",
    title: "DIAGNOSTICS",
    text: "Advanced Diagnostic Equipment",
  },
  {
    icon: "brake",
    title: "BRAKES",
    text: "Brake Checks & Replacements",
  },
];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.4,
    viewBox: "0 0 24 24",
  };

  const icons: Record<ServiceIconName, ReactNode> = {
    clipboard: (
      <svg {...commonProps}>
        <path d="M9 5h6" />
        <path d="M9 3h6v4H9z" />
        <path d="M7 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <path d="m8 13 2 2 5-5" />
      </svg>
    ),
    wrench: (
      <svg {...commonProps}>
        <path d="M14.7 6.3a4.5 4.5 0 0 0-5.4 5.4L3.8 17.2a2.1 2.1 0 0 0 3 3l5.5-5.5a4.5 4.5 0 0 0 5.4-5.4l-3.1 3.1-3-3z" />
      </svg>
    ),
    car: (
      <svg {...commonProps}>
        <path d="M5 12h14l-1.6-4.1A3 3 0 0 0 14.6 6H9.4a3 3 0 0 0-2.8 1.9z" />
        <path d="M4 12v5h2" />
        <path d="M18 17h2v-5" />
        <path d="M7 17h10" />
        <circle cx="7" cy="15" r="1.6" />
        <circle cx="17" cy="15" r="1.6" />
      </svg>
    ),
    scan: (
      <svg {...commonProps}>
        <path d="M7 4H5a1 1 0 0 0-1 1v2" />
        <path d="M17 4h2a1 1 0 0 1 1 1v2" />
        <path d="M20 17v2a1 1 0 0 1-1 1h-2" />
        <path d="M7 20H5a1 1 0 0 1-1-1v-2" />
        <path d="M7 12h10" />
        <path d="M9 9h6" />
        <path d="M9 15h4" />
      </svg>
    ),
    brake: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M4 8 2.8 6.8" />
        <path d="m20 8 1.2-1.2" />
        <path d="M4 16 2.8 17.2" />
        <path d="m20 16 1.2 1.2" />
      </svg>
    ),
  };

  return <span className="service-icon">{icons[name]}</span>;
}

export function Services() {
  return (
    <section id="services" className="services">
      <h2 className="section-title">OUR SERVICES</h2>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <ServiceIcon name={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
