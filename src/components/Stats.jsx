import { stats } from "../constants/index";
import styles from "../style";

const Stats = () => (
  <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((state) => (
      <div
        key={state.id}
        className={`${styles.flexCenter} flex-1 flex-row m-3`}
      >
        <h4 className=" font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold text-white">
          {state.value}
        </h4>
        <p className=" font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] font-normal uppercase ml-3 text-gradient">
          {state.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
