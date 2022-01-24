// Components
import LearnMoreButton from "../../UI/Loader/LearnMoreButton";
import ExchangeInfoTable from "./ExchangeInfoTable";

const ExchangeInfo = () => {
  return (
    <section>
      <div className="bg-green w-full my-5 flex space-y-4 justify-center items-center flex-col py-4">
        <ExchangeInfoTable />
        <LearnMoreButton textColor={"green"} backgroundColor={"grey"} />
      </div>
    </section>
  );
};

export default ExchangeInfo;
