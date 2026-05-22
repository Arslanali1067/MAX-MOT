import type { ReactNode } from "react";

export type SiteIconName =
  | "badge"
  | "calendar"
  | "car"
  | "check"
  | "clock"
  | "diagnostic"
  | "mail"
  | "mapPin"
  | "phone"
  | "shield"
  | "tool"
  | "wrench";

export function SiteIcon({ name }: { name: SiteIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.2,
    viewBox: "0 0 24 24",
  };

  const icons: Record<SiteIconName, ReactNode> = {
    badge: (
      <svg {...commonProps}>
        <path d="M9 5h6" />
        <path d="M9 3h6v4H9z" />
        <path d="M7 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <path d="m8 13 2 2 5-5" />
      </svg>
    ),
    calendar: (
      <svg {...commonProps}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    car: (
      <svg {...commonProps}>
        <path d="M5 12h14l-1.6-4.1A3 3 0 0 0 14.6 6H9.4a3 3 0 0 0-2.8 1.9z" />
        <path d="M4 12v5h2" />
        <path d="M18 17h2v-5" />
        <circle cx="7" cy="15" r="1.6" />
        <circle cx="17" cy="15" r="1.6" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    clock: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    diagnostic: (
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
    phone: (
      <svg {...commonProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    tool: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M4 8 2.8 6.8" />
        <path d="m20 8 1.2-1.2" />
        <path d="M4 16 2.8 17.2" />
        <path d="m20 16 1.2 1.2" />
      </svg>
    ),
    wrench: (
      <svg {...commonProps}>
        <path d="M14.7 6.3a4.5 4.5 0 0 0-5.4 5.4L3.8 17.2a2.1 2.1 0 0 0 3 3l5.5-5.5a4.5 4.5 0 0 0 5.4-5.4l-3.1 3.1-3-3z" />
      </svg>
    ),
  };

  return <span className="site-icon">{icons[name]}</span>;
}
