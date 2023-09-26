import styles from "../style";
import { clients } from "../constants/index.js";

const Clients = () => {
  return (
    <section className={`my-4 ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((item) => (
          <div
            key={item.id}
            className={`sm:min-w-[192px] min-w-[120px] flex-1 ${styles.flexCenter} md:mb-0 mb-4`}
          >
            <img
              src={item.logo}
              alt="client"
              className=" sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
