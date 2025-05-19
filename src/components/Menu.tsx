import Image from "next/image";

export default function Menu({ onClick }: { onClick: () => void }) {
  return (
    <button className="menu-button" onClick={onClick}>
      <Image src="/assets/menu-icon.svg" alt="Menu" width={50} height={50} />
    </button>
  );
}
