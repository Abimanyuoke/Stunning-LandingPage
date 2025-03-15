"use client"

import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png";
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg"
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


export function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">StramLine your work and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt={"Sass Logo"} height={40} width={40} />
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <AiOutlineClose className="h-5 w-5 md:hidden" /> : <MenuIcon className="h-5 w-5 md:hidden" />}
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
      {navbar && (
        <section className="absolute bg-black/80 w-48 h-auto right-14 rounded-md shadow-md">
          <nav className="flex flex-col gap-6 text-white items-center py-7 ">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
          </nav>
        </section>
      )}
    </header>

  )
}