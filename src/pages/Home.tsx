import Header from "@/components/Site/Header";
import HeroBanner from "@/components/Site/HeroBanner";
import About from "@/components/Site/About";
import Testimonials from "@/components/Site/Testimonials";
import GetStarted from "@/components/Site/GetStarted";
import Footer from "@/components/Site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <About />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
