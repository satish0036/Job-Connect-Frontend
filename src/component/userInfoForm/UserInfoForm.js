import { useState } from "react";
import "./UserInfoForm.css";
import UserInfoFormInput from "./UserInfoFormInput.js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from "../helper";
import { editDataInProfile } from "../../all-redux/features/profile-data-slice/ProfileDataSlice";
const UserInfoForm = () => {
    const userData = useSelector((state) => state.newLocalStoreData)
    // State to store form input values
    const [values, setValues] = useState({
        fullName: "",
        bio: "",
        profilePicture: "",
        jobTitle: "",
        workExperience: "",
        education: "",
        skills: "",
        resume: "",
        portfolioLink: "",
        jobPreferences: "",
        availability: "",
        linkedInProfile: "",
        additionalInfo: "",
        references: "",
        workAuthorization: "",
        salaryExpectations: "",
        preferredCommunication: "",
        uid1: userData.id
    });
// Array containing input field configurations
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Full Name",
            // errorMessage:
            //     "Enter Full Name!",
            label: "Full Name",
            // pattern: "^[A-Za-z0-9!@# $%^&*]{3,50}$",
            // required: true,
        },
        {
            id: 2,
            name: "bio",
            type: "text",
            placeholder: "About yourself",
            // errorMessage:
            //     "Required",
            label: "About yourself",
            // pattern: "^{3,500}$",
            // required: true,
        },
        {
            id: 3,
            name: "profilePicture",
            type: "text",
            // accept: "image/*",
            placeholder: "Profile Picture Link",
            // errorMessage:
            //     "Please Enter Profile Picture",
            label: "Profile Picture URL",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            // required: true,
        },

        {
            id: 5,
            name: "jobTitle",
            type: "text",
            placeholder: "Job Title",
            // errorMessage:
            //     "Hiring for which jobTitle ",
            label: "Job Title",
            // pattern: "^[A-Za-z0-9!@# $%^&*]{3,196}$",
            // required: true,
        },
        {
            id: 6,
            name: "workExperience",
            type: "text",
            placeholder: "Work Experience",
            // errorMessage:
            //     "Hiring for which workExperience!",
            label: "Work Experience",
            // pattern: "^[A-Za-z0-9!@#$% ^&*]{3,196}$",
            // required: true,
        },
        {
            id: 7,
            name: "education",
            type: "text",
            placeholder: "Highest Education",
            // errorMessage:
            //     "education Required",
            label: "Highest Education",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            // required: true,
        },
        {
            id: 8,
            name: "skills",
            type: "text",
            placeholder: "Skills",
            // errorMessage:
            //     "It should grater than two digit",
            label: "Skills",
            // pattern: "^[A-Za-z0-9. $]{3,196}$",
            // required: true,
        },
        {
            id: 9,
            name: "resume",
            type: "text",
            placeholder: "Resume",
            // errorMessage:
            //     "It should be valid resume!",
            label: "Resume",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            // required: true,
        },
        {
            id: 10,
            name: "portfolioLink",
            type: "text",
            placeholder: "Portfolio Link",
            // errorMessage:
            //     "It should be a valid portfolioLink!",
            label: "Portfolio Link",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 11,
            name: "jobPreferences",
            type: "text",
            placeholder: "Job Preferences",
            // errorMessage:
            //     "It should be a valid jobPreferences!",
            label: "Job Preferences",
            // pattern: "^[0-9]{10,10}$",
            // required: true,
        },
        {
            id: 12,
            name: "availability",
            type: "text",
            placeholder: "Availability",
            // errorMessage:
            //     "Please specify your availability for work!",
            label: "Availability",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 13,
            name: "linkedInProfile",
            type: "text",
            placeholder: "LinkedIn Profile",
            errorMessage:
                "Please provide LinkedIn Profile!",
            label: "LinkedIn Profile",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 14,
            name: "additionalInfo",
            type: "text",
            placeholder: "Additional Info",
            errorMessage:
                "Please provide additional information about yourself!",
            label: "Additional Info",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 15,
            name: "references",
            type: "text",
            placeholder: "References",
            errorMessage:
                "Please provide at least one reference!",
            label: "References",
            // pattern: "^[A-Za-z0-9!@# ,.$%^&*]{50,1000}$",
            // required: true,
        },
        {
            id: 16,
            name: "workAuthorization",
            type: "text",
            placeholder: "Work Authorization",
            errorMessage:
                "Please enter a valid work authorization status!",
            label: "Work Authorization",
            // pattern: "^[A-Za-z0-9!@.,;#$ %^&*]{50,1000}$",
            // required: true,
        },
        {
            id: 17,
            name: "salaryExpectations",
            type: "text",
            placeholder: "salaryExpectations",
            errorMessage:
                "Please enter your salary expectations!",
            label: "Salary Expectations",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,1000}$",
            // required: true,
        },
        {
            id: 18,
            name: "preferredCommunication",
            type: "text",
            placeholder: "Preferred Communication",
            errorMessage:
                "Please give a preferred communication method!",
            label: "Preferred Communication",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,1000}$",
            // required: true,
        },

    ];

    const navigate = useNavigate();
    const dispatch=useDispatch();
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
       
            // Make a POST request to submit the form data to the server
            await axios.post(`${BASE_URL}/api/post/userInfo`, values)
            dispatch(editDataInProfile(values));
            navigate("/profile")
        }
        catch (err) {
            console.log(err)
        }
    };

    const onChange = async (e) => {
   
            setValues({ ...values, [e.target.name]: e.target.value });
   
    };


    return (
        <div className="UserInfoForm">
            <form onSubmit={handleSubmit}>
                <h1>User Info Form</h1>
                <div>Fill the form to track your tech skill score and get personalized job updates.

                </div>
                {inputs.map((input) => (
                    <UserInfoFormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default UserInfoForm;
