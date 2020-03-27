import React, { Component } from 'react';
import './style.css';

import Auth from '../../components/Auth'

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
    if(Auth.loggedIn()) this.props.history.replace("/")
  }

	async submit() {
		let {password, email} = this.state

		if(password === "" || email === "") {
			alert("il faut tout mettre un truc")
			return
		}

		const request = await fetch("https://etud-event-api.herokuapp.com/account/connect", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
		const response = await request.json()
		if(response.result !== "OK") {
			alert("il y a une erreur")
		}else {
      Auth.setToken(response.token)
      this.props.history.replace("/")
		}

	}

  render() {
    return (
			<div className="container login">
				<div className="form">
					<h1 className="text2">S'authentifier</h1>
				
					<label htmlFor="email" className="text">E-MAIL</label>
					<input type="text" id="email" onChange={email => this.setState({email: email.target.value.trim().toLowerCase()})}/>

					<label htmlFor="password" className="text">MOT DE PASSE</label>
					<input type="password" id="password" onChange={password => this.setState({password: password.target.value})}/>

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