import React, { Component } from 'react'
import './random-planet.css';

export default class randomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron round">
        <img className="planet-image" src="https://starwars-visualguide.com/assets/img/planets/9.jpg" alt="planet"></img>
      </div>
    )
  }
}
