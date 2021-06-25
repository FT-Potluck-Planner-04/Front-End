import React, { useState} from "react";
import "../App.css";
import { useHistory } from 'react-router'
import axios from 'axios'
const initialValues = {
    name:"",
    email:"",
    password:""
};
const Register = ()=> {
    const { push } = useHistory();
    const [values, setFormValues] = useState(initialValues);
const handleChange = (e) => {

    setFormValues({...values, [e.target.name]: e.target.value})
  }
 const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.put("https:potluck-planner-back-end.herokuapp.com/api/auth/register",values)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            push("/Login")
           
        })
        .catch(err => {
            console.log(err)
        })
     }
    return(
        <div className="container">
            <div className="wrapper">
            <div>
            <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
            <div className="name">
            <label className="label">Username</label>
            <input className="input" 
            type="type"
            name="name"
            value={values.name}
            onChange={handleChange}
            />
             </div>

        <div className="email">
             <label className="label">Email</label>
             <input className="input"
              type="type"
              name="email"
              value={values.email}
              onChange={handleChange}
               />
             </div>

             <div className="password">
             <label className="label">Password</label>
             <input className="input"
              type="type" 
              name="password" 
              value={values.password} 
              onChange={handleChange}
              />
             </div> 
             <div>
                 <button className="submitBtn" onSubmit={handleFormSubmit}>
                     Register
                 </button>
             </div>
           </form>
        </div>
        </div>
    )
}
export default Register;