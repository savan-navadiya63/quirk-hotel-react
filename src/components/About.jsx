import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury hotel interior"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
              About Us
            </p>

            <h2 className="font-playfair-bold text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              Redefining Luxury Hospitality with Elegance
            </h2>

            <p className="font-poppins mt-6 text-sm leading-7 text-gray-300 sm:text-base">
              Quirk Hotel is designed for travelers who appreciate refined
              comfort, premium service, and unforgettable surroundings. Every
              detail is curated to offer a stay that feels elegant, peaceful,
              and truly special.
            </p>

            <p className="font-poppins mt-4 text-sm leading-7 text-gray-300 sm:text-base">
              From beautifully styled rooms to exceptional dining and
              personalized guest care, our goal is to make every moment feel
              exclusive.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-playfair text-2xl text-[#D4AF37]">25+</h3>
                <p className="font-poppins mt-2 text-sm text-gray-300">
                  Luxury Rooms
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-playfair text-2xl text-[#D4AF37]">10+</h3>
                <p className="font-poppins mt-2 text-sm text-gray-300">
                  Years of Excellence
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-playfair text-2xl text-[#D4AF37]">24/7</h3>
                <p className="font-poppins mt-2 text-sm text-gray-300">
                  Guest Support
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-playfair text-2xl text-[#D4AF37]">100%</h3>
                <p className="font-poppins mt-2 text-sm text-gray-300">
                  Premium Comfort
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
