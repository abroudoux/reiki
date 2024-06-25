import Header from "@/components/Site/Header";
import Pricing from "@/components/Site/Princing";
import GetStarted from "@/components/Site/GetStarted";
import FAQ from "@/components/Site/FAQ";
import Footer from "@/components/Site/Footer";

export default function Sessions() {
  return (
    <>
      <Header />
      <main>
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
