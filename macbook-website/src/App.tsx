import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Performance from "./components/Performance";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";

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
      </main>
    </>
  );
}

export default App;
