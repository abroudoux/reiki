import { Link } from "react-router-dom";
import { MoveRight, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Réservez dès maintenant</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Le soin commence ici.
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Le Reiki est une technique de soin énergétique issue de la médecine ancestrale
              japonaise. Le soin fonctionne par apposition des mains pour transférer l'énergie
              régénératrice et la faire circuler dans le corps du patient pour le libérer des
              blocages et des tensions tant physiques que psychiques.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="outline">
              <Link to={"/contact"} className="flex items-center gap-2">
                Contact <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button>
              <Link to={"/seances"} className="flex items-center gap-2">
                Réserver <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
