const ButtonElement = ({ title, backgroundColor, textColor, onClick }) => {
    return (
      <div className="flex flex-row justify-end w-full px-16 hover:transition-opacity hover:duration-300 hover:opacity-70">
        <button
          onClick={onClick} className={`text-${textColor} bg-${backgroundColor} h-10 w-40 rounded-xl font-bold`}
        >
          {title}
        </button>
      </div>
    );
  };
  
  export default ButtonElement;
  