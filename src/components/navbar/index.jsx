"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function CustomNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 lg:px-[140px]",
        isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <Image src={isScrolled ? '/navblogo.svg' : '/navwlogo.svg'} alt="nav-logo" width={120} height={120} />
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex space-x-6">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "hover:font-semibold hover:text-white",
                    isScrolled && "hover:text-black hover:font-semibold "
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-black hover:font-semibold">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-screen  bg-transparent">
                  <ListItem href="/solutions/solution1" title="Solution 1">
                    Description for solution 1.
                  </ListItem>
                  <ListItem href="/solutions/solution2" title="Solution 2">
                    Description for solution 2.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-black hover:font-semibold">
                Expertise
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-screen mt-4">
                  <ListItem href="/expertise/expertise1" title="Expertise 1">
                    Description for expertise 1.
                  </ListItem>
                  <ListItem href="/expertise/expertise2" title="Expertise 2">
                    Description for expertise 2.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/insights" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "hover:font-semibold hover:text-white",
                    isScrolled && "hover:text-black hover:font-semibold "
                  )}
                >
                  Insights
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

       
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact" legacyBehavior>
            <a
              className={cn(
                "px-4 py-1 rounded-3xl border-2 hover:bg-green-500",
                isScrolled
                  ? "bg-transparent text-black border-gray-700"
                  : "bg-gray-300 border-white"
              )}
            >
              Browse Job
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={cn(
                "px-3 py-1 rounded-3xl hover:bg-green-500",
                isScrolled ? "bg-[#026534] text-white" : "bg-[#026534] text-white"
              )}
            >
              Contact
            </a>
          </Link>
        </div>

     
        <div className="lg:hidden">
          <Link href="/" legacyBehavior>
            <Image
              src={isScrolled ? '/HamBlack.svg' : '/HamWhite.svg'}
              alt="ham-burger"
              width={40} 
              height={40}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef(({ title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
