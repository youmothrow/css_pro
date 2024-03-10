import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[200px] h-[200px] rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary  rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[22px] h-[22px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
