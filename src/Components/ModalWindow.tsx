import './ModalWindow.css';

const ModalWindow = () => {

  const closeModelWindow: Function = () => {
    const model = document.getElementById('myModal') as HTMLElement;

    if(model){
      model.style.display = 'none';
    }
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={() => closeModelWindow()} className="close">
          X
        </span>
        <img
          className="error-img"
          src="../error.png"
          alt="exclamation mark"
        />
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
};

export default ModalWindow;
