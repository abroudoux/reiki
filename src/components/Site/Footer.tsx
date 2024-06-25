import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full p-8 flex-col-center-center">
      <Link className="font-semibold" to={"/"}>
        <img src={"/logo/logo.jpg"} alt="" className="h-24 w-auto" />
      </Link>
      <h2 className="text-2xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Angers Reiki
      </h2>
      <div className="my-10 flex-col-center-center gap-2">
        <p>33, Rue Edouart Manet, 49000 Angers</p>
        <p>
          Mail : <a href="stephaniedalia.tordjman@gmail.com">stephaniedalia.tordjman@gmail.com</a>
        </p>
        <p>
          Tel : <a href="06 42 23 86 09">06 42 23 86 09</a>
        </p>
        <p className="text-sm text-muted-foreground my-10">
          © 2024 - Made with{" "}
          <span role="img" aria-label="heart" className="text-red-500">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/abroudoux"
            target="_blank"
            className="text-primary font-semibold">
            Arthur Broudoux
          </a>
        </p>
      </div>
    </footer>
  );
}
