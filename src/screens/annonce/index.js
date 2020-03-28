import React, { Component } from 'react';
import './style.css';

import Auth,{withAuth} from '../../components/Auth'

class Login extends Component {
  constructor(){
	  super()
    this.logout = this.logout.bind(this)
  }

  logout() {
    console.log(this.props.user)
    Auth.logout()
    this.props.history.replace("/login")
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nohover">
            <div className="image"></div>
          </div>
          <div>Annonces</div>
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
      </div>
    )
  }
}

export default withAuth(Login)