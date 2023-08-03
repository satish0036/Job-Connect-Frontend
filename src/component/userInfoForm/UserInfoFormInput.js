import { useState } from "react";
import "./UserInfoForm.css";

const UserInfoFormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    
    <div className="UserInfoFormInput">
       {/* Label for the input field */}
      <label>{label}{inputProps.required?"*":""}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
       {/* Error message to be displayed if any */}
      <span>{errorMessage}</span>
    </div>
  );
};

export default UserInfoFormInput;