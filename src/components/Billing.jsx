import styles, { layout } from "../style";
import { bill, apple, google } from "../assets/index";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse} z-5 relative`}>
      <img src={bill} alt="bill img" className=" w-[100%] h-[100%]" />
      <div className=" absolute w-[50%] h-[50%] top-0 -left-1/2 z-[3] white__gradient" />
      <div className=" absolute w-[50%] h-[50%] bottom-0 -left-1/2 z-[0] pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo} ml-20`}>
      <h2 className={`${styles.heading2} mb-7`}>
        Easily control your <br className=" sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className=" flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple"
          className=" w-[128px] h-[42px] object-contain mr-5 xs:mb-0 mb-4 cursor-pointer"
        />
        <img
          src={google}
          alt="apple"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);
export default Billing;
