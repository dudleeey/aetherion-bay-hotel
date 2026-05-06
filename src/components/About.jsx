const features = [
  {
    icon: "🌅",
    title: "Handpicked Seafront Location",
    text: "Wake up to panoramic bay views and golden-hour terraces in one of Chania's most coveted coastal settings."
  },
  {
    icon: "🏛️",
    title: "Contemporary Mediterranean Design",
    text: "Natural textures, coastal tones, and curated interiors create a calm atmosphere with refined character."
  },
  {
    icon: "✨",
    title: "Tailored Guest Experience",
    text: "From private transfers to thoughtful in-room touches, every stay is tailored with genuine care."
  }
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Where refined comfort meets the Aegean breeze</h2>
          <p>
            Aetherion Bay Hotel blends intimate boutique charm with elevated
            Mediterranean hospitality, creating a graceful retreat for meaningful
            moments by the sea.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item) => (
            <article key={item.title} className="card">
              <p className="feature-icon" aria-hidden="true">
                {item.icon}
              </p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
