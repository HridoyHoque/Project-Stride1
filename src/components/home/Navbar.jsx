import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faThLarge, faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 text-white rounded-box w-52"
          >
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/all-products"}>
                <FontAwesomeIcon icon={faThLarge} /> Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <FontAwesomeIcon icon={faShoePrints} /> Shoes Fashion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              <FontAwesomeIcon icon={faUserPlus} /> Register
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/all-products"}>
              <FontAwesomeIcon icon={faThLarge} /> Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-red-600 text-white">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
