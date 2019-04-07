import React, { Component} from "react";
import Icon from '@material-ui/core/Icon';


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
            <div>
            <Icon>person</Icon>
            <input type="text" placeholder="email" value={this.state.value} onChange={this.handleChangeUsr} />
            </div>
            <div>
            <Icon>lock</Icon>
            <input type="password" placeholder="password" value={this.state.value} onChange={this.handleChangePwd} />
            <Icon>visibility_off</Icon>
            </div>
            <input className="submit-button" type="submit" value="submit" />
        </form>
        
        </div>
    )
  }
}

export default LoginForm;
