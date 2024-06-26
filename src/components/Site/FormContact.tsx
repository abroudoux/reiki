import { useState } from "react";
import { Check, MoveRight } from "lucide-react";

import useStore from "@/lib/store";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const { setIsLoading } = useStore();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
      default:
        break;
    }
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        mail,
        message: e.currentTarget.message.value
      })
    });

    if (!res.ok) {
      toast({
        variant: "destructive",
        description: `Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.`
      });
      setIsLoading(false);
      return;
    }

    toast({
      variant: "default",
      description: `Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.`
    });

    setIsLoading(false);
  };

  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Contactez nous dès maintenant.
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Vous avez des questions ou vous souhaitez en savoir plus sur nos services ?
                  N&apos;hésitez pas à nous contacter.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Une réponse rapide rédigée par nos experts</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>
                  Un accompagnement personnalisé le temps de votre traitement, en amont et en aval
                </p>
              </div>
            </div>
          </div>
          <form className="justify-center flex items-center" onSubmit={sendForm}>
            <div className="rounded-md w-3/4 flex flex-col border p-8 gap-4">
              <p>Nous contacter</p>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  onChange={handleChange}
                  placeholder="Votre prénom"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="mail">Mail</Label>
                <Input
                  id="mail"
                  type="text"
                  required
                  onChange={handleChange}
                  placeholder="Votre mail"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  onChange={handleChange}
                  placeholder="Veuillez écrire votre message ici"
                />
              </div>
              <Button type="submit" className="gap-4 w-full">
                Envoyer <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
