import styles from "./style.js";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Navbar,
  Footer,
  Stats,
  CTA,
  Hero,
  Testimonials,
} from "./components/index";

const App = () => (
  <div className="overflow-hidden w-full bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
