import React, { Component } from 'react'

class Item extends Component {
  render () {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default Item
