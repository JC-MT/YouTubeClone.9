import { useNavigate } from 'react-router-dom';
import './ModalWindow.css';

export default function NotFound() {
  const navigate = useNavigate();
  // When the user clicks on <span> (x), close the modal
  const closeModelWindow = () => {
    document.getElementById('myModal2').style.display = 'none';
    navigate('/');
  };

  return (
    <div id="myModal2" style={{ display: 'block' }} className="modal">
      <div className="modal-content">
        <span onClick={closeModelWindow} className="close">
          X
        </span>
        <img className="error-img" src="../error.png" alt="exclamation mark" />
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
}
