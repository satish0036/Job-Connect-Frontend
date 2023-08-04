import { useState } from "react";
import "./JobProviderForm.css";
import JobProviderFormInput from "./JobProviderFormInput.js"
import { useSelector ,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BASE_URL } from "../helper.js";
import { useRef } from 'react';
import { addNewJob } from "../../all-redux/features/job-data-slice/JobDataSlice";
const JobProviderForm = () => {
    const userData = useSelector((state) => state.newLocalStoreData)
    const [values, setValues] = useState({
        companyName: "",
        companyWebsite: "",
        jobLink: "",
        jobTitle: "",
        jobDescription: "",
        qualification: "",
        experianceLevel: "",
        employmentType: "",
        salary: "",
        contactPerson: "",
        contactEmail: "",
        contactPhoneNumber: "",
        applicationDeadline: "",
        interviewSchedule: "",
        expectedStartDate: "",
        companyCulture: "",
        benifitAndPerks: "",
        oppertunityForGrowth: "",
        uid: userData.id,
    });

    const inputs = [
        {
            id: 1,
            name: "companyName",
            type: "text",
            placeholder: "Company Name",
            errorMessage:
                "Enter Valid Company Name!",
            label: "Company Name",
            pattern: "^[A-Za-z0-9!@# $%^&*]{3,50}$",
            required: true,
        },
        {
            id: 2,
            name: "companyWebsite",
            type: "text",
            placeholder: "Company Website",
            errorMessage:
                "Enter Valid Company Website!",
            label: "Company Website",
            // pattern: "^{3,500}$",
            required: true,
        },
        {
            id: 19,
            name: "jobLink",
            type: "text",
            placeholder: "Job Link",
            errorMessage:
                "Enter Valid Job Link!",
            label: "Job Link",
            // pattern: "^{3,500}$",
            required: true,
        },
        {
            id: 3,
            name: "jobTitle",
            type: "text",
            placeholder: "JobTitle",
            errorMessage:
                "Please Enter Job Title",
            label: "JobTitle",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            required: true,
        },
        {
            id: 4,
            name: "jobDescription",
            type: "text",
            placeholder: "Job Description",
            errorMessage:
                "Please Enter Job Description!",
            label: "Job Description",
            // pattern: "^[A-Za-z0-9!@ #$%^&*]{3,999}$",
            // required: true,
        },
        {
            id: 5,
            name: "qualification",
            type: "text",
            placeholder: "Qualification",
            errorMessage:
                "Hiring for which Qualification ",
            label: "Qualification",
            // pattern: "^[A-Za-z0-9!@# $%^&*]{3,196}$",
            required: true,
        },
        {
            id: 6,
            name: "experianceLevel",
            type: "text",
            placeholder: "Experiance Level",
            errorMessage:
                "Hiring for which Experiance Level!",
            label: "Experiance Level",
            // pattern: "^[A-Za-z0-9!@#$% ^&*]{3,196}$",
            // required: true,
        },
        {
            id: 7,
            name: "employmentType",
            type: "text",
            placeholder: "Employment Type",
            errorMessage:
                "Employment Type Required",
            label: "Employment Type",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            // required: true,
        },
        {
            id: 8,
            name: "salary",
            type: "text",
            placeholder: "Salary",
            errorMessage:
                "It should grater than two digit",
            label: "Salary",
            // pattern: "^[A-Za-z0-9. $]{3,196}$",
            // required: true,
        },
        {
            id: 9,
            name: "contactPerson",
            type: "text",
            placeholder: "Contact Person",
            errorMessage:
                "It should be valid Contact Persion!",
            label: "Contact Person",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{3,196}$",
            // required: true,
        },
        {
            id: 10,
            name: "contactEmail",
            type: "email",
            placeholder: "Contact Email",
            errorMessage:
                "It should be a valid Contact Email!",
            label: "Contact Email",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 11,
            name: "contactPhoneNumber",
            type: "text",
            placeholder: "Contact Phone Number",
            errorMessage:
                "It should be a valid Contact Phone Number!",
            label: "Contact Phone Number",
            pattern: "^[0-9]{10,10}$",
            // required: true,
        },
        {
            id: 12,
            name: "applicationDeadline",
            type: "date",
            placeholder: "Application DeadLine",
            errorMessage:
                "Not to say or valid Application DeadLine!",
            label: "Application DeadLine",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 13,
            name: "interviewSchedule",
            type: "date",
            placeholder: "Interview Schedule",
            errorMessage:
                "Interview Schedule!",
            label: "Interview Schedule",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 14,
            name: "expectedStartDate",
            type: "date",
            placeholder: "Expacted Start Date",
            errorMessage:
                "Expacted Start Date!",
            label: "Expacted Start Date",
            // pattern: "^[A-Za-z0-9]{3,196}$",
            // required: true,
        },
        {
            id: 15,
            name: "companyCulture",
            type: "text",
            placeholder: "Company Culture",
            errorMessage:
                "Either No or Minimum 50 Letter Required!",
            label: "Company Culture",
            // pattern: "^[A-Za-z0-9!@# ,.$%^&*]{50,1000}$",
            // required: true,
        },
        {
            id: 16,
            name: "benifitAndPerks",
            type: "text",
            placeholder: "Benifit And Perks",
            errorMessage:
                "Either No or Minimum 50 Letter Required!",
            label: "Benifit And Perks",
            // pattern: "^[A-Za-z0-9!@.,;#$ %^&*]{50,1000}$",
            // required: true,
        },
        {
            id: 17,
            name: "oppertunityForGrowth",
            type: "text",
            placeholder: "Oppertunity For Growth",
            errorMessage:
                "Either No or Minimum 50 Letter Required!",
            label: "Oppertunity For Growth",
            // pattern: "^[A-Za-z0-9!@#$ %^&*]{50,1000}$",
            // required: true,
        },

    ];
    const dispatch=useDispatch()
    const navigate = useNavigate()
    // const name = useSelector((state) => state.newData)
    // console.log(name)

    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Get the form element using the ref
        const formElement = formRef.current;
        // Reset the form to its initial state
        formElement.reset();
        try {
            await axios.post(`${BASE_URL}/api/post/addJob`, values)
            dispatch(addNewJob(values))
            navigate("/profile")
        }
        catch (err) {
            console.log(err)
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="JobProviderForm">
            <form onSubmit={handleSubmit} ref={formRef} >
                <h1>Job provider form</h1>
                <div>Fill the form to post jobs and find the right candidates.</div>
                {inputs.map((input) => (
                    <JobProviderFormInput
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

export default JobProviderForm;
