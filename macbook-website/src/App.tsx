import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <>
      <main className="mx-6">
        <NavBar />
        <Hero />
        <ProductViewer />
      </main>
    </>
  );
}

export default App;
