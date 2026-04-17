function RoomCard({ room }) {
  return (
    <div className="card-luxury overflow-hidden rounded-2xl">
      <img
        src={room.image}
        alt={room.name}
        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
      />

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-playfair text-xl text-white">{room.name}</h3>
          <span className="font-poppins rounded-lg bg-[#D4AF37]/15 px-3 py-1 text-sm font-semibold text-[#D4AF37]">
            {room.price}
          </span>
        </div>

        <p className="font-poppins text-sm leading-7 text-gray-300">
          {room.description}
        </p>

        <a
          href="#contact"
          className="premium-button-outline font-poppins mt-6 inline-block rounded-full px-6 py-2 text-sm font-semibold"
        >
          Book This Room
        </a>
      </div>
    </div>
  );
}

export default RoomCard;
