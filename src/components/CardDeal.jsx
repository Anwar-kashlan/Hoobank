import styles, { layout } from "../style";
import { Button } from "./index";
import { card } from "../assets/index";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className=" sm:block hidden" /> in few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. Copy
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} md:mt-0 mt-16`}>
        <img src={card} alt="card img" className=" w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
