import HornedBeast from "./HornedBeast";
import beastArr from "../Data";
import Modal from "./Modal";
import { useState } from "react";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);
  function handleShowModal(beast) {
    setSelectedBeast(beast);
    setShowModal(true);
  }
  function handleCloseModal() {
    setSelectedBeast(null);
    setShowModal(false);
  }
  return (
    <div className="animals">
      {beastArr.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            img={beast.image_url}
            description={beast.description}
            title={beast.title}
            handleShowModal={() => handleShowModal(beast)}
          />
        );
      })}
      {showModal && (
        <Modal
          selectedBeast={selectedBeast}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
