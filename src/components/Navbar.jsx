import { useState } from "react";
import { logo, menu, close } from "../assets/index";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt={"logo"} className=" w-[124px] h-[32px]" />

      <ul className=" sm:flex hidden justify-end items-center list-none flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={` text-white font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : " mr-10"
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className=" sm:hidden flex justify-end flex-1 items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" h-7 w-7 object-contain"
          onClick={() => setToggle((priv) => !priv)}
        />
      </div>

      <div
        className={` ${
          toggle ? " flex" : " hidden"
        } absolute top-20 right-0 bg-black-gradient  min-w-[140px] rounded-xl p-6 mx-4 my-2 sidebar `}
      >
        <ul className=" flex justify-end items-center list-none flex-1 flex-col ">
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              className={` text-white font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mb-0" : " mb-4"
              }`}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
