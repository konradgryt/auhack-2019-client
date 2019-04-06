import React, { Component} from "react";
import LoginForm from "./LoginForm.js";

class Login extends React.Component {
    
  render (){
    return(
        <div >
        <img className="login-image" src="https://i.ibb.co/YWncyJ9/Raspberry.png" alt="Rapsberry Pie"/>
        <LoginForm />
        </div>
    )
  }
}

export default Login;
