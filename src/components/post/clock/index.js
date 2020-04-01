import React from "react"

import "./style.css"

import Auth from "../../Auth"

function Clock() {
  return(
    <section>
      <div className="checkbox">
        <input type="checkbox" id="inputClock"/>
        <label htmlFor="inputClock">Horloge</label>
      </div>
      
      <div className="clockContainer">
        <div className="clock">
          <div id='valueClock' suppressContentEditableWarning="true">24</div>
          <p>Jours</p>
          
          <svg className="svg" x="0px" y="0px" viewBox="0 0 230 230" width="120" height="120">
            <path fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" d="M115,5c60.8,0,110,49.2,110,110s-49.2,110-110,110S5,175.8,5,115S54.2,5,115,5" strokeDasharray="691"></path>
          </svg>
          <svg style={{stroke:"#858c99"}} x="0px" y="0px" viewBox="0 0 230 230" width="120" height="120">
            <path fill="none" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M115,5c60.8,0,110,49.2,110,110s-49.2,110-110,110S5,175.8,5,115S54.2,5,115,5"></path>
          </svg>

        </div>
        
        <div className="clock">
          <div id='valueClock' suppressContentEditableWarning="true">24:50</div>
          <p>Minutes</p>
          <svg className="svg" x="0px" y="0px" viewBox="0 0 230 230" width="120" height="120">
            <path fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" d="M115,5c60.8,0,110,49.2,110,110s-49.2,110-110,110S5,175.8,5,115S54.2,5,115,5" strokeDasharray="691"></path>
          </svg>
          <svg style={{stroke:"#858c99"}} x="0px" y="0px" viewBox="0 0 230 230" width="120" height="120">
            <path fill="none" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M115,5c60.8,0,110,49.2,110,110s-49.2,110-110,110S5,175.8,5,115S54.2,5,115,5"></path>
          </svg>
        </div>
      </div>
    </section>     
  )
}
export default Auth(Clock,"ANNONCE.WIDGET.CLOCK")