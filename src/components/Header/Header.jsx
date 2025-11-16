import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItem = [
    { name: "add-habits", path: "/add" },
    { name: "my-habits", path: "/my-habits" },
  ];

  const logoutHandler = () => {};

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Habit Tracker
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/all-habits"}>All Habits</Link>
          </li>
          {user &&
            navItem.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-md dropdown-content bg-base-100 rounded-box  shadow z-20"
              >
                <li>
                  <p className="justify-between">{user?.displayName}</p>
                </li>
                <li>
                  <p className="justify-between">{user?.email}</p>
                </li>
                <li>
                  <button
                    onClick={logoutHandler}
                    className="justify-between bg-red-500 w-[70px] ml-3 text-center mt-1"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-success"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
