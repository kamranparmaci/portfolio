import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Globaly } from "./GlobalVariable";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Globaly />
      <Hero />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default App;
