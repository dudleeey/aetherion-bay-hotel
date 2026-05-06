import { useState } from "react";

function BookingContact() {
  const [submitted, setSubmitted] = useState(false);
  const directBenefits = [
    "Best available direct price",
    "Free room upgrades when available",
    "Direct communication with our hotel team"
  ];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Booking & Contact</p>
          <h2>Plan your luxury stay</h2>
        </div>

        <div className="direct-booking">
          <h3>Why book direct?</h3>
          <div className="direct-booking-grid">
            {directBenefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
          </div>
        </div>

        <h3 className="booking-subtitle">Check availability or request your stay</h3>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email" required />
          <input type="date" aria-label="Check-in date" required />
          <input type="date" aria-label="Check-out date" required />
          <input type="number" min="1" placeholder="Number of guests" required />

          <select required defaultValue="">
            <option value="" disabled>
              Room preference
            </option>
            <option>Deluxe Sea View Room</option>
            <option>Superior Suite</option>
            <option>Private Pool Villa</option>
          </select>

          <textarea placeholder="Message" rows="5" />

          <button type="submit" className="btn btn-primary">
            Submit Inquiry
          </button>
          <p className="booking-trust">
            No payment required · Response within 24 hours
          </p>
        </form>

        {submitted && (
          <p className="form-success">
            Thank you. Your booking inquiry has been received.
          </p>
        )}
      </div>
    </section>
  );
}

export default BookingContact;
