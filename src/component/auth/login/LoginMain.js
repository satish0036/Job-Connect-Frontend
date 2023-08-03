import {  useState } from "react";
import "./LoginMain.css";
import LoginFormInput from "./LoginFormInput.js"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { useDispatch} from 'react-redux'
import axios from "axios";
import {BASE_URL} from "../../helper.js"
// Importing addLocalStoreData action creator from LocalstoreDataSlice
import { addLocalStoreData } from "../../../all-redux/features/localstore-data-slice/LocalstoreDataSlice";

const LoginMain = () => {

    // State to store the message (error message from the server)
    const [message,setMessage]=useState("")

    // State to store form input values (email and password)
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

// Array containing input field configurations
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Enter Valid Password !",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];
    const navigate=useNavigate()
    const dispatch=useDispatch();
 // Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            // Making a POST request to the login endpoint
            const res=await axios.post(`${BASE_URL}/api/auth/login/`,values,{ withCredentials: true })
            // Making a POST request to the login endpoint
            navigate("/profile")
            // Dispatching the addLocalStoreData action with the response data to store it in the Redux store
            dispatch(addLocalStoreData(res.data))

            // Storing the user data in local storage
            localStorage.setItem("userData", JSON.stringify(res.data));
          
            
        }
        catch(err){
            // Handling errors and displaying the error message from the server
            console.log(err.response.data)
            setMessage(err.response.data)
        } 
    };
 
   
// Function to handle input changes
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setMessage("")// Clearing the error message when the user types in the input field
    };

    return (
        <div className="loginmain">
            <h1> Unlock Your Career Potential with JobConnect</h1>
            <form onSubmit={handleSubmit}>
                <h1>Log In </h1>
                {inputs.map((input) => (
                    <LoginFormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
                {message ? <h4 style={{ color: "red" }}>{message}</h4> : ""}
                <h4>I dont't have Account. <Link to="/signupmain">Sign Up</Link></h4>
            </form>
        </div>
    );
};

export default LoginMain;
