const galleryImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=80",
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#0f0f0f] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Gallery
          </p>
          <h2 className="font-playfair-bold text-3xl text-white sm:text-4xl">
            A Glimpse of Quirk Hotel
          </h2>
          <p className="font-poppins mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Explore the refined beauty, warm atmosphere, and luxurious spaces
            that define the Quirk Hotel experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={image}
                alt={`Quirk Hotel Gallery ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
