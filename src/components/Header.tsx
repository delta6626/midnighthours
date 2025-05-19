import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/home" className="logo">
        <Image
          src="/assets/pixel_clock.svg"
          alt="pixel clock"
          width={50}
          height={50}
        />
      </Link>
      <Menu onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
