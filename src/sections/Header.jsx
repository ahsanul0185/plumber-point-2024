"use client";

import Image from "next/image";
import menuButton from "@/assets/icons/hamburger.svg";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { useDetectScrollDiection } from "@/hooks/useDetectScrollDir";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "/",
    name: "Home",
  },
  {
    id: "about",
    name: "About us",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "projects",
    name: "Project",
  },
  {
    id: "blogs",
    name: "Blogs",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const isScrollingUp = useDetectScrollDiection();

  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    }else {
      setActive(pathname.slice(1));

    }
  }, [pathname]);

  return (
    <div
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-[999] duration-300 ${
        isScrollingUp ? "-translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-5 h-16 flex justify-between items-center">
        <nav className="w-full flex justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="relative flex items-center gap-3 lg:gap-10 z-50">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <Image src={menuButton} alt="button" />
            </div>

            <ul
              className={`absolute top-12 right-0 py-3 md:py-0 bg-white md:bg-transparent shadow-lg md:shadow-none w-40 md:w-fit md:static flex-col md:flex-row items-center gap-3 md:gap-7 lg:gap-10 ${
                showMenu ? "flex" : "hidden md:flex"
              }`}
            >
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative"
                  onClick={() => setActive(item.id)}
                >
                  <Link href={item.id}>
                    <span className="text-sm font-medium cursor-pointer text-dark">
                      {item.name}
                    </span>
                    {active === item.id && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 bg-primary w-[110%] h-[0.15rem]"></span>
                    )}
                  </Link>
                </li>
              ))}

              <button className="block md:hidden lg:block text-[0.7rem] md:text-xs font-bold uppercase px-1.5 md:px-2 py-1.5 md:py-2.5 bg-primary rounded-md text-white">
                Request a call Back
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

const NavbarLink = ({ children }) => {
  const [active, setActive] = useState("");

  return (
    <li className="relative">
      <span className="text-sm font-medium cursor-pointer text-dark">
        {children}
      </span>
      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 bg-primary w-[110%] h-[0.15rem]"></span>
    </li>
  );
};
