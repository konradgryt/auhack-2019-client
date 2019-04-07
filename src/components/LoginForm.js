import React, { Component} from "react";
import Icon from '@material-ui/core/Icon';
import axios from "axios";


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

    // fetch('http://127.0.0.1:8000', { 'contentType': 'application/json'}).then((response) => {
    //     console.log(response);
    //   })

      var payload = {
        username: this.state.username,
        password: this.state.password
       };

       axios.post("http://192.168.1.206:8000/api-token-auth/", payload)
        .then((res) => { this.props.setToken(res.data.token);
                        console.log("something");
                        this.props.nextView('DASHBOARDCONTROL') })

      //   var data = new FormData();
      //   data.append( "json", JSON.stringify( payload ) );

      //   console.log(data)
      //   fetch("http://127.0.0.1:8000/api-token-auth/",
      //   {
      //       contentType: 'application/json',
      //       method: "POST",
      //       body: JSON.stringify(payload)
      //   })
      //   .then(function(res){
      //     console.log("1")
      //     console.log(res)
      //     return res.json(); })
      //   .then(function(data){ console.log( JSON.stringify( data ) ) })

    // send login request to server
    // on response: if ack change view, else stay


  }

  render (){
    return(

        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
            <Icon>person_outlined</Icon>
            <input type="text" placeholder="email" value={this.state.value} onChange={this.handleChangeUsr} />
            </div>
            <div className="form-line">
            <Icon>lock_outlined</Icon>
            <input type="password" placeholder="password" value={this.state.value} onChange={this.handleChangePwd} />
            </div>
            <input className="submit-button" type="submit" value="submit" />
        </form>

        </div>
    )
  }
}

export default LoginForm;
