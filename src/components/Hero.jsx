import Reveal from "./Reveal";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[#0F172A] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/55 to-[#0F172A]/65"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-12">
        <Reveal>
          <p className="font-poppins mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white">
            Luxury Stay Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-playfair-black mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Quirk Hotel
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-poppins mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
            Experience timeless luxury, elegant rooms, and world-class
            hospitality in the heart of the city.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="#rooms"
              className="premium-button font-poppins rounded-full px-8 py-3 text-sm font-semibold"
            >
              Explore Rooms
            </a>

            <a
              href="#contact"
              className="premium-button-outline font-poppins rounded-full border px-8 py-3 text-sm font-semibold"
            >
              Book Your Stay
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
