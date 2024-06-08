import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Functionalities from "../components/Functionalities";
import Header from "../components/Header";
import Installation from "../components/Installation";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Features />
      <Functionalities />
      <Installation />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
