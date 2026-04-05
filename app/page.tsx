import { Header } from "@/components/Header";
import { MobileBookBar } from "@/components/MobileBookBar";
import { About } from "@/components/sections/About";
import { Book } from "@/components/sections/Book";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { getBookingEmbeds } from "@/lib/site";

export default function Home() {
  const { inPerson, online } = getBookingEmbeds();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <CredibilityStrip />
        <About />
        <Services />
        <Book inPersonEmbed={inPerson} onlineEmbed={online} />
        <Location />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
      <MobileBookBar />
    </>
  );
}
