import styles, { layout } from "../style";
import { discount, robot } from "../assets/index";
import { GetStarted } from "./index";
const Hero = () => {
  return (
    <section id="home" className={`${layout.section}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div
          className={` flex flex-row bg-discount-gradient py-[6px] px-4 mb-2 rounded-[10px] items-center `}
        >
          <img
            src={discount}
            className=" w-8 h-8 object-contain"
            alt="discLogo"
          />
          <p className={`${styles.paragraph} uppercase ml-2 `}>
            <span className=" text-white">20%</span> Discount For{" "}
            <span className=" text-white">1 Month Account</span>
          </p>
        </div>
        <div className=" flex flex-row justify-center items-center w-full">
          <h1 className=" flex-1 ss:text-[72px] xs:text-[52px] text-[42px] font-poppins font-semibold text-white ss:leading-[100px] leading-[75px] ">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden">
            <GetStarted />
          </div>
        </div>
        <h1 className=" w-full ss:text-[68px] xs:text-[52px] text-[42px] font-poppins font-semibold text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[483px] mt-5 `}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.
          <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div
        className={` flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="robotHand"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className=" absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className=" absolute z-[0] w-[50%] h-[50%]   right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
