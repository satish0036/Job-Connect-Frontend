import { useState } from "react";
import "./signupmain.style.css";
import FormInput from "./FormInput.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../helper.js"
import { useRef } from 'react';
const SignUpMain = () => {
    // State to store the message (error message from the server)
    const [message, setMessage] = useState("")
    // State to store form input values (username, email, mobile, password, confirmPassword)
    const [values, setValues] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });
    // Array containing input field configurations
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "mobile",
            type: "text",
            placeholder: "Mobile",
            errorMessage:
                "Enter valid mobile number!",
            label: "Mobile",
            pattern: "^[0-9]{10,10}$",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const navigate = useNavigate()
    const formRef = useRef();
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Get the form element using the ref
        const formElement = formRef.current;

        // Reset the form to its initial state
        formElement.reset();

        const { confirmPassword, ...others } = values
        try {
            // Making a POST request to the signup endpoint
            const res = await axios.post(`${BASE_URL}/api/auth/signup/`, others)
            navigate("/")
            console.log(res.data)
        }
        catch (err) {
            // Handling errors and displaying the error message from the server
            console.log(err.response.data)
            setMessage(err.response.data)
        }
    };
    // Function to handle input changes
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="signupmain">
            <h1> Start Your Journey with JobConnect</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h1>Sign Up</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
                {message ? <h4 style={{ color: "red" }}>{message}</h4> : ""}
                <h4>I am a registered user. <Link to="/">Login</Link></h4>
            </form>
        </div>
    );
};

export default SignUpMain;
