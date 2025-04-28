import Image from "next/image";

export default function Menu() {
  return (
    <button className="menu-button">
      <Image src="/assets/menu-icon.svg" alt="Menu" width={50} height={50} />
    </button>
  );
}
