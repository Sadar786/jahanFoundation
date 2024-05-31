import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo.webp";
import {  useSelector } from "react-redux";

export default function FooterCom() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  return (
    <Footer container className={`${
      isDarkMode ? "bg-gray-800" : "bg-gray-200"
    }  border border-t-8 border-teal-500`}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <div className="flex mt-5">
          <img
            className="w-10 h-10 rounded-full  border border-gray-300"
            src={logo}
            alt=""
          />
          <span className={` ${isDarkMode && 'text-white'} self-center text-red  ml-1`}>JAHAN foundation</span>
        </div>
      </Link>
          </div>
          <div className={`grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6 ${isDarkMode && 'text-white'}`}>
            <div>

              <Footer.Title className={`${isDarkMode && 'text-white'}`} />
              <Footer.LinkGroup col className={`${isDarkMode && 'text-white'}`}>
                <Footer.Link href="about" className="text-xl">About us</Footer.Link>
                <Footer.Link
                  href="achievments"
                   rel="noopener noreferrer"
                >
                  Our Achivemets
                </Footer.Link>
                <Footer.Link
                  href="achievments"
                   rel="noopener noreferrer"
                >
                  Our work in Education
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
           
            <div>
              <Footer.Title  className={`${isDarkMode && 'text-white'}`}/>
              <Footer.LinkGroup col className={`${isDarkMode && 'text-white'}`}>
              <Footer.Link href="about" className="text-xl">Contact us</Footer.Link>
                <Footer.Link
                  href="#"
                   rel="noopener noreferrer"
                >
                  +923554287661
                </Footer.Link>
                <Footer.Link
                  href="#"
                  rel="noopener noreferrer"
                >
                   
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className={`${isDarkMode && 'text-white'}`}
            href="#"
            by="JAHAN foundation"
            year={new Date().getFullYear()}
          />
          <div className={` flex gap-6 sm:mt-0 mt-4 sm:justify-center`}>
            <Footer.Icon target="_blank" href="https://www.facebook.com/jahanfoundation/" icon={BsFacebook} />
            <Footer.Icon target="_blank" href="https://www.instagram.com/jahanfoundation/" icon={BsInstagram} />
            <Footer.Icon target="_blank" href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
