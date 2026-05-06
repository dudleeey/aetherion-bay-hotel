const amenities = [
  "Sea view",
  "Outdoor pool",
  "Breakfast included",
  "Free Wi-Fi",
  "Airport transfer",
  "Private balcony",
  "Restaurant & bar",
  "24/7 reception"
];

function Amenities() {
  return (
    <section className="section" id="amenities">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Amenities</p>
          <h2>Everything for a seamless luxury escape</h2>
        </div>

        <div className="amenities-grid">
          {amenities.map((item) => (
            <div key={item} className="amenity-item">
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
