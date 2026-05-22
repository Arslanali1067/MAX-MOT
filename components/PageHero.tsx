import { ButtonLink } from "@/components/ButtonLink";
import { CalendarIcon } from "@/components/CalendarIcon";

type PageHeroProps = {
  className?: string;
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ className = "", eyebrow, title, text }: PageHeroProps) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="page-hero-inner">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="page-hero-actions">
          <ButtonLink href="/contact">
            <CalendarIcon />
            BOOK YOUR MOT
          </ButtonLink>
          <ButtonLink href="tel:01254239685" variant="dark">
            <span aria-hidden="true">☎</span>
            01254 239685
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
