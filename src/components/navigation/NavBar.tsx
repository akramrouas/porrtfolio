"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Logo from "./logo";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { navLinks } from "../../app/constants/Nav-Links";


const Navbar = () => {
    const { setTheme } = useTheme()

  return (
    <header className=" p-30 fixed top-0 left-0 py-2 w-full bg-background/60 backdrop-blur-md z-50">
      <div className="container py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="capitalize font-medium hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
       
      </div>
    </header>
  );
};

export default Navbar;