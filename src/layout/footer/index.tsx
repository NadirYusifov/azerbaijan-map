import { Link } from "react-router";
import GitHub from "../../ui/icon";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 py-5">
      <div className="container px-4 mx-auto flex items-center justify-center text-center">
        <Link to={"https://github.com/NadirYusifov"} rel="prefetch">
          <span>
            <GitHub />
          </span>
        </Link>
      </div>
    </footer>
  );
};
