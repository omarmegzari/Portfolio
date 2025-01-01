import React, { useState } from "react";
import { Link } from "react-router-dom";

import { close, menu, profilepic } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 justify-center'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={profilepic} alt='profilepic' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-md font-bold cursor-pointer flex '>
            Omar MEGZARI
          </p>
        </Link>
        <div className="flex justify-start gap-2 mr-4">
          <a href="https://www.linkedin.com/in/omar-megzari7/" target="_blank" rel="noreferrer" className="flex justify-center">
            <svg className="h-6 w-6 fill-gray-300 hover:fill-white ml-4" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.81009 7.82601C9.81009 9.38713 8.515 10.6519 6.91667 10.6519C5.31833 10.6519 4.02328 9.38713 4.02328 7.82601C4.02328 6.26601 5.31833 5 6.91667 5C8.515 5 9.81009 6.26601 9.81009 7.82601ZM9.83333 12.913H4V31H9.83333V12.913ZM19.1457 12.913H13.3496V31H19.1468V21.5052C19.1468 16.2261 26.1807 15.7942 26.1807 21.5052V31H32V19.5476C32 10.6398 21.591 10.9643 19.1457 15.3492V12.913Z" />
            </svg>
          </a>
          <a href="https://github.com/omarmegzari" target="_blank" rel="noreferrer" className="flex justify-center">
            <svg className="h-6 w-6 fill-gray-300 hover:fill-white ml-2" viewBox="0 0 96 96">
              <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          </a>
        </div>

        <ul className='list-none flex-row gap-10 hidden lg:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex justify-end items-center'>
          <div>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className="w-6 h-6"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
