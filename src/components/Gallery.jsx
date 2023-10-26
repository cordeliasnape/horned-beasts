import HornedBeast from "./HornedBeast";

export default function Gallery({ beastArr, handleShowModal }) {
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
    </div>
  );
}
