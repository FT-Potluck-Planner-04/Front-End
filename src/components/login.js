import axios from 'axios';
import React, {  useState } from "react";
import { useHistory } from 'react-router'

const initialValues = { username:"", password:""};

const Login = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const { push } = useHistory();
    const handleChange = (e) => {

        setFormValues({...formValues, [e.target.name]: e.target.value})
    
 }
 const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https:potluck-planner-back-end.herokuapp.com/api/auth/login",formValues)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
        push("/pots")
    })
    .catch(err => {
        console.log(err)
    })
 }
    

 return(
     <div className="login-form">
         <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className="username"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            />
        
        <label htmlFor="password">Password</label>
            <input className="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            />
            <button>Login</button>
         </form>
     </div>
 );
}
 export default Login;