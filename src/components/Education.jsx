import React from 'react';
import { esisa, LyceeAbdelkrimRaiss} from "../assets";
import { SectionWrapper } from "../hoc";

const Diploma = ({ schoolName, schoolLogo, descriptionFr, descriptionEn, specialtyFr, specialtyEn, duration, borderColor, bandColor }) => {
    return (<div className="mt-5 flex-grow bg-white p-1 rounded-sm shadow-slate-400 shadow-md">
        <div className={`${borderColor} border-4 flex flex-col items-center rounded-sm py-4`}>
            <img src={schoolLogo} alt={schoolName} className="h-20 lg:h-40" />
            <h1 className="text-secondary text-sm mb-6 mx-1 mt-1">{schoolName}</h1>
            <h1 className="text-gray-900 text-xl mb-4">Omar Megzari</h1>
            <div className={`${bandColor} bg-opacity-70 w-full h-30 flex flex-col items-center justify-center`}>
                <h1 className="text-white text-xl ">{descriptionFr}</h1>
                <h1 className="text-white text-xl ">{descriptionEn}</h1>
            </div>
            <div className="flex items-center justify-evenly mt-6 gap-2 w-[100%]">
                <div className="flex flex-col items-center">
                    <h1 className="text-gray-900 text-sm font-semibold">{specialtyFr}</h1>
                    <h1 className="text-gray-900 text-sm font-semibold">{specialtyEn}</h1>
                </div>
                {
                    /* <img src={diploma} alt="DIPLOME" className="h-20 opacity-40 " /> */
                }
                <div>
                    <h1 className="text-gray-900 text-sm ">{duration}</h1>
                </div>
            </div>
        </div>
    </div>);
}


const Education = () => {
    return (
        <>
            <div className="flex items-center justify-evenly flex-wrap gap-10 p-5">
                <Diploma
                    schoolName=" Higher School of Engineering in Applied Sciences"
                    schoolLogo={esisa}
                    borderColor="border-[#EE2922]"
                    bandColor="bg-[#EE2922]"
                    descriptionFr={
                        <>
                            Currently a Third-year student <br />
                            <div className="flex justify-center w-full">
                                <span>in Software Engineering</span>
                            </div>
                        </>
                    }
                    specialtyEn="Computer Science"
                    duration="2022 - 2025"
                />
                <Diploma
                    schoolName="Abdelkrim Raiss High School"
                    schoolLogo={LyceeAbdelkrimRaiss}
                    borderColor="border-[#1f4899]"
                    bandColor="bg-[#1f4899]"
                    descriptionFr="Baccalaureate"
                    descriptionEn="High School Diploma"
                    specialtyFr="Physical Sciences(French Section)"
                    duration="2022"
                />
            </div>

        </>
    )
}

export default SectionWrapper(Education, "education", "Education");