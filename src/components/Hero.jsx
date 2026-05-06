function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Chania, Crete, Greece</p>
        <h1>Luxury Seaside Stay in Crete</h1>
        <p>
          A boutique hotel experience near the crystal waters of Chania.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary hero-primary-btn">
            Book Your Stay
          </a>
          <a href="#rooms" className="btn btn-secondary hero-secondary-btn">
            View Rooms
          </a>
        </div>
        <p className="trust-line">
          Best price guaranteed · Free cancellation · Sea-view rooms
        </p>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

export default Hero;
