import { quotes } from "../assets/index";

const FeedbackCard = ({ item }) => (
  <div className=" max-w-[370px] rounded-[20px] flex flex-col justify-between py-12 px-10 md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="quotes"
      className=" w-[42px] h-[27px] object-contain"
    />
    <h2 className=" font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      Money is only a tool. It will take you wherever you wish, but it will not
      replace you as the driver. Copy
    </h2>
    <div className=" flex flex-row">
      <img
        src={item.img}
        alt={item.name}
        className=" w-[48px] h-[48px] object-contain "
      />
      <div className=" flex flex-col ml-4">
        <h4 className=" font-poppins font-normal text-[20px] leading-[32px] text-white ">
          {item.name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {item.title}
        </p>
      </div>
    </div>
  </div>
);
export default FeedbackCard;
