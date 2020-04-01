import React from "react"

import Auth from "../Auth"

function notification() {
  return(
    <section>
      <div className="checkbox">
        <input type="checkbox" id="inputNotification"/>
        <label htmlFor="inputNotification">Notification</label>
      </div>
    </section>
  )
}

export default Auth(notification, "NOTIFICATION.SEND")