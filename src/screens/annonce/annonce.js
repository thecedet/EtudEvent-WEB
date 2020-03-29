import React, { Component } from 'react';

import Auth,{withAuth} from '../../components/Auth'


class Annonce extends Component {
  constructor(props) {
    super()
    this.getAnnonce(props.match.params.uid)
    this.state = {
      annonce: ""
    }
  }
  async getAnnonce(uid) {
    const request = await fetch(`https://etud-event-api.herokuapp.com/annonce/${uid}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    this.setState({annonce: response.annonce[0]})
  }

  render() {
  	return(
      <div>
        <h1>Annonce: {this.props.match.params.uid}</h1>
        <p>{this.state.annonce.data}</p>
      </div>
    )
  }
}
export default withAuth(Annonce)