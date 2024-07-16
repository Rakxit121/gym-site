import About from "../components/About/About";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trainers />
      <Testimonials />
      <Gallery />
      {/* <BmiCalc /> */}
      <Pricing />

      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
