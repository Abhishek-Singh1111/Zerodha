import { Link } from "react-router-dom";
function Navbar() {
  return (
   
      <nav className="navbar navbar-light bg-white border-bottom sticky-top shadow-sm lp-navbar">
        <div className="container">
          <Link className="navbar-brand lp-brand" to="/">
            <img src="/media/logo.svg" alt="Zerodha" className="img-fluid" />
          </Link>
          <div className="dropdown">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end mt-2 shadow-sm">
              <li>
                <Link className="dropdown-item" to="/support">
                  Support
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
