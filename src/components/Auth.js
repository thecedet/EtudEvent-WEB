import decode from 'jwt-decode'
import React, { Component } from 'react'

class Auth {

  constructor() {
    this.getProfile = this.getProfile.bind(this)
  }

  loggedIn() {
    const token = this.getToken() 
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return (decoded.exp < Date.now() / 1000) 
    }catch (err) {
      return false;
    }
  }

  setToken(token) {
    localStorage.setItem('id_token', token)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
  }

  getProfile() {
    return decode(this.getToken())
  }


}

export default new Auth()


export function withAuth(AuthComponent) {
  const auth = new Auth();
  return class AuthWrapped extends Component {
    constructor() {
      super()
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!auth.loggedIn()) {
        this.props.history.replace('/login')
      }else {
        try {
          const user = auth.getProfile()
          this.setState({user})
        }catch(err){
          auth.logout()
          this.props.history.replace('/login')
        }
      }
    }

    render() {
      if(this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      }else return null
    }

  }
}