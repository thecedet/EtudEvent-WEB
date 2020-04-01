import React,{Component} from "react"

import "./style.css"
import {AuthLogout} from "../Auth"


export default class Nav extends Component{
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout() {
    AuthLogout()
    this.props.history.replace("/login")
  }

  render() {
    return(
      <>
        <nav>
          <div className="nohover">
            <div className="image"></div>
          </div>
          <div className="active" onClick={() => this.props.history.push("/")}>Annonces</div>
          <div>Forum</div>
          <div>Liens utiles</div>
          <div>Contact</div>

          <div className="right nohover">
            {this.props.post ? <div className="post" onClick={() => this.props.history.push("/annonce/post")}>Poster une annonce</div> : null}
            <div>
              <div className="image" onClick={this.logout}></div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="active">Annonces officielles</div>
          <div>Annonces &eacute;tudiantes</div>
          <div>Favoris</div>
        </nav>
      </>
    )
  }
}