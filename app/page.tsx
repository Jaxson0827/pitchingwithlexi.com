import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Waitlist } from "@/components/sections/Waitlist";
import { getWaitlistFormAction } from "@/lib/site";

export default function Home() {
  const waitlistAction = getWaitlistFormAction();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main" className="min-w-0">
        <Hero />
        <CredibilityStrip />
        <About />
        <Services />
        <Waitlist formAction={waitlistAction} />
        <Location />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
