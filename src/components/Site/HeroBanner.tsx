import { Link } from "react-router-dom";
import { MoveRight, BadgeInfo } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroBanner() {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Rejoignez-nous !</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-xl tracking-tighter text-left font-regular">
                Le soin Reiki proche de chez vous à Angers.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Technique ancestrale de soin naturelle originaire du Japon, le soin Reiki réveille
                votre médecin intérieur pour favoriser l'autoguérison et le renforcement de votre
                système immunitaire . Il apporte un supplément d'énergie qui réharmonise et
                revitalise le corps et l'esprit.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <Link to={"#about"}>
                <Button size="lg" className="gap-4" variant="outline">
                  À propos <BadgeInfo className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={"/contact"}></Link>
              <Button size="lg" className="gap-4">
                Réserver une séance <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square">
              <img
                src={"/img/img-1.jpg"}
                alt=""
                className="w-auto h-full object-cover rounded-md"
              />
            </div>
            <div className="bg-muted rounded-md row-span-2">
              <img
                src={"/img/img-2.jpg"}
                alt=""
                className="w-auto h-full object-cover rounded-md"
              />
            </div>
            <div className="bg-muted rounded-md aspect-square">
              <img
                src={"/img/img-5.jpg"}
                alt=""
                className="w-auto h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
