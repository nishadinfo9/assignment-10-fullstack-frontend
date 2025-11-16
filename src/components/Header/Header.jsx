import React, { useContext } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItem = [
    { name: "Add Habits", path: "/add-habits" },
    { name: "My Habits", path: "/my-habits" },
  ];

  const logoutHandler = async () => {
    await logoutUser();
  };

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
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/all-habits"}>All Habits</NavLink>
          </li>
          {user &&
            navItem.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path}>{item.name}</NavLink>
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
