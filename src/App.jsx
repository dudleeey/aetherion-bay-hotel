import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import BookingContact from "./components/BookingContact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Main page structure */}
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <BookingContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
