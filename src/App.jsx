import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./Data";

console.log("hello");
function App() {
  return (
    <div className="Gallery">
      <Header />
      <main>
        <Gallery beasts={beastArr} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
