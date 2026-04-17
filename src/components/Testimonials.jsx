const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Business Traveler",
    review:
      "Quirk Hotel gave me a perfect blend of comfort and sophistication. The rooms were elegant, and the service was absolutely first-class.",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Vacation Guest",
    review:
      "From the interiors to the hospitality, everything felt luxurious. It was one of the most relaxing and beautiful stays I have experienced.",
  },
  {
    id: 3,
    name: "Kabir Patel",
    role: "Couple Stay",
    review:
      "The ambiance was stunning, the dining experience was excellent, and the overall stay felt truly premium in every detail.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0F0F0F] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Testimonials
          </p>
          <h2 className="font-playfair-bold text-3xl text-white sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="font-poppins mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Hear from guests who experienced the elegance, comfort, and premium
            hospitality of Quirk Hotel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="card-luxury rounded-2xl p-6">
              <div className="mb-4 flex gap-1 text-[#D4AF37]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="font-poppins text-sm leading-7 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <h3 className="font-playfair text-lg text-white">
                  {item.name}
                </h3>
                <p className="font-poppins text-sm text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
