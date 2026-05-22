"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { CalendarIcon } from "@/components/CalendarIcon";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
];

export function Header({ activePath = "/" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <Logo />
      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        className="menu-toggle"
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`nav ${isMenuOpen ? "nav-open" : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <a
            className={activePath === link.href ? "active" : undefined}
            href={link.href}
            key={link.label}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <ButtonLink className="mobile-book" href="/contact" onClick={() => setIsMenuOpen(false)}>
          <CalendarIcon />
          BOOK YOUR MOT
        </ButtonLink>
      </nav>
      <ButtonLink className="desktop-book" href="/contact">
        <CalendarIcon />
        BOOK YOUR MOT
      </ButtonLink>
    </header>
  );
}
