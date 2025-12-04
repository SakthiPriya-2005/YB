import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About Me</Link> | 
      <Link to="/form">Form</Link>
    </nav>
  );
}

export default Navbar;
