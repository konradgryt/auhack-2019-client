import React, { Component} from "react";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: '',
                  isBimodal: '',
                  nextWork: ''
                };
    this.handleChangeUsr = this.handleChangeUsr.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChangeUsr(event) {
    this.setState({username: event.target.value});
  }
 
  handleChangePwd(event) {
    this.setState({password: event.target.value});
  }
 
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.username + this.state.password);
    event.preventDefault();
    // send login request to server
    // on response: if ack change view, else stay
    
    this.props.nextView('DASHBOARDCONTROL');
  }
  
  render (){
    return(

        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" placeholder="enter email here..." value={this.state.value} onChange={this.handleChangeUsr} />
            </label>
            <label>
              Password:
              <input type="password" placeholder="enter password here..." value={this.state.value} onChange={this.handleChangePwd} />
            </label>
            <input type="submit" value="submit" />
        </form>
        
        </div>
    )
  }
}

export default LoginForm;
