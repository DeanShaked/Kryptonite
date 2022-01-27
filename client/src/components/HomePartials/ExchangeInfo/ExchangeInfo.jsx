// React Reveal
import Fade from 'react-reveal/Fade';

// Components
import FormTransaction from './Elements/FormTransaction';
import CreditCard from './Elements/CreditCard';
import WelcomeIntro from './Elements/WelcomeIntro';

const ExchangeInfo = () => {
  return (
    <div className='container mx-auto bg-transparent h-[850px] flex flex-row md:flex-row my-2'>
      <Fade duration={3000}>
        <WelcomeIntro />
      </Fade>
      <div className='flex flex-col w-full h-full'>
        <CreditCard />
        <Fade delay={500} duration={3000}>
          <FormTransaction />
        </Fade>
      </div>
    </div>
  );
};

export default ExchangeInfo;
