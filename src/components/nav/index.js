import React from "react"

import "./style.css"

export default function Nav(props) {
  return(
    <>
      <nav>
        <div className="nohover">
          <div className="image"></div>
        </div>
        <div className="active">Annonces</div>
        <div>Forum</div>
        <div>Liens utiles</div>
        <div>Contact</div>

        <div className="right nohover">
          <div className="post" onClick={props.post}>Poster une annonce</div>
          <div>
            <div className="image" onClick={props.logout}></div>
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