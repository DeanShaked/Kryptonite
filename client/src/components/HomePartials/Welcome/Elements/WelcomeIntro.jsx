// React Reveal
import Fade from "react-reveal/Fade";

const cWelcomeIntro = () => {
  return (
    <Fade duration={3000}>
      <div className="flex flex-col w-full h-full px-28 py-20 pt-28 md:p-5 lg:p-10">
        <h1 className="font-bold text-6xl text-white">
          Trusted and secure bitcoin and crypto exchange{" "}
        </h1>
        <p className="font-medium text-[#CAC5CA] py-8">
          Get Started with the easiest and most secure platform to buy, sell,
          trade, and earn cryptocurrencies
        </p>
        <button className="--gradient-silver --silver-border w-56 h-14 rounded-md text-white font-semibold mt-10 hover:opacity-70">
          Get Started
        </button>
      </div>
    </Fade>
  );
};

export default WelcomeIntro;
