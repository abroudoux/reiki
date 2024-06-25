import Header from "@/components/Site/Header";
import HeroBanner from "@/components/Site/HeroBanner";
import About from "@/components/Site/About";
import Testimonials from "@/components/Site/Testimonials";
import Pricing from "@/components/Site/Princing";
import GetStarted from "@/components/Site/GetStarted";
import FAQ from "@/components/Site/FAQ";
import Footer from "@/components/Site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <About />
        <Testimonials />
        <Pricing />
        <GetStarted />
      </main>
      <aside>
        <FAQ />
      </aside>
      <Footer />
    </>
  );
}
