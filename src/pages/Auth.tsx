import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useStore from "@/lib/store";
import { login } from "@/utils/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { useToast } from "@/components/ui/use-toast";

export default function Auth() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, signIn, isLoading, setIsLoading } = useStore();
  const { toast } = useToast();

  if (token) navigate("/admin/app");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "identifier":
        setIdentifier(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const isLogged = await login(identifier, password);

    if (isLogged) {
      signIn();
      navigate("/admin/app");
      toast({
        variant: "default",
        description: "Vous êtes désormais connecté."
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
    <section className="w-screen h-screen flex-col-center-center gap-12">
      <Link className="font-semibold" to={"/"}>
        <img src={"/logo/logo.jpg"} alt="Angers Reiki logo" className="h-36 w-auto" />
      </Link>
      <form action="POST" onSubmit={loginUser}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Se connecter</CardTitle>
            <CardDescription>
              Saisissez votre identifiant et votre mot de passe pour accéder à votre compte.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="identifier">Identifiant</Label>
              <Input
                id="identifier"
                type="identifier"
                placeholder="m@example.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required onChange={handleChange} />
            </div>
          </CardContent>
          <CardFooter className="flex-col-center-start gap-3">
            <Button className="w-full">
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
