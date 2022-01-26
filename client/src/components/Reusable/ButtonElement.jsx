const ButtonElement = ({ title, backgroundColor, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-${textColor} bg-${backgroundColor} h-10 w-40 rounded-xl font-bold hover:transition-opacity hover:duration-300 hover:opacity-70`}
    >
      {title}
    </button>
  );
};

export default ButtonElement;
