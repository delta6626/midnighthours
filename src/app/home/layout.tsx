"use client";

import { useAppContext } from "@/contexts/AppContext";

export default function Main({
  closed,
  open,
}: {
  closed: React.ReactNode;
  open: React.ReactNode;
}) {
  const { isSiteOpen } = useAppContext();

  return <main>{isSiteOpen ? open : closed}</main>;
}
