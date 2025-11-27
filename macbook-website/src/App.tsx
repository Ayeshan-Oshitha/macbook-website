import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Performance from "./components/Performance";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";
import Feature from "./components/Feature";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main className="mx-6">
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Feature />
        <Highlight />
        <Footer />
      </main>
    </>
  );
}

export default App;
