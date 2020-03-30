import React, { Component } from 'react';
import './style.css';

import {isLogin,register} from '../../components/Auth'

export default class Register extends Component {

  constructor(){
		super()
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      department: "R&T"
		}
		this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    if(isLogin()) this.props.history.replace("/")
  }

  submit() {
    console.log("click")
    let {email, password, cpassword, department} = this.state
    if(email === "" || password === "" || cpassword === "") {
      if(!password) this.setState({errorPassword: "Il faut remplir ce gens"})
      if(!cpassword) this.setState({errorCPassword: "Il faut remplir ce gens"})
      if(!email) this.setState({errorEmail: "Il faut remplir ce gens"})
      return
    }
    console.log("oui")
    if(password !== cpassword) {
      this.setState({errorCPassword: "Pas identique"})
      return
    }
    console.log("oui")
    register({email, password, department}, (error,success) => {
      if(success) this.props.history.replace("/login")
      if(error) this.setState(error)
    })
  }

  render() {
  	return(
    	<div className="container register">
				<div className="form">
					<h1 className="text2">S'inscrire</h1>

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
            mot de passe{this.state.errorPassword ? ": "+this.state.errorPassword : ""}
          </label>
					<input
            type="password" 
            id="password"
            onChange={password => this.setState({password: password.target.value})}
          />

					<label
            htmlFor="cpassword"
            className={this.state.errorCPassword ? "text textError" : "text"}
          >
            confirmer le mot de passe{this.state.errorCPassword ? ": "+this.state.errorCPassword : ""}
          </label>
					<input
            type="password"
            id="cpassword"
            onChange={cpassword => this.setState({cpassword: cpassword.target.value})}
          />
						
					<label htmlFor="select" className="text">département</label>
					<select id="select" name="dep" onChange={department => this.setState({department: department.target.value})}>
						<option value="R&amp;T">Réseaux et télécommunications</option>
						<option value="GB">Génie biologique</option>
						<option value="GCGP">Génie chimique - Génie des procédés</option>
						<option value="GCCD">Génie civil - Construction durable</option>
						<option value="GEII">Génie électrique et inhtmlFormatique industrielle</option>
						<option value="GMP">Génie mécanique et productique</option>
						<option value="QLIO">Qualité, logistique industrielle et organisation</option>
					</select>
							
					<div className="passwordforget"><p>Mot de passe oublié ?</p></div>
							
					<div className="boutonContainer">
						<button className="connexion" onClick={this.submit}>Connexion</button>
					</div>

					<div className="signup" onClick={() => this.props.history.replace("/login")}><p>Connexion</p></div>
				</div>
			</div>
    )
  }
}
