import { Link, NavLink } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";

const navButtonStyle = ({ isActive, isTransitioning }) => {
  return {
    color: isActive ? "text-primary" : "",
    viewTransitionName: isTransitioning ? "slide" : "",
  };
};
export default function NavBar() {
  const navBarItems = (
    <>
      <NavLink to="/" style={navButtonStyle}>
        <button className="btn btn-outline border-none px-3 py-2 mx-2">
          Home
        </button>
      </NavLink>
      <NavLink to="/about" style={navButtonStyle}>
        <button className="btn btn-outline border-none px-3 py-2 mx-2">
          About
        </button>
      </NavLink>
      <NavLink to="/blog" style={navButtonStyle}>
        <button className="btn btn-outline border-none px-3 py-2 mx-2">
          Blog
        </button>
      </NavLink>
      <NavLink to="/faq" style={navButtonStyle}>
        <button className="btn btn-outline border-none px-3 py-2 mx-2">
          Faq
        </button>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navBarItems}
          </ul>
        </div>
        <Link to="/" className="">
          <div className="flex justify-center items-center">
            <IoBookOutline className="text-5xl font-extralight text-primary" />
            <p className="text-3xl px-2">Boi Ghor</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mx-2">Buy Book</a>
        <a className="btn mx-2">Sign In</a>
      </div>
    </div>
  );
}
