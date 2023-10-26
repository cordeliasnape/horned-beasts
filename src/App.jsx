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

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <div>
      <Header />
      <main>
        <Gallery beastArr={beastArr} handleShowModal={handleShowModal} />
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
