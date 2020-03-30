import React, { Component } from 'react';
import './style.css';

import {isLogin,login} from '../../components/Auth'

class Login extends Component {
  constructor(){
		super()
    this.state = {
			password: "",
			email: ""
		}
		this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    if(isLogin()) this.props.history.replace("/")
  }

  submit() {
    let {password, email} = this.state
    if(password === "" || email === "") {
      if(!password) this.setState({errorPassword: "Il faut remplir ce gens"})
      if(!email) this.setState({errorEmail: "Il faut remplir ce gens"})
      return
    }
    login({email,password}, (error, success) => {
      if(success) this.props.history.replace("/")
      if(error) this.setState(error)
    })
  }

  render() {
    return (
			<div className="container login">
				<div className="form">
					<h1 className="text2">S'authentifier</h1>
				
					<label
            htmlFor="email"
            className={this.state.errorEmail ? "text textError" : "text"}
          >
            e-mail{this.state.errorEmail ? ": "+this.state.errorEmail : ""}
          </label>
					<input
            className={this.state.errorEmail ? "error" : ""}
            type="text"
            id="email"
            onChange={email => this.setState({email: email.target.value.trim().toLowerCase()})}
          />

					<label
            htmlFor="password"
            className={this.state.errorPassword ? "text textError" : "text"}
          >
            mot de passe{this.state.errorPassword ? ": "+this.state.errorPassword :""}
          </label>
					<input
            type="password"
            id="password"
            className={this.state.errorPassword ? "error" : ""}
            onChange={password => this.setState({password: password.target.value})}
          />

					<div className="passwordforget">
						<p>Mot de passe oublié ?</p>
					</div>
							
					<div className="boutonContainer">
						<button className="connexion" onClick={this.submit}>Connexion</button>
					</div>

					<div className="signup" onClick={() => this.props.history.replace("/register")}>
						<p>Inscription</p>
					</div>

				</div>
			</div>
    )
  }
}

export default Login;