import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const SkillCard = ({
    index,
    skillName,
    skillDescriptionItems,
    tech
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl max-w-md xl:max-w-lg h-full'
            >

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{skillName}</h3>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        {skillDescriptionItems.map((point, index) => (
                            <li
                                key={`specialty-point-${index}`}
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-5 flex flex-wrap gap-3'>
                    {tech.map((techItem, index) => (
                        <img key={`logo-${index}`} src={techItem.logo} alt={techItem.name} className="h-[2rem]" />
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <div className='w-full flex flex-col'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    I strive for a T-shaped skill set with breadth of experience, knowledge and skills across many
                    disciplines of IT and depth of expertise in my core discipline: Data Engineering.
                </motion.p>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    In my opinion, a data engineer is a software engineer who is also skilled in data, I try to build my
                    skillset accordingly.
                </motion.p>
            </div>

            <div className='mt-10 flex flex-wrap gap-7 justify-evenly'>
                {skills.map((skill, index) => (
                    <SkillCard key={`tech-${index}`} index={index} {...skill} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills", "Skills");