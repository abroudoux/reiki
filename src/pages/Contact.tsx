import Header from "@/components/Site/Header";
import FormContact from "@/components/Site/FormContact";
import About from "@/components/Site/About";
import FAQ from "@/components/Site/FAQ";
import Footer from "@/components/Site/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <FormContact />
        <About />
      </main>
      <aside>
        <FAQ />
      </aside>
      <Footer />
    </>
  );
}
