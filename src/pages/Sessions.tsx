import Header from "@/components/Site/Header";
import FormSession from "@/components/Site/FormSession";
import Pricing from "@/components/Site/Princing";
import FAQ from "@/components/Site/FAQ";
import Footer from "@/components/Site/Footer";

export default function Sessions() {
  return (
    <>
      <Header />
      <main>
        <FormSession />
        <Pricing />
      </main>
      <aside>
        <FAQ />
      </aside>
      <Footer />
    </>
  );
}
