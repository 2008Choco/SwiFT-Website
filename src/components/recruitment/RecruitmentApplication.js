import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RecruitmentApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: false
    }
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    banner: PropTypes.object.isRequired
  }

  render() {
    return (
      <div class="application-window">
        <img src={this.props.banner} alt="banner"/>
        <p>{this.props.name.toUpperCase()}</p>
        <button disabled={this.state.closed}>Apply</button>
      </div>
    )
  }
}
