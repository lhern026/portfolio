"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Process",
    href: "#process",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-xl font-medium p-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}