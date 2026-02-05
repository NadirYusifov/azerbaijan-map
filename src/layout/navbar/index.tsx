import { NavLink, type NavLinkRenderProps } from "react-router";

export const Navbar = () => {
  return (
    <header className="container px-4 mx-auto mt-2 flex justify-center items-center mb-3">
      <nav className="flex items-center h-12 bg-neutral-100 text-neutral-500 text-center border border-gray-300 rounded-full space-x-5 px-1 shadow-md">
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive
              ? "w-35 text-md lg:text-lg bg-sky-500 text-white px-4 py-1.5 rounded-full border border-sky-400 transition-all ease-in-out delay-200 font-inter shadow-sm"
              : "w-35 text-md lg:text-lg"
          }
          to={"/"}
        >
          Xəritə
        </NavLink>
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive
              ? "w-35 text-md lg:text-lg bg-sky-500 text-white px-4 py-1.5 rounded-full border border-sky-400 transition-all ease-in-out delay-200 font-inter shadow-sm"
              : "w-35 text-md lg:text-lg"
          }
          to={"/haqqimizda"}
        >
          Haqqında
        </NavLink>
      </nav>
    </header>
  );
};
