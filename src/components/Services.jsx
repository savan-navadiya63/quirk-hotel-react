import React from "react";

const services = [
  {
    id: 1,
    title: "Luxury Rooms",
    description:
      "Beautifully designed rooms with premium comfort, elegant interiors, and a peaceful atmosphere.",
  },
  {
    id: 2,
    title: "Fine Dining",
    description:
      "Enjoy curated meals, signature dishes, and an exceptional dining experience in style.",
  },
  {
    id: 3,
    title: "Spa & Wellness",
    description:
      "Relax your body and mind with rejuvenating spa treatments and wellness services.",
  },
  {
    id: 4,
    title: "Swimming Pool",
    description:
      "Take in a calm and refreshing poolside experience designed for comfort and leisure.",
  },
  {
    id: 5,
    title: "24/7 Concierge",
    description:
      "Our team is always available to assist you with bookings, support, and special requests.",
  },
  {
    id: 6,
    title: "Private Events",
    description:
      "Host memorable celebrations, business gatherings, and exclusive private occasions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0F0F0F] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Services
          </p>
          <h2 className="font-playfair-bold text-3xl text-white sm:text-4xl">
            Premium Services for a Memorable Stay
          </h2>
          <p className="font-poppins mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover the exceptional facilities and personalized hospitality
            that make Quirk Hotel a truly refined destination.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="card-luxury rounded-2xl p-6">
              <p className="font-poppins mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                0{service.id}
              </p>

              <h3 className="font-playfair text-xl text-white">
                {service.title}
              </h3>

              <p className="font-poppins mt-4 text-sm leading-7 text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
