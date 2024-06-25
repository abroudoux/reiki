import { Link } from "react-router-dom";
import { Check, MoveRight, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Tarifs</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Réharmonisation et revitalisation
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Des prix qui font sens pour votre santé et pour votre bien-être.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Au cabinet</span>
                </CardTitle>
                <CardDescription>
                  Nos spécialistes vous accueillent dans un cadre chaleureux et apaisant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">€50</span>
                    <span className="text-sm text-muted-foreground"> / séance</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Environ 45 minutes</p>
                        <p className="text-muted-foreground text-sm">
                          Nous prenons le temps de vous écouter et de vous conseiller.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Des soins procurés par nos spécialistes</p>
                        <p className="text-muted-foreground text-sm">
                          Nos spécialistes sont formés pour vous accompagner.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Entre 1 et 4 séances</p>
                        <p className="text-muted-foreground text-sm">
                          Nous vous proposons un suivi personnalisé.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"/seances"}>
                    <Button variant="outline" className="gap-4">
                      Réserver <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">À domicile</span>
                </CardTitle>
                <CardDescription>
                  Nous nous déplaçons chez vous pour vous offrir des soins de qualité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">€60</span>
                    <span className="text-sm text-muted-foreground"> / séance</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Comprend un entretien, un soin et un bilan</p>
                        <p className="text-muted-foreground text-sm">
                          Nous prenons le temps de vous écouter et de vous conseiller.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Des tenues adaptées et professionnelles, dans un environnement zen</p>
                        <p className="text-muted-foreground text-sm">
                          Nous vous proposons un suivi personnalisé.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Entre 1 et 4 séances</p>
                        <p className="text-muted-foreground text-sm">
                          Nous vous proposons un suivi personnalisé.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"/seances"}>
                    <Button className="gap-4">
                      Réserver <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">À distance</span>
                </CardTitle>
                <CardDescription>
                  Profitez des bienfaits du Reiki depuis le confort de votre domicile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">€40</span>
                    <span className="text-sm text-muted-foreground"> / séance</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Session de 45 minutes</p>
                        <p className="text-muted-foreground text-sm">
                          Nous prenons le temps de vous écouter et de vous conseiller.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Soin énergétique à distance</p>
                        <p className="text-muted-foreground text-sm">
                          Nos spécialistes sont formés pour vous accompagner à distance.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Entre 1 et 4 séances</p>
                        <p className="text-muted-foreground text-sm">
                          Nous vous proposons un suivi personnalisé.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"/seances"}>
                    <Button variant="outline" className="gap-4">
                      Réserver <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
