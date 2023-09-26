import { logo } from "../assets/index";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants/index.js";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={` ${styles.flexStart} flex flex-col md:flex-row mb-8 w-full`}
    >
      <div className=" flex flex-col flex-1 justify-start mr-10 ">
        <img
          src={logo}
          alt="logo"
          className=" w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className=" flex flex-row flex-[1.5] justify-between w-full flex-wrap md:mt-0 mt-7">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="  flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h2 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
              {item.title}
            </h2>
            <ul className=" list-none mt-4">
              {item.links.map((link, i) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ${
                    i !== item.links.length - 1 ? " mb-4" : "mb-0"
                  } cursor-pointer hover:text-secondary`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div
      className=" flex justify-between items-center w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45];
    ]"
    >
      <p className=" font-poppins font-normal text-[18px] leading-[27px] text-dimWhite">
        2023 HooBank. All Rights Reserved.
      </p>
      <div className=" flex flex-row md:mt-0 mt-6">
        {socialMedia.map((icon, index) => (
          <img
            key={icon.id}
            src={icon.icon}
            alt={icon.icon}
            className={` w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? " mr-6" : " mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;
