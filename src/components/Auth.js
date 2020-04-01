import decode from 'jwt-decode'
import React, { Component } from 'react'

export function register({email, password, department}, callback) {
  fetch("https://etud-event-api.herokuapp.com/account/create", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, department})
  }).then(response => response.json().then(result => {
    switch(result.result) {
      case "ERR_ARGS":
        callback({
          errorEmail: "Il faut remplir ce gens",
          errorPassword: "Il faut remplir ce gens"
        })
        break
      case "ERR_MAIL_NO_CONFORM":
        callback({
          errorEmail: "Adresse universitaire seulement"
        })
        break
      case "ERR_EMAIL_EXIST":
        callback({
          errorEmail: "L'addresse mail existe déjà"
        })
        return
      case "OK":
        callback(undefined, true)
        break
      default:
        callback({
          errorEmail: "Erreur interne, veillez recommencez",
          errorPassword: "Erreur interne, veillez recommencez"
        })
    }
  }).catch())
}

export function login({email,password},callback) {
  fetch("https://etud-event-api.herokuapp.com/account/connect", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,password})
  }).then(response => response.json().then(result => {
    console.log(result)
    switch(result.result) {
      case "ERR_ARGS":
        callback({
          errorEmail: "Il faut remplir ce gens",
          errorPassword: "Il faut remplir ce gens"
        })
        break
      case "ERR_BDD":
        callback({
          errorEmail: "Erreur interne, veillez recommencez",
          errorPassword: "Erreur interne, veillez recommencez"
        })
        break
      case "ERR_INFO":
        callback({
          errorEmail: "Adresse universitaire seulement ou partie avant le @",
        })
        break
      case "ERR_INVALID_INFO":
        callback({
          errorEmail: "Information invalide",
          errorPassword: "Information invalide"
        })
        break
      case "ERR_CHECKED":
        callback({
          errorEmail: "Le compte n'a pas été verifié",
        })
        break
      case "OK":
        setToken(result.token)
        callback(undefined, true)
        break
      default: 
        callback({
          errorEmail: "Erreur interne, veillez recommencez",
          errorPassword: "Erreur interne, veillez recommencez"
        })
    }
  }).catch())
}


export function isLogin() {
  const token = getToken() 
  return !!token && !isTokenExpired(token)
}

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    return (decoded.exp < Date.now() / 1000) 
  }catch (err) {
    return false;
  }
}

function setToken(token) {
  localStorage.setItem('id_token', token)
}

function getToken() {
  return localStorage.getItem('id_token')
}

export function AuthLogout() {
  localStorage.removeItem('id_token')
}

function getProfile() {
  return decode(getToken())
}


export default function Auth(AuthComponent, permission) {

  return class AuthWrapped extends Component {
    constructor() {
      super()
      this.state = {
        ok: null
      }
    }

    componentWillMount() {
      if (!isLogin()) {
        this.props.history.replace('/login')
      }else {

        if(permission) {
          if(getProfile().data.permissions.includes(permission)) {
            this.setState({ok: true})
          }
        }else this.setState({ok: true})

      }
    }

    render() {
      if(this.state.ok) {
        return (
          <AuthComponent {...this.props} />
        )
      }else return null
    }

  }
}