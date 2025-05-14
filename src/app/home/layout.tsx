"use client";

import Header from "@/components/Header";
import { useAppContext } from "@/contexts/AppContext";
import { Suspense } from "react";
import Loading from "./loading";

export default function Main({
  closed,
  open,
}: {
  closed: React.ReactNode;
  open: React.ReactNode;
}) {
  const { isSiteOpen } = useAppContext();

  return (
    <>
      <Header />

      <Suspense fallback={<Loading />}>
        <main>{isSiteOpen ? open : closed}</main>
      </Suspense>
    </>
  );
}
