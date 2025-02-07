import { useState } from "react";
import './index.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item disabled">
            <a className="nav-link" href="#">Disabled</a>
          </li>
        </ul>
        <form className="search-form">
          <input type="search" placeholder="Search" aria-label="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;






























// import './index.scss';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar__logo">Logo</div>
//         </nav>
//     );
// }

// export default Navbar;