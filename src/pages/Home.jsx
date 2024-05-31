import { HiX } from "react-icons/hi";
import { Carousel, Button, Banner } from "flowbite-react";
import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import logo from "../assets/logo.webp";
// import bannerPhoto from "../assets/bannerPhoto.webp";
import hero2 from "../assets/images/p1.webp";
import hero1 from "../assets/images/p2.webp";
import hero3 from "../assets/images/p3.webp";
import hero4 from "../assets/images/p4.webp";
import hero5 from "../assets/images/p5.webp";
import local from "../assets/local.webp";
import student from "../assets/student.webp";
import test3 from "../assets/images/girl.webp";

import bannerPhoto from "../assets/images/p18.webp";

export default function Home() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);

  return (
    <div
      className={` bg-gray-100 dark:bg-gray-800 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } ${isDarkMode && "text-white"}`}
    >
      <div
        className={`mx-6 mh-2 bg-gray-100 dark:bg-gray-800 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } ${isDarkMode && "text-white"}`} >
        <section className=" dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Education, Health, Women Empoverment.
              </h1>
              <p
                className={`${
                  isDarkMode && "text-white"
                } max-w-2xl mb-6 font-wait text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400`}
              >
                JAHAN FOUNDATION is a philanthropic self-organized initiative by
                a youngest female social activist from District Ghizer,
                Gilgit-Baltistan, named as Neelam Wali which encompasses the
                motto of Education, Health, Women Empowerment, Youth
                Empowerment, and Rehabilitation process during Natural
                Disasters. It was established during September 2019 in her
                indigenous region by Ms Wali. Neelam Wali gave the name of this
                Foundation with name of her mother ‘Jahan Wali’. This foundation
                is functional across Pakistan and it’s head office is located in
                main city Gilgit and a regional in village Sost in
                district Ghizer.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-blue-500 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Donate
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className={`inline-flex items-center  justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  dark:focus:ring-gray-800 ${
                  isDarkMode && "text-white"
                }`}
              >
                Help others
              </a>
            </div>
            <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
              <img
                className="border rounded-xl"
                src={bannerPhoto}
                alt="mockup"
              />
            </div>
          </div>
        </section>
        {/* call to action */}
        <Banner>
          <div
            className={`flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100  p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <div
              className={`mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center
          
        ${isDarkMode && "text-white"}`}
            >
              <a
                href="#"
                className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
              >
                <img
                  src={logo}
                  className="mr-2 h-6 rounded-full"
                  alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
                  JAHAN Foundation
                </span>
              </a>
              <p
                className={`${
                  isDarkMode && "text-white"
                } flex items-center text-sm font-normal text-gray-500 dark:text-gray-400`}
              >
                those who want to work with us reach out here.
              </p>
            </div>
            <div id="reach" className="flex shrink-0 items-center">
              <Button href="/contactus">Reach to us</Button>
              <Banner.CollapseButton
                color="gray"
                className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
              >
                <HiX className="h-4 w-4" />
              </Banner.CollapseButton>
            </div>
          </div>
        </Banner>
        {/* {slides} */}

        <div className="h-56 mt-8 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="sm:h-96">
            <img src={hero1} alt="..." className="object-cover h-full w-auto" />
            <img src={hero2} alt="..." className="object-cover h-full w-auto" />
            <img src={hero3} alt="..." className="object-cover h-full w-auto" />
            <img src={hero4} alt="..." className="object-cover h-full w-auto" />
            <img src={hero5} alt="..." className="object-cover h-full w-auto" />
          </Carousel>
        </div>

        {/* Testimonials or Success Stories Section */}
        <section
          className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} ${
            isDarkMode && "text-white"
          } bg-gray-100 dark:bg-gray-800 py-16`}
        >
          <div className={`max-w-screen-xl mx-auto px-4 `}>
            <h2
              className={`${
                isDarkMode && "text-white"
              } text-3xl font-bold text-center sm:mt-20 pt-5 mb-10 text-gray-900 dark:text-gray-300`}
            >
              Testimonials
            </h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              } ${isDarkMode && "text-white"}`}
            >
              {/* Testimonial 1 */}
              <div
                className={` ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }  p-6 rounded-lg shadow-md border `}
              >
                <p
                  className={`${
                    isDarkMode && "text-white"
                  }  text-gray-800 dark:text-gray-200`}
                >
                  <span className="font-bold"> Education Testimonial:</span>{" "}
                  <br />
                  Thanks to the JAHAN Foundation, I now have access to quality
                  education and resources that have transformed my future. Their
                  dedication to promoting literacy and learning is truly
                  inspiring.. <br /> <br />
                </p>
                <div className="">
                  <img
                    className="rounded-3xl size-72 mt-6"
                    src={student}
                    alt=""
                  />
                </div>
                <p
                  className={`mt-4 text-gray-600 dark:text-gray-400 ${
                    isDarkMode && "text-white"
                  } `}
                >
                  - Alia Nayeem, Student Beneficiary
                </p>
              </div>
              <div
                className={` ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }  p-6 rounded-lg shadow-md border `}
              >
                <p
                  className={`${
                    isDarkMode && "text-white"
                  }  text-gray-800 dark:text-gray-200`}
                >
                  <span className="font-bold"> Health Testimonial: </span>{" "}
                  <br />
                  The JAHAN Foundation's healthcare initiatives have been a
                  lifeline for my community. From organizing medical camps to
                  providing essential supplies, they have made a tangible
                  difference in improving our health and well-being. <br />{" "}
                  <br />
                </p>
                <div className="">
                  <img
                    className="rounded-3xl size-72 mt-6"
                    src={local}
                    alt=""
                  />
                </div>
                <p
                  className={`mt-4 text-gray-600 dark:text-gray-400 ${
                    isDarkMode && "text-white"
                  } `}
                >
                  - Ali Ahmed, Local Resident
                </p>
              </div>

              {/* Testimonial 3 */}
              <div
                className={` ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }  p-6 rounded-lg shadow-md border `}
              >
                <p
                  className={`${
                    isDarkMode && "text-white"
                  }  text-gray-800 dark:text-gray-200`}
                >
                  <span className="font-bold">
                    Women Empowerment Testimonial:
                  </span>{" "}
                  <br /> Being part of the JAHAN Foundation's vocational
                  training program has empowered me to become financially
                  independent. Through their support and guidance, I have gained
                  valuable skills and confidence to pursue my dreams.
                </p>
                <div className=" ">
                  <img
                    className="rounded-3xl size-72 mt-4"
                    src={test3}
                    alt=""
                  />
                </div>
                <p
                  className={`mt-4 text-gray-600 dark:text-gray-400 ${
                    isDarkMode && "text-white"
                  } `}
                >
                  - Rabia Khan, Partner
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
