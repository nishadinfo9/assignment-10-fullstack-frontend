import React, { useContext, useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItem = [
    { name: "Add Habits", path: "/add-habits" },
    { name: "My Habits", path: "/my-habits" },
  ];

  const logoutHandler = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start ">
        <Link to={"/"} className="">
          <img
            className="w-10 h-10 rounded-full"
            src="/images/logo.png"
            alt="logo"
          />
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

      <div className="navbar-end flex items-center gap-2">
        <div className="lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {user ? (
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL && <img alt="profile" src={user?.photoURL} />}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box shadow z-20 mt-3"
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
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn btn-success hidden lg:block"
          >
            Login
          </button>
        )}
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg z-10 lg:hidden">
          <ul className="menu menu-vertical px-2 py-4 gap-1">
            <li>
              <NavLink to={"/"} onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-habits"} onClick={() => setMobileOpen(false)}>
                All Habits
              </NavLink>
            </li>
            {user &&
              navItem.map((item, i) => (
                <li key={i}>
                  <NavLink to={item.path} onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            {user ? (
              <>
                <li>
                  <p>{user.displayName}</p>
                </li>
                <li>
                  <p>{user.email}</p>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logoutHandler();
                      setMobileOpen(false);
                    }}
                    className="bg-red-500 text-white w-full"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMobileOpen(false);
                  }}
                  className="btn btn-success w-full"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
