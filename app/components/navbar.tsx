"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/projects": {
    name: "Projects",
  },
};

export default function NavigationBar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Adhney</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <NavbarItem>
              <Link color={isActive ? "secondary" : "foreground"} href={path}>
                {name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className="sm:flex md:gap-7 gap-5" justify="end">
        <NavbarItem>
          <Link href="#" color="foreground">
            <FiTwitter />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            <FiLinkedin />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            <FiGithub />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {Object.entries(navItems).map(([path, { name }], index) => {
          const isActive = path === pathname;
          return (
            <NavbarMenuItem key={`${name}-${index}`}>
              <Link
                color={isActive ? "primary" : "foreground"}
                className="w-full"
                href={path}
                size="lg"
              >
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
