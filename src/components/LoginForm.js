import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    console.log('handleInputChange was hit');
    const field = event.target.name;
    console.log(event.target);
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0){
      const formData = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.handleLogin(formData);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={(event) => this.handleInputChange(event)}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
