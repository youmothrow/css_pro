import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={` flex-col relative ${styles.paddingY} ${styles.flexCenter}`}>    
    <div className="w-full flex justify-between items-center flex-col md:flex-row  mb-6  sm:mb-16 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full  mt-6 md:mt-0">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-col  md:flex-row justify-center sm:justify-start w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>

  </section>
);

export default Testimonials;
