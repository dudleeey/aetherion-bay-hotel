const reviews = [
  {
    name: "Emily Carter",
    country: "United Kingdom",
    text: "The sea-view suite was stunning and the team made our anniversary unforgettable. Every detail felt five-star."
  },
  {
    name: "Luca Bianchi",
    country: "Italy",
    text: "Perfect location near Chania old town, excellent breakfast, and a calm boutique atmosphere. Highly recommended."
  },
  {
    name: "Sofia Nilsson",
    country: "Sweden",
    text: "Traveling with family was effortless here. Beautiful pool, spacious room, and truly warm hospitality."
  }
];

function Reviews() {
  return (
    <section className="section section-soft" id="reviews">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Guest Reviews</p>
          <h2>What our guests love most</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.name} className="card">
              <p className="stars">★★★★★</p>
              <p>{review.text}</p>
              <h3>{review.name}</h3>
              <small>{review.country}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
