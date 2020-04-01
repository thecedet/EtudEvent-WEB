import React, { Component } from "react"
import ReactHtmlParser from 'react-html-parser';

import "./post.css"
import "../../components/post/checked.css"
import Nav from "../../components/nav"
import Clock from "../../components/post/clock"
import Notification from "../../components/post/notification"

import Auth from '../../components/Auth'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      data: ""
    }
  }
  render() {
    return(
      <div className="scrollContainer">
        <Nav history={this.props.history}/>
        <div className="postContainer">
          <div className="edit">
            <h1>Poster une annonce</h1>
            <div className="box">

              <h2>description</h2>

              <label htmlFor="title">titre</label>
              <input type="text" id="title" placeholder="Titre annonce"/>

              <label htmlFor="description">annonce</label>
              <div id="editor" onInput={event => this.setState({data:event.target.innerHTML})} contentEditable={true}></div>
              <fieldset>
                <button className="fontStyle" onClick={() => document.execCommand('italic',false,null)}>
                  <i>I</i>
                </button>
                <button className="fontStyle" onClick={() => document.execCommand( 'bold',false,null)}>
                  <b>B</b>
                </button>
                <button className="fontStyle" onClick={() => document.execCommand('underline',false,null)}>
                  <u>U</u>
                </button>
              </fieldset>

              <div className="widgetContainer">
                <h2>Widget</h2>
                <Clock />
                <Notification />
              </div>
            </div>
          </div>

          <div className="apercu">
            <h1>Aperçu</h1>
            <div className="box render">
              {ReactHtmlParser(this.state.data)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth(Post)