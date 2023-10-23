import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Rhino"
        imgUrl="./src/img/rhino.jpeg"
        description="This is a rhino!"
      />
      <HornedBeast
        title="Elephant"
        imgUrl="./src/img/elephant.jpeg"
        description="This is an elephant!"
      />
    </div>
  );
}
