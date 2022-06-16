import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div id="paths">
        <h2 id="logo">YouTube</h2>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/about">About</Link>{' '}
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
