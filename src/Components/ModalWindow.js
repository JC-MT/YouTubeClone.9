import './ModalWindow.css';

const ModalWindow = () => {
  // When the user clicks on <span> (x), close the modal
  const closeModelWindow = () => {
    document.getElementById('myModal').style.display = 'none';
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={closeModelWindow} className="close">
          X
        </span>
        <img
          id="error-img"
          src="./error.png"
          alt="exclamation mark"
        />
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
};

export default ModalWindow;
