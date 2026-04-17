import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#0F0F0F] px-6 py-12 lg:px-12 shadow-lg shadow-[#D4AF37]/5">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-playfair-bold text-2xl tracking-wider text-white">
            <span className="text-[#D4AF37]">Quirk</span> Hotel
          </h2>
          <p className="font-poppins mt-4 max-w-xs text-sm leading-7 text-gray-400">
            Experience refined comfort, elegant spaces, and exceptional
            hospitality designed for unforgettable stays.
          </p>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-white">Quick Links</h3>
          <ul className="font-poppins mt-4 space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#home"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#rooms"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Rooms
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-white">More</h3>
          <ul className="font-poppins mt-4 space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#gallery"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-white">Contact</h3>
          <div className="font-poppins mt-4 space-y-3 text-sm text-gray-400">
            <p>123 Luxury Avenue, City Center</p>
            <p>+1 234 567 890</p>
            <p>info@quirkhotel.com</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#D4AF37]/20 pt-6 text-center text-sm text-gray-500">
        © 2026 Quirk Hotel. All rights reserved.
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
        <h3 className="font-playfair text-lg text-white">Location</h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10">
          <iframe
            src="https://www.google.com/maps?q=Ahmedabad&z=13&output=embed"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Quirk Hotel Location Map"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
