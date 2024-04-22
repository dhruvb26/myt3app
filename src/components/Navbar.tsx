"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "~/components/ui/navigation-menu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ui/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
} from "~/components/ui/drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Define the menu content to reuse in both mobile and desktop layouts
  const MenuContent = () => (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0 md:bg-transparent">
        <NavigationMenuItem asChild>
          <Button variant={"link"}>Home</Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button variant={"link"}>Dashboard</Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button variant={"ghost"}>Sign In</Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <nav className="flex flex-row items-center justify-between p-6">
      <div className="image-box">
        <Image width={25} height={25} src="/favicon.ico" alt="Logo" />
      </div>
      <div className="md:hidden">
        <Button
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
        >
          {drawerOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </Button>
      </div>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerDescription className="flex flex-row justify-end p-4">
            <DrawerClose onClick={() => setDrawerOpen(false)}>
              <Button variant={"secondary"}>
                <Cross1Icon />
              </Button>
            </DrawerClose>
          </DrawerDescription>
          <DrawerHeader className="flex h-full flex-row items-center justify-center">
            {MenuContent()}
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex md:flex-row md:items-center md:bg-transparent">
        {MenuContent()}
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
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
export default Navbar;
