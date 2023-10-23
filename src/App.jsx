import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

console.log("hello");
function App() {
  return (
    <div className="Gallery">
      <Header />
      <main>
        <div className="animals">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
