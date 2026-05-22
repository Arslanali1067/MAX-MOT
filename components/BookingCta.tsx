import { ButtonLink } from "@/components/ButtonLink";
import { CalendarIcon } from "@/components/CalendarIcon";

export function BookingCta() {
  return (
    <section id="book" className="cta-wrap">
      <div className="cta">
        <div className="cta-left">
          <div className="round" aria-hidden="true">
            ▣
          </div>
          <div>
            <h2>BOOK YOUR MOT TODAY</h2>
            <p>Fast, easy and hassle-free booking.</p>
          </div>
        </div>
        <div className="cta-action">
          <ButtonLink href="#">
            <CalendarIcon />
            BOOK ONLINE
          </ButtonLink>
          <p>
            or call <span className="phone">01254 239685</span>
          </p>
        </div>
      </div>
    </section>
  );
}
