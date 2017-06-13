import React, { Component } from 'react'
import { Link } from 'react-router'

import base from '../data/base'

class Main extends Component {
  componentDidMount () {
    base.listenTo('items', {
      context: this,
      asArray: true,
      then (data) {
        this.props.getItems(data)
      }
    })
    base.onAuth((user) => this.props.login(user))
  }

  login = () => {
    base.authWithOAuthPopup('google', (error, data) => {
      if (error) return console.error(error)
      const { email, photoURL, uid, displayName } = data.user
      base.update(`users/${uid}`, {
        data : { email, photoURL, uid, displayName },
        then (err) {
          if (err) {
            return console.error(err)
          }
        }
      })
    })
  }

  render () {
    let button = null
    if (!this.props.user.uid) {
      button = <LoginButton onClick={() => this.login()} />
    } else {
      button = <LogoutButton onClick={() => this.props.logout()} />
    }
    return (
      <div>
        <nav>
          <Link to='/'>HOME</Link>
          {button}
        </nav>
        <h1>
                    BoilerPlate
                </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
            Login
        </button>
  )
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
            Logout
        </button>
  )
}

export default Main
