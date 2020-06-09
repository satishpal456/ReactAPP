import React from 'react';
import Styles from '../styles/style.css';

export default class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {username:"demo",name:"test"}
	}
	mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
	myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
	render(){
		const styles = {
			color:"white",
			backgroundColor: "DodgerBlue",
		}
		if (this.state.username=="satish"){
		console.log(this.state.username)
		return <div>
		<h1 style={styles.big}>name : {this.state.username} </h1>
		<form onSubmit={this.mySubmitHandler}>
			username:<input type="text" onChange={this.myChangeHandler}/>
			<input type='submit'/>
			</form>
			</div>;
	}
	else{
		return <div>
		<h1>name : "please select satish" </h1>
		<form>
			username:<input type="text" onChange={this.myChangeHandler}/>
			</form>
			</div>;
	}
			
	}
}

