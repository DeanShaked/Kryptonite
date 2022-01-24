const LearnMoreButton = ({ backgroundColor, textColor }) => {
  return (
    <div className="flex flex-row justify-end w-full px-16">
      <button
        className={`text-${textColor} bg-${backgroundColor} h-10 w-40 rounded-xl font-bold`}
      >
        Learn More
      </button>
    </div>
  );
};

export default LearnMoreButton;
