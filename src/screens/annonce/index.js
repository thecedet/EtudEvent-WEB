import React, { Component } from 'react';
import './style.css';

import Auth,{AuthLogout} from '../../components/Auth'

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
    this.logout = this.logout.bind(this)
    this.state = {
      annonces: []
    }
  }

  componentWillMount() {
    this.getAnnonce()
  }

  logout() {
    AuthLogout()
    this.props.history.replace("/login")
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
        
        <nav>
          <div className="nohover">
            <div className="image"></div>
          </div>
          <div className="active">Annonces</div>
          <div>Forum</div>
          <div>Liens utiles</div>
          <div>Contact</div>

          <div className="right nohover">
            <div className="post" onClick={this.logout}>Poster une annonce</div>
            <div>
              <div className="image"></div>
            </div>
          </div>

        </nav>
        <nav>
          <div className="active">Annonces officielles</div>
          <div>Annonces &eacute;tudiantes</div>
          <div>Favoris</div>
        </nav>


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