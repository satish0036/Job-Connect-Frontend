import { useState } from "react";
// import "./JobProviderForm.css";

const EditJobInput = (props) => {
  // State to track whether the input is focused or not
  const [focused, setFocused] = useState(false);

  // Destructuring props to get the required properties from the parent component
  const { label, errorMessage, onChange, id, ...inputProps } = props;

// Function to handle input focus
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (

    <div className="jobProviderFormInput">
      {/* Displaying the label and an asterisk (*) if the input is required */}
      <label>{label}{inputProps.required ? "*" : ""}</label>
      <input
        {...inputProps}
        onChange={onChange} // Handling input changes with the parent component's onChange function
        onBlur={handleFocus}// Handling input focus loss
        onFocus={() =>  // Handling input focus gain
          inputProps.name === "confirmPassword" && setFocused(true) 
        }
        focused={focused.toString()} // Adding a "focused" attribute with a boolean value converted to string
      />
       {/* Displaying the error message if there is any */}
      <span>{errorMessage}</span>
    </div>
  );
};

export default EditJobInput;