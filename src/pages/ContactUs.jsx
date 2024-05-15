import React from "react";
import emailjs from 'emailjs-com';
import {  useSelector } from "react-redux";



export default function ContactUs() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);

  function sendEmail(e) {
    e.preventDefault();
    alert('you mail is not sent please try another way!')
    // emailjs.sendForm("service_wvin33i","template_brheyg4", e.target, "lsff5poOWZCrU6kgm"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Your Message has been sent")
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Your Message has Not been sent")
    //     }
    //   );
  }

  return (
    <div>
      <section className={`bg-gray-100 dark:bg-gray-800 py-16 ${
      isDarkMode ? "bg-gray-800" : "bg-gray-200"
    } ${isDarkMode && "text-white"}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
            Contact Us
          </h2>
          <div className="flex justify-center">
            <div className="max-w-lg">
              <p className={`${isDarkMode && "text-white"} text-gray-800 dark:text-gray-200`}>
                We'd love to hear from you! Please feel free to reach out to us
                using the contact information below:
              </p>
              <form onSubmit={sendEmail}>
                <div className="mt-8">
                  <h3 className={`${isDarkMode && "text-white"} text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                    Address
                  </h3>
                  <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                    JAHAN Foundation Headquarters
                    <br />
                    Main City Gilgit, Pakistan
                  </p>
                </div>
                <div className="mt-8">
                    <h3 className={` ${isDarkMode && "text-white"} text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                    Phone
                  </h3>
                  <p className={`${isDarkMode && "text-white"} text-gray-800 dark:text-gray-200`}>
                  +923554287661
                  </p>
                </div>
                <div className="mt-8">
                    <h3 className={` ${isDarkMode && "text-white"} text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                    Email
                  </h3>
                  <p className={`${isDarkMode && "text-white"} text-gray-800 dark:text-gray-200`}>
                  JahanFoundation@gmail.com
                  </p>
                </div>

              <div className="mt-8">
                <h1 className="text-red-500">
                  The following contact mathod is not functional Right now it will update soon.
                  <br /> 
                  please direct email on JahanFoundation@gmail.com or call for now
                </h1>
              </div>
                <div className="mt-8">
                  <h3 className={` ${isDarkMode && "text-white"} text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                    Email
                  </h3>
                  <input type="hidden" name="contact_number" />
                  <input
                    type="email"
                    name="user_email"
                    className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm w-full"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="message"
                    className="mt-3 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm w-full text-black"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 inline-flex font-bold text-xl w-full items-center justify-center items-center px-2 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
