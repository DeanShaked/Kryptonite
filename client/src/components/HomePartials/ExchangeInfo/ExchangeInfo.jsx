// Components
import ButtonElement from "../../Reusable/ButtonElement";
import ExchangeInfoTable from "./ExchangeInfoTable";

const ExchangeInfo = () => {
  return (
    <section>
      <div className="bg-green w-full my-5 flex space-y-4 justify-center items-center flex-col py-4">
        <ExchangeInfoTable />
        <ButtonElement title={'Learn More'} textColor={"green"} backgroundColor={"grey"} onClick={() => {}} />
      </div>
    </section>
  );
};

export default ExchangeInfo;
