"use client"
import Link from "next/link";
import {NavLink} from "@/app/components/nav_link";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {MenuOverlay} from "@/app/components/menu_overlay";

const navLinks = [
  {
    href: "#about",
    text: "Sobre"
  },
  {
    href: "#projects",
    text: "Projetos"
  },
  {
    href: "#contact",
    text: "Contato"
  }
]

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={"fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100"}>
      <div className={"flex flex-wrap items-center justify-between mx-auto px-4 py-2"}>
        <Link href={"/"} className={"text-2xl md:text-5xl text-white font-semibold"}>
          LOGO
        </Link>
        <div className={"mobile-menu block md:hidden"}>
          {
            !navbarOpen ? (
              <button
                className={"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Bars3Icon className={"h-5 w-5"} />
              </button>) : (
              <button
                className={"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <XMarkIcon className={"h-5 w-5"} />
              </button>
            )
          }
        </div>
        <div className={"menu hidden md:block md:w-auto"} id={"navbar"}>
          <ul className={"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"}>
            {
              navLinks.map((navLink, index) => (
                <li key={index}>
                  <NavLink href={navLink.href} text={navLink.text}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
