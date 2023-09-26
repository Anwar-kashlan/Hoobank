import styles, { layout } from "../style";
import { Button } from "./index";
import { features } from "../constants/index.js";
const FeaturesCard = ({ item, index }) => (
  <div
    className={`flex p-6 flex-row rounded-[20px] ${
      index !== features.length - 1 ? " mb-6" : " mb-0"
    } feature-card`}
  >
    <div
      className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}
    >
      <img
        src={item.icon}
        alt={`${item.icon}`}
        className=" w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className=" flex-1 flex flex-col ml-3">
      <h4 className=" font-poppins text-[18px] font-semibold text-white mb-2 leading-[23px]">
        {item.title}
      </h4>
      <p className=" text-dimWhite font-poppins text-[16px] font-normal leading-[24px] max-w-[466px]">
        {item.content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h1 className={`${styles.heading2}`}>
        You do the business,
        <br className=" sm:block hidden" /> we'll handle the money.
      </h1>
      <p className={`${styles.paragraph} max-w-[570px] my-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles=" mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((item, index) => (
        <FeaturesCard item={item} key={item.id} index={index} />
      ))}
    </div>
  </section>
);
export default Business;
