import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Link href="/home" className="logo">
        <Image
          src="/assets/pixel_clock.svg"
          alt="pixel clock"
          width={50}
          height={50}
        />
      </Link>
      <Menu />
    </header>
  );
}
