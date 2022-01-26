import React from "react";

const InputElement = ({ value, placeholder, onChange, name, errorMessage }) => {
    return (
        <div>
            <div>
                <input value={value} placeholder={placeholder} onChange={onChange} name={name} />
            </div>
            <div>
                <small>{'errorMessage'}</small>
            </div>
        </div>
    )
}

export default InputElement;