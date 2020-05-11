import React, { Component } from 'react'

import './style.css';

export default class dashboard extends Component {
  constructor() {
    super()
    this.state = {
      modale: false,
      users: []
    }
  }

  componentWillMount() {
    this.getUser()
  }

  async getUser() {
    const request = await fetch(`https://etud-event-api.herokuapp.com/account/list`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    this.setState({users: response.result})
  }

  

  render() {
    return (
    <div className="main">
          <nav>Etud'Event - Dashboard</nav>
      
          <div>
              <section>
                  <header>
                      <h1>Utilisateur</h1>
                      <h2><span>{this.state.users.length}</span> inscrits</h2>
                  </header>
                  <div className="container_dashboard">
                  {this.state.users.map((user, index) => (
                    <div key={index} onClick={() => this.setState({modale: user.uid})}>
                      <span>{user.firstName} {user.lastName}</span>
                    </div>
                  ))}
                  </div>
              </section>

              <section>
                  <header>
                      <h1>Annonces</h1>
                      <h2><span>126</span> annonces</h2>
                  </header>
                  <div>
                      <span>Clément DORLET</span>
                  </div>
              </section>

              <section className="container_dashboard">
                  <section className="container_dashboard row">
                      <section id="status">
                          <header>
                              <h1>Status</h1>
                          </header>
                          <p className="disconnect">Web</p>
                          <p>BDD</p>
                          <p>API</p>
                      </section>
                      <section>
                          <header>
                              <h1>Vide</h1>
                          </header>
                      </section>
                  </section>
                  <section>
                      <header>
                          <h1>Logs</h1>
                      </header>
                      Ici tu mets les logs
                  </section>
              </section>

          </div>

          {this.state.modale ? <Modal uid={this.state.modale} disable={() => this.setState({modale: false})}/> : null}

      </div>
    )
  }
}


class Modal extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.getUser()
  }

  async getUser() {
    const request = await fetch(`https://etud-event-api.herokuapp.com/account/list/${this.props.uid}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const response = await request.json()
    this.setState({data: response.result[0]})
  }

  render() {
    return(
                  <div id="userModal" onClick={this.props.disable}>
            <div>
                <header className="nobody">
                    <div>
                        <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                        <p>{this.state.data.email}</p>
                    </div>
                    <div className="button">supprimer le compte</div>
                </header>
                <div>
                    <div className="info">
                        <h1>Informations</h1>
                        checked: {this.state.data.checked == 1 ? "OUI" : "NON"}
                    </div>
                    <div className="permissions">
                        <h1>Permissions</h1>
                        <div>
                            <div className="checkbox">
                                <input type="checkbox" id="1"/>
                                <label htmlFor="1">Notification</label>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="nobody">
                    <div className="button">valider</div>
                </footer>
            </div>
        </div>
    )
  }
}
