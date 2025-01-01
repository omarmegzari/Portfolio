import React from 'react';
import { certGroups } from '../constants';
import { SectionWrapper } from '../hoc';


const Certifications = () => {

    return (
        <>
            <div className="flex flex-row gap-40 w-[100%]">
                {
                    certGroups.map((certGroup, i) => (
                        <div key={i}>
                            <img src={certGroup.groupLogo} alt={certGroup.groupName} className="h-10" />
                            <h1 className='text-secondary mb-5'>{certGroup.groupName}</h1>
                            <div className="flex flex-wrap gap-10 w-[100%] justify-evenly lg:justify-start">
                                {certGroup.certs.map((cert, j) =>
                                (
                                    <a key={j} href={cert.url} target="_blank" rel="noreferrer">
                                        <img key={j} src={cert.badge} alt={cert.name} className="h-44 hover:scale-125 cursor-pointer transition ease-in-out delay-100 duration-100" />
                                    </a>
                                )
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default SectionWrapper(Certifications, "certifications", "Certifications");