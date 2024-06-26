import { useState, useEffect } from "react";
import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { format } from "date-fns";

import useStore from "@/lib/store";
import { createSession } from "@/utils/sessions";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function FormSession() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { setIsLoading, sessions, addSession } = useStore();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      default:
        break;
    }
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!date) {
      toast({
        variant: "destructive",
        description: "Veuillez sélectionner une date."
      });
      setIsLoading(false);
      return;
    }

    const isMessageSent = await createSession(firstName, lastName, date);

    if (isMessageSent) {
      const newSession = { firstName, lastName, date };
      toast({
        variant: "default",
        description: `Votre message a été envoyé avec succès. Date du rendez-vous : ${format(date, "PPP")}. Nous vous répondrons dans les plus brefs délais.`
      });
    } else {
      toast({
        variant: "destructive",
        description: "Une erreur est survenue. Veuillez réessayer."
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Updated sessions:", sessions);
  }, [sessions]);

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
                <p>Des soins adaptés à tous</p>
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

          <form className="justify-center flex items-center" onSubmit={sendForm}>
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <p>Prendre rendez-vous</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">Date</Label>
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
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" type="text" required onChange={handleChange} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" type="text" required onChange={handleChange} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="message">
                  Message <span className="text-muted-foreground">(optionnel)</span>
                </Label>
                <Input id="message" type="file" />
              </div>
              <Button type="submit" className="gap-4 w-full">
                Valider <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}