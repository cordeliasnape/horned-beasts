import { useState } from "react";

export default function HornedBeast({
  title,
  img,
  description,
  horns,
  handleShowModal,
}) {
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div className="animal">
      <h2>{title}</h2>
      <img src={img} />
      <p>"{description}"</p>
      <p>Horns: {horns}</p>
      <p onClick={handleLikes}>Favourites: {likes} ❤️</p>
      <button onClick={() => handleShowModal({ title, img })}>
        Show Information
      </button>
    </div>
  );
}
