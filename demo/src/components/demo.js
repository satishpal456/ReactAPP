import React from 'react';

export default class Taco extends React.Component{
	constructor(props){
	super(props)
	this.state = {brand:"satish"}
}
componentDidMount() {
    setTimeout(() => {
      this.setState({brand: "yellow"})
    }, 1000)
  }
	render(){
		return (<p>satish pal {this.state.brand}</p>);
	}
}


