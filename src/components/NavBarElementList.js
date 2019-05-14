import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBarElementList extends Component {
  static propTypes = {
    side: PropTypes.string.isRequired,
    elements: PropTypes.array.isRequired
  }

  render() {
    var listItems = this.props.elements.map((element, i) => <li><a href="/">{element}</a></li>);

    return (
      <div className="nav" id={this.props.side}>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}