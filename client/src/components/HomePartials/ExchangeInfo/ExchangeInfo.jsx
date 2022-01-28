

// Components
import FormTransaction from './Elements/FormTransaction';
import CreditCard from './Elements/CreditCard';
import WelcomeIntro from './Elements/WelcomeIntro';

const ExchangeInfo = () => {
  return (
    <div className='container mx-auto bg-transparent h-[850px] flex flex-row md:flex-row my-2'>
      <WelcomeIntro />
      <div className='flex flex-col w-full h-full'>
        <CreditCard />
        <FormTransaction />
      </div>
    </div>
  );
};

export default ExchangeInfo;
