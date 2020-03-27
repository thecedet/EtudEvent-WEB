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
        <p onClick={this.logout}>Deconnexion</p>
    )
  }
}

export default withAuth(Login)