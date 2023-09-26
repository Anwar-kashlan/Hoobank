import styles from "../style";
import { arrowUp } from "../assets/index";

const GetStarted = () => {
  return (
    <div
      className={` ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={` ${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full  bg-primary`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins text-[18px] font-medium leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            className="w-[23px] h-[23px] object-contain ml-2 "
            src={arrowUp}
            alt="arrow"
          />
        </div>
        <p className="font-poppins text-[18px] font-medium leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
