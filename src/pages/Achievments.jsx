import React from "react";
import { useSelector } from "react-redux";
import bannerPhoto from "../assets/images/p18.webp";
import achievement1Photo from "../assets/images/p22.webp";
import achievement2Photo from "../assets/images/p10.webp";
import achievement3Photo from "../assets/images/p21.webp";
import achievement4Photo from "../assets/images/p16.webp";
import achievement5Photo from "../assets/images/p12.webp";
import achievement6Photo from "../assets/images/p12.webp";
import achievement7Photo from "../assets/images/p22.webp";
import achievement8Photo from "../assets/images/p5.webp";
import achievement9Photo from "../assets/images/p4.webp";
import achievement10Photo from "../assets/images/p25.webp";
import achievement11Photo from "../assets/images/p1.webp";
import achievement12Photo from "../assets/images/p24.webp";

// Import other achievement photos as needed

export default function Achievements() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  console.log(isDarkMode + "is dark mode");

  return (
    <div
      className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} ${
        isDarkMode && "text-white"
      }`}
    >
      <div
        className={` md:mx-6 mh-2  ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } ${isDarkMode && "text-white"}`}
      >
        <section className="dark:bg-gray-900">
          <div
            className={`grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            } ${isDarkMode && "text-white"}`}
          >
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-7xl dark:text-white">
                As a social activist and philanthropist, some of the milestone
                contributions and achievements of Neelam Wali are as under:
              </h1>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                className="border rounded-xl"
                src={bannerPhoto}
                alt="mockup"
              />
            </div>
          </div>
        </section>
        <section
          className={`  ${isDarkMode ? ("bg-gray-800", "border-white-900") :( "bg-gray-200",  "border-white")} ${
            isDarkMode && "text-white"
          } p-2 md:p-4 border-none md:border-2 rounded-lg `}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {/* Achievement 1 */}

            <div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}
            >
              <img
                className="mb-4 mx-auto rounded-lg "
                src={achievement1Photo}
                alt="Achievement 1"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                First Public Library in Gilgit-Baltistan
              </p>
              <p className=" ">
                ➢ First ever female student who Founded Jahan Foundation and
                established first public library Jahan Public Library in
                Gilgit-Baltistan for promoting a culture of reading in as
                backward area as her native village in Ghizer,more than 12
                villages and 8 school children getting benefit from it. English
                language classes,computer classes and different national events
                are being celebrated here. She is now CEO and Founder of Jahan
                Foundation and Jahan Public Library.
              </p>
            </div>
            {/* Achievement 2 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement2Photo}
                alt="Achievement 2"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Recipient of National Swera Award 2022: Pioneering Social Change
                in GB
              </p>
              <p className="">
                ➢ Neelam Wali, hailing from Gilgit-Baltistan, made history as
                the first female recipient from GB to be honored with the
                prestigious National Swera Award in 2022. This accolade not only
                recognized her remarkable efforts as a change maker but also
                celebrated her profound contributions to social philanthropy. As
                the pioneering founder of the first-ever NGO in GB, her impact
                resonated far beyond her community, inspiring a wave of positive
                transformation. Through her tireless dedication, Neelam has
                emerged as a beacon of hope, symbolizing the power of compassion
                and activism in fostering meaningful change.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement3Photo}
                alt="Achievement 2"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Youthful Trailblazer: Neelam Wali's Nomination for the 2022
                National Women Achievement Award
              </p>
              <p className="">
                ➢ Nominated for the 2022 National Women Achievement Award,
                Neelam Wali stands out as the youngest female International
                Ambassador representing Pakistan, appointed by the esteemed
                Institute of Peace and Development (INSPAD). This recognition
                not only highlights her exceptional accomplishments but also
                underscores her pivotal role in fostering diplomatic relations
                and promoting peace on the global stage. At such a young age,
                Neelam's dedication to serving as a beacon of hope and
                empowerment serves as an inspiration to women worldwide.
              </p>
            </div>

            {/* Achievement 4 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement4Photo}
                alt="Achievement 4"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Collaborating for Change: Neelam Wali's Impact on Education,
                Women Empowerment, and Disaster Management
              </p>
              <p className=" ">
                ➢ Working with numerous National and International NGOs for
                putting her part in promotion of education in far-flung
                villages, women empowerment, natural disaster management and
                rehabilitation and many social services across the country.
              </p>
            </div>

            {/* Achievement 5 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement5Photo}
                alt="Achievement 5"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Empowering Heritage: Neelam Wali's Sewing Machine and
                Handicrafts Initiative
              </p>
              <p className="">
                ➢ Initiation of a project named as “Sewing Machine and
                Handicrafts” in her native district to empower and encourage
                local women to contribute in much-needed promotion and
                preservation of their regional and cultural heritage of
                handicraft work which was on brink of extinction by providing
                them free sewing machines. This will help them with their own
                earning.
              </p>
            </div>

            {/* Achievement 6 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement6Photo}
                alt="Achievement 6"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Breaking Barriers: Neelam Wali's Empowerment Through Winter
                Sports Initiative
              </p>
              <p className="">
                ➢ Establishing female teams and empower them with providing free
                sports kits to encourage them to participate in winter sports at
                par with their male counterparts is an unprecedented initiative
                in region like GB which is highly male dominated and where
                female sports is almost a taboo. This is also effective way to
                gravitate tourism towards the region.
              </p>
            </div>

            {/* Achievement 7 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement7Photo}
                alt="Achievement 7"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Preserving Heritage: Neelam Wali's Cultural Promotion Through
                Culinary and Handicraft Workshops
              </p>
              <p className="">
                ➢ Dedicated to preserving local heritage, Neelam Wali
                orchestrates regular workshops on traditional cuisine and
                handicrafts, ensuring their rich legacy endures. Through her
                leadership, these sessions not only celebrate cultural diversity
                but also empower communities to thrive. Neelam's commitment to
                cultural promotion fosters a deeper appreciation for indigenous
                traditions, enriching the fabric of society.
              </p>
            </div>

            {/* Achievement 8 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement8Photo}
                alt="Achievement 8"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Pioneering Progress: Neelam Wali's Government Collaboration for
                Digital and Vocational Initiatives
              </p>
              <p className="">
                ➢ In collaboration with the government of GB, Neelam Wali
                spearheads two transformative projects: the establishment of the
                region's inaugural Digital Library and a comprehensive
                Vocational Training Centre. These initiatives aim to bridge
                educational gaps and empower local communities with essential
                digital literacy and vocational skills, laying the groundwork
                for sustainable development and prosperity in the region.
              </p>
            </div>

            {/* Achievement 9 */}
            <div  className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement9Photo}
                alt="Achievement 9"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Empowering Futures: Neelam Wali's Online Skill Development and
                Wellness Initiatives
              </p>
              <p className=" ">
                ➢ Online sessions to youth of different age groups on different
                skills, like, educate on online earning platforms, free online
                English learning sessions, mentoring them to learn online skills
                in collaboration with "Kamyab Jawan Program" Also, women are
                given free online sessions on their health and hygiene plus
                mental health.
              </p>
            </div>

            {/* Achievement 10 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement10Photo}
                alt="Achievement 10"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Investing in Education: Neelam Wali's Scholarships for 500
                Students Nationwide
              </p>
              <p className="">
                ➢ Neelam Wali's commitment to education shines through her
                provision of scholarships to 500 students spanning schools,
                colleges, and universities nationwide in Pakistan. This
                initiative not only fosters academic excellence but also
                empowers deserving individuals to pursue their dreams and unlock
                their full potential. By investing in the future of these
                students, Neelam is laying the foundation for a brighter, more
                equitable society.
              </p>
            </div>

            {/* Achievement 11 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement11Photo}
                alt="Achievement 11"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Crisis Relief Champion: Neelam Wali's Voluntary Aid Efforts for
                Natural Disaster Victims
              </p>
              <p className="">
                ➢ Neelam Wali, driven by compassion, tirelessly volunteers in
                distributing essential first aid and rehabilitation kits to
                individuals affected by natural calamities across Pakistan. Her
                hands-on approach not only offers immediate relief to those in
                distress but also facilitates long-term recovery and
                resilience-building efforts in disaster-stricken communities.
                Through her selfless service, Neelam embodies the spirit of
                solidarity and humanitarianism, making a tangible difference in
                the lives of the vulnerable.
              </p>
            </div>
            {/* Achievment 12 */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} ${
                isDarkMode && "text-white"
              }  rounded-lg border-2 shadow-xl p-4 md:p-6`}>
              <img
                className="mb-4 mx-auto rounded-lg"
                src={achievement12Photo}
                alt="Achievement 12"
              />
              <p className="text-lg font-semibold mb-2">
                {" "}
                Empowering Communities: Neelam Wali's Initiatives in Emergency
                Healthcare and Micro-Business Development
              </p>
              <p className="">
                ➢ Fund-raising for the emergency health cases for deserving
                families.she is working on micro business( Startups) to
                empower,independent and financialy stable everyone out there for
                the sustainable development.She is supporting ultra poor
                families in remote and ignored areas across pakistan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
