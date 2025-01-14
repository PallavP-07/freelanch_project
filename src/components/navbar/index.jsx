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
  const [openDropdown, setOpenDropdown] = React.useState(null); // Track the open dropdown (null if none)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || openDropdown) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openDropdown]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
          <NavigationMenuList className="hidden lg:flex space-x-2">
            {/* About */}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "hover:font-semibold hover:text-white font-normal text-[16px] pr-4",
                    isScrolled && "hover:text-black hover:font-semibold font-normal text-[16px]"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Solutions Dropdown */}
            <NavigationMenuItem className="relative group">
              <a
                onClick={() => toggleDropdown("solutions")}
                className={cn(
                  "bg-transparent flex items-center font-normal text-[16px] hover:bg-transparent cursor-pointer hover:text-white hover:font-semibold",
                  isScrolled && "hover:text-black hover:font-semibold"
                )}
              >
                Solutions
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "solutions" && (
                <div
                  className={cn(
                    "absolute left-[-250px] rounded-b-md top-[55px] w-[1020px] bg-white text-black shadow-lg py-6 px-10"
                  )}
                >
                  <div className="mx-auto max-w-7xl">
                    <h2 className="text-lg font-medium mb-4">Functions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                      <p>Legal & Compliance</p>
                      <p>Data Procurement & Supply Chain</p>
                      <p>Customer Success</p>
                      <p>Product</p>
                      <p>Human Resources</p>
                      <p>Sales</p>
                      <p>Business Development</p>
                      <p>Cyber Security</p>
                      <p>Accounting, Finance & Tax</p>
                      <p>Marketing</p>
                      <p>Technology & Engineering</p>
                    </div>
                  </div>
                </div>
              )}
            </NavigationMenuItem>

            {/* Expertise Dropdown */}
            <NavigationMenuItem className="relative group">
              <a
                onClick={() => toggleDropdown("expertise")}
                className={cn(
                  "bg-transparent flex items-center font-normal text-[16px] hover:bg-transparent hover:text-white hover:font-semibold",
                  isScrolled && "hover:text-black hover:font-semibold"
                )}
              >
                Expertise
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "expertise" && (
                <div
                  className={cn(
                    "absolute left-[-400px] rounded-b-md top-[55px] w-[1020px] bg-white text-black shadow-lg py-6 px-10"
                  )}
                >
                  <div className="mx-auto max-w-7xl">
                    <h2 className="text-lg font-medium mb-4">Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                      <p>Strategy Consulting</p>
                      <p>Market Analysis</p>
                      <p>Brand Management</p>
                      <p>Technology Advisory</p>
                    </div>
                  </div>
                </div>
              )}
            </NavigationMenuItem>

            {/* Insights */}
            <NavigationMenuItem>
              <Link href="/insights" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "hover:font-semibold hover:text-white font-normal text-[16px]",
                    isScrolled && "hover:text-black hover:font-semibold"
                  )}
                >
                  Insights
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact" legacyBehavior>
            <a
              className={cn(
                "px-5 py-3 rounded-[60px] border-2 hover:bg-white hover:border-gray-900 hover:text-black tracking-[1px] font-medium leading-3",
                isScrolled
                  ? "bg-transparent text-black border-gray-700"
                  : "bg-gray-100 bg-opacity-20 border-white"
              )}
            >
              Browse Jobs
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={cn(
                "px-5 py-3 rounded-3xl hover:bg-green-900 hover:border-white border-transparent tracking-[2px] font-semibold",
                isScrolled ? "bg-[#026534] text-white" : "bg-[#026534] text-white"
              )}
            >
              Contact
            </a>
          </Link>
        </div>

        {/* Mobile Hamburger */}
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
