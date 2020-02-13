import React from 'react';
import { Link } from 'react-router-dom';
import './secondaryButton.scss'

export default class SecondaryButton extends React.Component {
  
  render() {
    return (
      <Link to="participate" style={{ textDecoration: 'none' }}>
        <div className="secondaryButton"> 
          <div className="buttonContainer">
            <span className="text">{this.props.text}</span>
            <img src={this.props.img} alt="arrow right"></img>
          </div>   
        </div>
      </Link>
    )
  }
}