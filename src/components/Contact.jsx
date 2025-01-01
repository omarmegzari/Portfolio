import React from "react";

import { motion } from "framer-motion";
import { linkedin, profilepic } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`flex justify-center max-w-7xl`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-3xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <a href="https://www.linkedin.com/in/omar-megzari7/" target="_blank" rel="noreferrer" className="flex justify-center">
          <div className="flex flex-col w-60 lg:w-80 items-center justify-center rounded-md">
            <div className="relative bg-[#008DCB] h-20 w-full rounded-t-md flex justify-center">
              <div className="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-[#303336]">
                <img src={profilepic} alt="Omar" className="w-full h-full rounded-full" />
              </div>
            </div>
            <div className="bg-[#303336] w-full flex flex-col items-center h-60 p-2 rounded-b-md gap-2">
              <h1 className="text-white text-xl mt-10 font-semibold">Omar Megzari</h1>
              <div className="text-center">
                <h2 className="text-white text-sm">Third-year</h2>
                <h2 className="text-white text-sm"> Software Engineering Student</h2>
              </div>
              <button className="bg-[#0074BB] h-8 w-24 rounded-sm font-bold text-xs hover:shadow hover:shadow-[#0074BB] mt-4 ">
                View profile
              </button>
              <img src={linkedin} alt="Linkedin" className=" absolute h-6 bottom-10" />
            </div>
          </div>
        </a>

      </motion.div>
    </div>


  );
};

export default SectionWrapper(Contact, "contact");
