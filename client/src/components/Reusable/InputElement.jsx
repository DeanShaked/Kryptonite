import { useState } from "react";

const InputElement = ({
  value,
  width,
  placeholder,
  onChange,
  name,
  errorMessage,
  isError,
  type,
}) => {
  return (
    <div className="">
      <div className="">
        <input
          className={`h-6 w-${width} p-5 rounded-md outline-none bg-regular placeholder:text-grey text-white`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          type={type}
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
