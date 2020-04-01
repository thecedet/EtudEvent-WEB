import React, { Component } from 'react';
import './style.css';

import Auth from '../../components/Auth'
import Nav from "../../components/nav"

function Annonce(props) {
  const days = ["Lundi","Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  const date = new Date(props.data.date)

  return (
    <div
      onClick={() => props.history.push("/annonce/"+props.data.uid)}
      className="annonce"
      style={{backgroundImage: `url(http://etudevent-api.herokuapp.com/cdn/annonce/${props.data.image || "3.jpg"})`}}
    >
      <h1>{props.data.title}</h1>
      <p>{days[date.getDay()-1]} {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</p>
    </div>
  )
}

class AnnonceMain extends Component {
  constructor(){
	  super()
    this.state = {
      annonces: []
    }
  }

  componentWillMount() {
    this.getAnnonce()
  }

  async getAnnonce(show=10, page=0) {
    const request = await fetch(`https://etud-event-api.herokuapp.com/annonce?show=${show}&page=${page}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    this.setState({annonces: this.state.annonces.concat(response.annonce)})
  }

  render() {
    return (
      <div>
        
        <Nav post={true} history={this.props.history}/>

        <div className="acontainer">
          <div className="main">
            {this.state.annonces.map((annonce, index) => <Annonce key={index} data={annonce} history={this.props.history}/>)}
          </div>
          <div className="selector"></div>
        </div>
      </div>
    )
  }
}


export default Auth(AnnonceMain)