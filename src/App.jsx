import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./Data";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [horns, setHorns] = useState("");

  function handleFilter(event) {
    setHorns(event.target.value);
  }

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <div>
      <Header />
      <main>
        <form>
          <label>Filter by horn quantity:</label>
          <select onChange={handleFilter}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </select>
        </form>
        <Gallery
          handleShowModal={handleShowModal}
          beastArr={beastArr}
          horns={horns}
          //define 100 as 4 and all as 5
          //check if the data is the same as the filter
          //display
        />
      </main>
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;
