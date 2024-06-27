import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import useStore from "@/lib/store";
import { createSession } from "@/utils/sessions";
import { cn } from "@/lib/utils";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DialogCreateSession() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { isLoading, setIsLoading } = useStore();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
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

    const sessionCreated = await createSession(firstName, lastName, email, date);

    if (sessionCreated) {
      toast({
        variant: "default",
        description: `Votre demande de rendez-vous a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.`
      });
    } else {
      toast({
        variant: "destructive",
        description: "Une erreur est survenue. Veuillez réessayer."
      });
    }

    setIsLoading(false);
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={sendForm}>
        <DialogHeader>
          <DialogTitle>Ajouter une séance</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Sélectionner une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus required />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input id="name" className="col-span-3" required onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Prénom
            </Label>
            <Input id="username" className="col-span-3" required onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" required onChange={handleChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
