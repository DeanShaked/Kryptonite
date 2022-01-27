import { useState } from "react";

const InputElement = ({
  value,
  placeholder,
  onChange,
  name,
  errorMessage,
  isError,
}) => {
  return (
    <div className="">
      <div className="">
        <input
          className="h-6 w-80 p-5 rounded-md outline-none bg-regular placeholder:text-grey text-white"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      </div>
      {isError && (
        <small className="text-red font-medium text-center">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default InputElement;
