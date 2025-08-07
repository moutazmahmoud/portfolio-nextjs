import Link from "next/link";
import React from "react";

const NavbarItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  return (
    <div className="pt-8">
      <div className="flex container mx-auto justify-between items-center border-[2px]  border-[#ccc] rounded-3xl p-4">
        <div className="font-bold">M M</div>
        <div className="flex gap-4">
          {NavbarItems.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
