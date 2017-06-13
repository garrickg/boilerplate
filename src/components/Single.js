import React, { Component } from 'react'
import Item from './Item'

import base from '../data/base'

class Single extends Component {
  handleEdit = (e) => {
    e.preventDefault()
    const key = this.props.params.itemId
    const data = {
      text: e.target.querySelector('input').value
    }
    base.update(`items/${key}`, {
      data,
      then (err) {
        if (err) {
          return console.error(err)
        }
      }
    })
  }

  handleDelete =  (e) => {
    e.preventDefault()
    const key = this.props.params.itemId
    base.remove(`items/${key}`, (err) => {
      if (!err) {
        this.props.history.push('/')
      }
    })
  }

  render () {
    const i = this.props.items.findIndex(item => item.itemId === this.props.params.itemId)
    const item = this.props.items[i]
    let edit = null
    let del = null
    if (item) {
      if (this.props.user.uid) {
        edit = <EditItem onSubmit={this.handleEdit} text={item.text} />
      }
      if (this.props.user.uid === item.owner.uid) {
        del = <DeleteItem onClick={this.handleDelete} />
      }
    }
    return (
      <div>
        <h1>
          <Item {...item} />
        </h1>
        {edit}
        {del}
      </div>
    )
  }
}

Single.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function EditItem (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='text' defaultValue={props.text} />
      <input type='submit' value='Edit Item' />
    </form>
  )
}

function DeleteItem (props) {
  return (
    <button onClick={props.onClick}>Delete Item</button>
  )
}

export default Single
