"use client";

import { useState } from "react";

import { Footer } from "@/components/vivid/Footer";
import { MenuOverlay } from "@/components/vivid/MenuOverlay";
import { Nav } from "@/components/vivid/Nav";
import { NavigationProvider } from "@/components/vivid/navigation-context";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <Nav onMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <NavigationProvider>
        <main>{children}</main>
      </NavigationProvider>
      <Footer />
    </div>
  );
}
