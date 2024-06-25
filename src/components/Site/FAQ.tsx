import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqItems = [
    {
      question: "Combien de temps dure une séance ?",
      answer: `Sa durée est de 45 min à 1 heure et comprend un entretien,
                le soin énergétique et un bilan. La personne est habillée dans une tenue
                confortable et choisit de recevoir le soin allongée sur le ventre ou sur le dos.
                En fonction de ce qui sera abordé lors d'un premier contact, prévoir 1 à 4 séances.`
    },
    {
      question: "Quels sont les bienfaits du Reiki ?",
      answer: `Le Reiki aide à réduire le stress, à favoriser la relaxation et à stimuler
                le processus de guérison naturel du corps. Il peut également aider à soulager
                les douleurs, améliorer la clarté mentale et émotionnelle, et renforcer le
                système immunitaire.`
    },
    {
      question: "Le Reiki est-il adapté pour tout le monde ?",
      answer: `Oui, le Reiki est une pratique douce et non invasive qui convient à tout le monde,
                indépendamment de l'âge ou de l'état de santé. Il peut être utilisé en complément
                d'autres traitements médicaux ou thérapies.`
    },
    {
      question: "Comment se déroule une séance de Reiki à distance ?",
      answer: `Une séance de Reiki à distance se déroule de la même manière qu'une séance en
                personne, sauf que le praticien et le receveur ne sont pas physiquement au même endroit.
                Le praticien se connecte énergétiquement au receveur et effectue le soin à distance,
                en utilisant l'intention et les symboles Reiki.`
    }
  ];

  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Qu'est-ce que le Reiki ?
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Le Reiki est une méthode de soins énergétiques d'origine japonaise qui vise à
                  rééquilibrer l'énergie du corps et de l'esprit. Il permet de diminuer le stress,
                  favoriser la relaxation et améliorer le bien-être général.
                </p>
              </div>
              <Link to={"/contact"}>
                <Button className="gap-4" variant="outline">
                  Des questions ? Contactez-nous <PhoneCall className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
