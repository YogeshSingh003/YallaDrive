import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Streamline from "./components/Streamline";

function App() {
  return (
    <div className="mx-1 md:mx-4 lg:mx-20">
      <Navbar />
      <Homepage />
      <About />
      <Services />
      <Streamline />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
