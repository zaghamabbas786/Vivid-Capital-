"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";

import { NAV_HREF, type NavSegment } from "@/lib/routes";

const NavigationContext = createContext<(segment: NavSegment) => void>(() => undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const navigate = useCallback(
    (segment: NavSegment) => {
      router.push(NAV_HREF[segment]);
    },
    [router],
  );

  const value = useMemo(() => navigate, [navigate]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function useSiteNavigate(): (segment: NavSegment) => void {
  return useContext(NavigationContext);
}
