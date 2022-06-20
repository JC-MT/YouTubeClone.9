import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div id="paths">
        <Link to="/">
          <img
            className="logo"
            src="/logo.png"
            height="150px"
            alt="9Tube logo"
          />
        </Link>
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
