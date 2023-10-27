import HornedBeast from "./HornedBeast";

export default function Gallery({ beastArr, handleShowModal, horns }) {
  const filteredHorns = beastArr.filter(function (beast) {
    return beast.horns == horns || horns === "";
  });

  return (
    <div className="animals">
      {filteredHorns.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            img={beast.image_url}
            description={beast.description}
            title={beast.title}
            horns={beast.horns}
            handleShowModal={() => handleShowModal(beast)}
          />
        );
      })}
    </div>
  );
}
