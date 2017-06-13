import React, { Component } from 'react'
import { Link } from 'react-router'
import shortId from 'shortid'
import moment from 'moment'
import Item from './Item'

import base from '../data/base'

class ItemGrid extends Component {
  handleSubmit =  (e) => {
    e.preventDefault()
    const key = shortId.generate()
    const {uid, photoURL, userName} = this.props.user
    const data = {
      itemId: key,
      text: e.target.querySelector('input').value,
      date: moment().format(),
      owner: {
        uid,
        photoURL,
        userName
      }
    }
    base.update(`items/${key}`, {
      data,
      then (err) {
        if (err) {
          return console.error(err)
        }
      }
    })
    e.target.reset()
  }

  render () {
    let input = null
    if (this.props.user.uid) {
      input = <InputForm onSubmit={this.handleSubmit} />
    }
    return (
      <div>
        {Object
                .keys(this.props.items)
                .sort((a, b) => {
                  const first = this.props.items[a]
                  const second = this.props.items[b]
                  return moment(first.date).isAfter(second.date) ? 1 : -1
                })
                .map(key => {
                  let item = this.props.items[key]
                  return (
                    <Link key={key} to={`/view/${item.itemId}`}>
                      <Item {...item} />
                    </Link>
                  )
                })}
        {input}
      </div>
    )
  }
}

function InputForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='text' placeholder='Add Comment...' />
      <input type='submit' />
    </form>
  )
}

export default ItemGrid
