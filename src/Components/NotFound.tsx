import { NavigateFunction, useNavigate } from 'react-router-dom';
import './ModalWindow.css';

export default function NotFound() {
  const navigate: NavigateFunction = useNavigate();

  const closeModelWindow: Function = () => {
    const model = document.getElementById('myModal') as HTMLElement;

    if(model){
      model.style.display = 'none';
    }
    navigate('/');
  };

  return (
    <div id="myModal" style={{ display: 'block' }} className="modal">
      <div className="modal-content">
        <span onClick={() => closeModelWindow()} className="close">
          X
        </span>
        <img className="error-img" src="../error.png" alt="exclamation mark" />
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
}
