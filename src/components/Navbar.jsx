import React from "react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Rooms", href: "#rooms" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-[#0F0F0F]/95 backdrop-blur-lg shadow-lg shadow-[#D4AF37]/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#home"
          className="font-playfair-bold text-2xl tracking-wider text-white transition hover:text-[#D4AF37]"
        >
          <span className="text-[#D4AF37]">Quirk</span> Hotel
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-poppins text-sm font-medium text-white transition duration-300 hover:text-[#D4AF37] hover:shadow-sm"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="premium-button font-poppins rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Book Now
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 transition hover:opacity-70 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-[#D4AF37] transition"></span>
          <span className="h-0.5 w-6 bg-[#D4AF37] transition"></span>
          <span className="h-0.5 w-6 bg-[#D4AF37] transition"></span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#D4AF37]/20 bg-[#121212]/95 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins border-b border-[#D4AF37]/10 py-3 text-sm text-white transition duration-300 hover:text-[#D4AF37]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="premium-button font-poppins mt-4 rounded-full px-6 py-3 text-center text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
