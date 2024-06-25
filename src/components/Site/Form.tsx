import { useState } from "react";
import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Form() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Réservez dès maintenant un rendez-vous !
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Vous avez des questions ou vous souhaitez en savoir plus sur nos services ?
                  N&apos;hésitez pas à nous contacter.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Des soins adpatés à tous</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Développe la connaissance de soi</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Permet d'améliorer la confiance en soi, le respect et l'acceptation.</p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <p>Prendre rendez-vous</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Sélectionner une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">Prénom</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Nom</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Input id="message" type="file" />
              </div>
              <Button className="gap-4 w-full">
                Valider <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
