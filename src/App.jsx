import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import data from "./Data";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [selectedFilter, setSelectedFilter] = useState(5);

  function handleChange(event) {
    setSelectedFilter(event.target.value);
    console.log("Selected filter value is: " + selectedFilter);
  }

  function filterBeast(beastArr) {
    //"If the length of the 'username' is greater than 3 characters, then return the 'username' itself; otherwise, return an empty string."
    //username.length > 3 ? username : ""
    //write ternerary operator that checks
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
          <select name="filter" value={selectedFilter} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>100</option>
            <option value={5}>All</option>
          </select>
        </form>
        <Gallery
          handleShowModal={handleShowModal}
          filter={selectedFilter}
          beastArr={data}
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
