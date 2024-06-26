import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

export default function Header() {
  const navigationItems = [
    {
      title: "Accueil",
      href: "/"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ];

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink>
                    <Link to={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Link className="font-semibold" to={"/"}>
            <img src={"/logo/logo.jpg"} alt="" className="h-24 w-auto" />
          </Link>
        </div>
        <Link className="flex justify-end w-full gap-4" to={"/seances"}>
          <Button>Réserver</Button>
        </Link>
      </div>
    </header>
  );
}
