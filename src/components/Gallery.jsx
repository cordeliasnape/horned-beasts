import HornedBeast from "./HornedBeast";
import beastArr from "../Data";

export default function Gallery() {
  return (
    <div className="animals">
      {beastArr.map((beast) => {
        return (
          <HornedBeast
            id={beast._id}
            img={beast.image_url}
            description={beast.description}
            title={beast.title}
          />
        );
      })}
    </div>
  );
}
