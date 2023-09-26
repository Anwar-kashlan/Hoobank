import styles from "../style";
import { feedback } from "../constants/index.js";
import { FeedbackCard } from "./index";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      <div className=" absolute -right-1/2 w-[60%] h-[60%] z-0 blue__gradient" />
      <div className=" flex justify-center md:flex-row flex-col w-full items-center sm:mb-16 mb-6 relative z-[1] ">
        <h2 className={`${styles.heading2}`}>
          What people are <br className=" sm:block hidden" /> saying about us
        </h2>
        <div className=" w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap sm:justify-start justify-center relative w-full z-[1]">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
