import styles from "../style";
import { discount, robot, landingpagegirl, girlhiker} from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[80.8px] leading-[75px]">
            Commute Smarter, <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Reduce Carbon Emissions</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          and win prizes.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={girlhiker} alt="billing" className="w-[80%] h-[6 0%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-30 pink__gradient" />
        <div className="absolute z-[1] w-[10%] h-[10%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-30 bottom-30 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
