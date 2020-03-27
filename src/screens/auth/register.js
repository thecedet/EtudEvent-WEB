import React, { Component } from 'react';
import './style.css';

export default class Register extends Component {
    constructor() {
        super()
    }

  render() {
  	return(
    	<div className="container register">
				<div className="form">
					<h1 className="text2">S'inscrire</h1>

					<label htmlFor="email" className="text">E-MAIL</label>
					<input type="text" name="email" id="email"/>

					<label htmlFor="password" className="text">MOT DE PASSE</label>
					<input type="password" name="password" id="password"/>

					<label htmlFor="cpassword" className="text">CONFIRMER LE MOT DE PASSE</label>
					<input type="password" name="password" id="cpassword"/>
						
					<label htmlFor="select" className="text">DÉPARTEMENT</label>
					<select id="select" name="dep">
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
						<button className="connexion">Connexion</button>
					</div>

					<div className="signup" onClick={() => this.props.history.replace("/login")}><p>Connexion</p></div>
				</div>
			</div>
    )
  }
}
