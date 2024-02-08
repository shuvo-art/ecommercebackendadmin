import React, { useContext } from "react";
import "./LoginSignup.css"
import { AdminContext } from "../../Context/AdminContext"

const LoginSignup = () => {

 // Get the isVerified value from the AdminContext
    const { updateIsVerified } = useContext(AdminContext);
    const [state, setState] = React.useState("Login");
    const [formData, setFormData] = React.useState({
        username: "", 
        email: "", 
        password: ""
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const login = async () => {
        console.log("Login", formData);
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            updateIsVerified(true); // Set the isVerified value to true
            console.log("User Registered Successfully");
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/addproduct");
        }
        else {
            alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log("Signup", formData);
        let responseData;
        await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            updateIsVerified(true); // Set the isVerified value to true
            console.log("User Registered Successfully");
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.message)
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick={() => {state==="Login" ? login() : signup()}}>Continue</button>

                {state === "Sign Up" 
                ? <p className="loginsignup-login">Already have an account?<span onClick={() => {setState("Login")}}>Login here</span></p> 
                : <p className="loginsignup-login">Create an account?<span onClick={() => {setState("Sign Up")}}>Click here</span></p>}
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the Terms and Conditions.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup