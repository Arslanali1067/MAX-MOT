import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header activePath="/" />
      <main>
        <Hero />
        <Services />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
