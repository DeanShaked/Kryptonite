const LearnMoreButton = ({ backgroundColor, textColor }) => {
  return (
    <div className="flex flex-row justify-end w-full px-16 hover:transition-opacity hover:duration-300 hover:opacity-70">
      <button
        className={`text-${textColor} bg-${backgroundColor} h-10 w-40 rounded-xl font-bold`}
      >
        Learn More
      </button>
    </div>
  );
};

export default LearnMoreButton;
