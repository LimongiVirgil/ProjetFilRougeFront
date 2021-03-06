import React from 'react';
import Visual from '../../atoms/Visual/index';
import SecondaryButton from '../../atoms/SecondaryButton/secondaryButton'
import './styles.scss'

export default class TextImage extends React.Component {
  
  render() {
    return (
      <div className={["textImage", this.props.position].join(" ")}>
        <img className="backgroundDots" src="./data/dotsBackground.png" alt="background dots"></img>
        <Visual img={this.props.img} alt={this.props.alt}/>
        <h2 dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
        <p dangerouslySetInnerHTML={{__html:this.props.text}}></p>
        <SecondaryButton text={this.props.buttonText} img={this.props.buttonImg} outside={this.props.outside}/>
      </div>
    )
  }
}