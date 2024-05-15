import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redex/user/userSlice";

export default function Header() {
  const path = useLocation().pathname;
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Navbar
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } border-b-2 align-middle justify-items-center justify-center`}
    >
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full  border border-gray-300"
            src={logo}
            alt=""
          />
          <span className={`self-center ml-1 ${isDarkMode && "text-white"} `}>
            JAHAN foundation
          </span>
        </div>
      </Link>

      <div className={`  flex gap-2 md:order-2 `}>
        <Button
          onClick={handleToggleDarkMode}
          className={`w-12 h-10 hidden lg:inline ${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
          color="gray"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </Button>
        <Link to="/contactus">
          <Button gradientDuoTone="purpleToBlue">Contact</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={"div"}
          active={path === "/"}
          className={`${isDarkMode && "text-white"}`}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link
          as={"div"}
          active={path === "/about"}
          className={`${isDarkMode && "text-white"}`}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>

        
        <Navbar.Link
          as={"div"}
          active={path === "/contactus"}
          className={`${isDarkMode && "text-white"}`}
        >
          <Link to="/contactus">Contact Us</Link>
        </Navbar.Link>
        
        <Navbar.Link
          as={"div"}
          active={path === "/achievments"}
          className={`${isDarkMode && "text-white"}`}
        >
          <Link to="/achievments">Achievments</Link>
        </Navbar.Link>

        <Navbar.Link className="border-0">
          <Button
            onClick={handleToggleDarkMode}
            className={`w-12 h-10  inline lg:hidden ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
            color="gray"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
