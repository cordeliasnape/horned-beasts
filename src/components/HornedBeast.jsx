export default function HornedBeast({ title, img_url, description }) {
  return (
    <div className="animal">
      <h2>{title}</h2>
      <img src={img_url} alt={title} />
      <p>{description}</p>
    </div>
  );
}
