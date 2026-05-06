const galleryImages = [
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1200&q=80"
];

function Gallery() {
  return (
    <section className="section section-soft" id="gallery">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Moments from Aetherion Bay</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <img key={image} src={image} alt={`Aetherion Bay view ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
