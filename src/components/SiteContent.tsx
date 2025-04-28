"use client";

import { useAppContext } from "@/contexts/AppContext";

export function SiteContent({
  open,
  closed,
}: {
  open: React.ReactNode;
  closed: React.ReactNode;
}) {
  const { isSiteOpen } = useAppContext();

  return <>{isSiteOpen ? open : closed}</>;
}
