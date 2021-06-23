import React, { useState} from "react";
import "../App.css";
const Register = ()=> {
    const [values, setFormValues] = useState({
    name:"",
    email:"",
    password:""
});
const handleChange = (e) => {

    setFormValues({...values, [e.target.name]: e.target.value})
  }
 const handleFormSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div className="container">
            <div className="wrapper">
            <div>
            <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
            <div className="name">
            <label className="label">Full Name</label>
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
                 <button className="submitBtn" onClick={handleFormSubmit}>
                     Register
                 </button>
             </div>
           </form>
        </div>
        </div>
    )
}
export default Register;