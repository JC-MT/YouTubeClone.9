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
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F__sgXJ0qRoEs%2FS7DBB-F4M4I%2FAAAAAAAAAO4%2FLnpvqaza4ag%2Fs1600%2Fexclamation_mark.png&f=1&nofb=1"
          alt="exclamation mark"
        />
        <h2>Something went wrong</h2>
      </div>
    </div>
  );
};

export default ModalWindow;
