import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export default function NavBar() {
  const user = currentUser();
  const heads = headers();

  const pathname = heads.get("referer");

  return (
    <>
      {pathname ? (
        <Navbar
          shouldHideOnScroll
          className={`${pathname?.includes("sign") ? "hidden" : "block"}`}
        >
          <NavbarBrand>
            <Image src="" alt="" />
            <p className="font-bold text-inherit">CycleMate</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
          </NavbarContent>
          <NavbarContent justify="end">
            {!user ? (
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
            ) : (
              <NavbarItem>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </NavbarItem>
            )}
          </NavbarContent>
        </Navbar>
      ) : (
        <></>
      )}
    </>
  );
}
