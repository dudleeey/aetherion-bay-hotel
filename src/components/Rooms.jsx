const rooms = [
  {
    name: "Deluxe Sea View Room",
    price: "from €145/night",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Bright and airy room with private balcony, king bed, and sweeping sea views."
  },
  {
    name: "Superior Suite",
    price: "from €220/night",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious suite with lounge area and elegant finishes for a premium island stay."
  },
  {
    name: "Private Pool Villa",
    price: "from €390/night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Exclusive villa with private pool terrace, enhanced privacy, and sunset dining setup."
  }
];

function Rooms() {
  return (
    <section className="section section-soft" id="rooms">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Rooms</p>
          <h2>Curated stays for every style of traveler</h2>
        </div>

        <div className="room-grid">
          {rooms.map((room) => (
            <article key={room.name} className="room-card">
              <img src={room.image} alt={room.name} />
              <div className="room-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <p className="room-price">{room.price}</p>
                <div className="room-actions">
                  <button className="btn btn-secondary">View Details</button>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
