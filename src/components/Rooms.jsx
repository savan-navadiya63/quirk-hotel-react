import RoomCard from "./RoomCard";
import { roomsData } from "../data/roomsData";
import Reveal from "./Reveal";

function Rooms() {
  return (
    <section id="rooms" className="bg-[#0F0F0F] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Rooms
          </p>
          <h2 className="font-playfair-bold text-3xl text-white sm:text-4xl">
            Luxury Rooms & Suites
          </h2>
          <p className="font-poppins mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover elegant spaces designed for comfort, style, and a premium
            hotel experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
