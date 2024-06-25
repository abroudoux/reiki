import { Heart, Users, Shell, Activity, Brain, Ear } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-20 lg:py-40" id="about">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Les bienfaits du soin Reiki
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Le Reiki ne soigne pas les maladies mais facilite leur traitement. Il ne se substitue
              pas à la médecine, le thérapeute ne fait aucun diagnostic, ne prescrit pas de
              médicament et s'engage à ne divulguer aucun renseignement confidentiel .
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Users className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pour tous</p>
                  <p className="text-muted-foreground text-sm">
                    Accessible à tous, adulte, enfants accompagnés, femmes enceintes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Heart className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pour tout type de situations</p>
                  <p className="text-muted-foreground text-sm">
                    Stress, état dépressif, épuisement, troubles du sommeil, tensions corporelles,
                    angoisses, agressivité.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Activity className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Soulage le coprs et l'esprit</p>
                  <p className="text-muted-foreground text-sm">
                    Soulage tensions et douleurs, favorise l'élimination des toxines.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Shell className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Développement spirituel</p>
                  <p className="text-muted-foreground text-sm">
                    Développe la connaissance de soi et accélère tout travail spirituel.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Ear className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Développement de soi</p>
                  <p className="text-muted-foreground text-sm">
                    Augmente la confiance, le respect, l'acceptation, l'amour de soi et des autres.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Brain className="w-6 h-6 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Amélioration des capacités</p>
                  <p className="text-muted-foreground text-sm">
                    Améliore la faculté de concentration et de mémoire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
