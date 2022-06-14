import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h3>YouTube</h3>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to='/about'>
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default NavBar;
