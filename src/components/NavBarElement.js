import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBarElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <a href="#">{this.props.name}</a>
    )
  }
}