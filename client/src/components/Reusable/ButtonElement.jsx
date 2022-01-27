const ButtonElement = ({ title, backgroundColor, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-${textColor} bg-${backgroundColor} h-12 w-44 rounded-xl font-bold hover:transition-opacity hover:duration-300 hover:opacity-70`}
    >
      {title}
    </button>
  );
};

export default ButtonElement;
