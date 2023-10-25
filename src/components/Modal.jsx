export default function Modal({ selectedBeast, handleCloseModal }) {
  return (
    <div className="modal">
      {selectedBeast && (
        <>
          <h2>{selectedBeast.title}</h2>
          <img src={selectedBeast.image_url} alt={selectedBeast.title} />
          <p>{selectedBeast.description}</p>
          <button onClick={handleCloseModal}>Close</button>
        </>
      )}
    </div>
  );
}
