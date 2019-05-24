import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

export default class NavBarElementList extends Component {
  static propTypes = {
    side: PropTypes.string.isRequired,
    elements: PropTypes.array.isRequired
  }

  render() {
    var listItems = this.props.elements.map((element, i) => <li key={element}><NavLink to={element.toLowerCase()}>{element}</NavLink></li>);

    return (
      <div className="nav" id={this.props.side}>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}
