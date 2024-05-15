import React from "react";
import women from '../assets/women.jpg'
import {  useSelector } from "react-redux";

export default function About() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);


  return (
    <div >
      {/* // Inside the <section> tag of the "About" section */}
      <section className={`bg-gray-100 dark:bg-gray-800 py-16 ${
    isDarkMode ? "bg-gray-800" : "bg-gray-200"
  }`}>
        <div className={` max-w-screen-xl mx-auto px-4  ${
    isDarkMode ? "bg-gray-800" : "bg-gray-200"
  } ${isDarkMode && "text-white"}`}>
          <h2 className={`text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}` }>
            About JAHAN Foundation
          </h2>
          <div className={`flex flex-col m-2  md:m-20  justify-between ${isDarkMode && "text-white"}`}>
            {/* Left Column - Mission and Values */}
            <h3 className={`${isDarkMode && "text-white"} text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
              Our Mission
            </h3>
            <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
              The JAHAN Foundation is dedicated to improving the lives of
              individuals and communities across Pakistan. Our mission is to
              promote education, enhance healthcare access, empower women and
              youth, and support disaster-stricken regions.
            </p>
            <div>
              <h3 className={`${isDarkMode && "text-white"} text-xl mt-6 font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                Intoduction:
              </h3>
              <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
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
              <h3 className={`text-xl mt-8 font-semibold mb-4 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
                FOUNDATION is a Primary Aims / Focus Areas :
              </h3>
              <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                <h1 className={`${isDarkMode && "text-white"} text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                  Education:
                </h1>
                JAHAN The primary mission is to reinvigorate a fading culture of
                reading among young students, especially against the backdrop of
                digitalized era where book-reading among students is vanishing
                day by day. So we focus primarily on motivating youth
                towards book-reading.
              </p>
              <h3 className={`text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
                Health:
              </h3>
              <p className={`${isDarkMode && "text-white"} text-gray-800 dark:text-gray-200`}>
                JAHAN We randomly donate financial assistance and blood
                donations to most deserving patients. Also, we draw attention of
                the concerned authorities towards the remote areas of Pakistan
                where health care services are absent and people face
                inaccessibility to even first aid and conduct ground visits
                along with officials. We have set numerous medical camps to help
                provide medical services time to time.
              </p>
              <h3 className={`text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
                Women empowerment:
              </h3>
              <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                So far, we have empowered 70 women from various remote areas who
                are financially independent with their skills through our
                vocational training center conducted in our first
                and second batch.
              </p>
              <h3 className={`${isDarkMode && "text-white"} text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                Additionally:
              </h3>
              <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                JAHAN Foundation has contributed voluntarily into the
                rehabilitation of disaster-stricken communities in GB after
                Natural Disasters, thereby providing them food rations, clothes,
                dignity kits and hygienic supplies to affected people. JF has
                been working rigorously in providing the basic guidelines for
                the students in scholarships . Additionally, we have been
                permanently giving scholarships to 80 students across the
                country. JF also offered financial assistance for small
                business startups.
              </p>
              <h3 className={`text-xl font-semibold mt-5 mb-4 text-gray-900 dark:text-gray-300 ${isDarkMode && "text-white"}`}>
                Our Values
              </h3>
              <ul className={`list-disc list-inside text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                <li>Compassion</li>
                <li>Empowerment</li>
                <li>Inclusivity</li>
                <li>Integrity</li>
                <li>Collaboration</li>
              </ul>
            </div>
            {/* Right Column - History */}
            <div>
              <h3 className={`${isDarkMode && "text-white"} text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                Our History
              </h3>
              <p className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                Founded in September 2019 by Neelam Wali, a passionate social
                activist from District Ghizer, Gilgit-Baltistan, the JAHAN
                Foundation was established with the aim of making a positive
                impact on society. Named after Neelam's mother, Jahan Wali, the
                foundation started with humble beginnings and has since grown to
                become a leading force in philanthropy and social development.
              </p>

              <p  className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                Today, the JAHAN Foundation operates across Pakistan, with its
                headquarters located in the main city of Gilgit and a regional
                office in the village of Sost in district Ghizer. We remain
                committed to serving the most vulnerable populations and
                creating lasting change in our communities.
              </p>
              <h3  className={`${isDarkMode && "text-white"} text-xl mt-5 font-semibold mb-4 text-gray-900 dark:text-gray-300`}>
                About the Founder.
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
               
                <p  className={`text-gray-800 dark:text-gray-200 ${isDarkMode && "text-white"}`}>
                 <span className="font-bold">Name:</span>  
                  Neelam Wali <br /> <span className="font-bold">Background: </span>  
                  She is a youngest female social
                  activist from District Ghizer, Gilgit-Baltistan.
                  <br />  <span className="font-bold">Initiative: </span> 
                  Neelam Wali initiated the JAHAN Foundation, a philanthropic
                  self-organized initiative, with the aim of improving the lives
                  of individuals and communities across Pakistan. Foundation
                  <br />   <span className="font-bold">Establishment: </span>  
                   The JAHAN Foundation was established in
                  September 2019 by Neelam Wali in her indigenous region.
                  <br /> <span className="font-bold">Foundation Name:  </span>  
                   Neelam Wali named the foundation after her
                  mother, 'Jahan Wali'. Mission: Neelam Wali's mission through
                  the foundation is to promote education, enhance healthcare
                  access, empower women and youth, and support disaster-stricken
                  regions. Activities: The foundation focuses on various areas
                  such as education, healthcare, women empowerment, youth
                  empowerment, and rehabilitation during natural disasters.
                  <br />   <span className="font-bold">Impact:</span>
                   Neelam Wali and the JAHAN Foundation have empowered
                  women through vocational training, provided healthcare
                  assistance to deserving patients, contributed to disaster
                  rehabilitation efforts, and supported education through
                  scholarships and financial assistance for small business
                  startups. Values: The foundation's values include compassion,
                  empowerment, inclusivity, integrity, and collaboration.
                  Headquarters: The JAHAN Foundation's headquarters is located
                  in the main city of Gilgit, with a regional office in the
                  village of Sost in district Ghizer. History: Founded by Neelam
                  Wali in 2019, the JAHAN Foundation has grown from humble
                  beginnings to become a leading force in philanthropy and
                  social development across Pakistan.
                </p>
                <div className="mt-10"><img className="h-40 w-40 mx-auto rounded-full" src={women} alt="" /></div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
