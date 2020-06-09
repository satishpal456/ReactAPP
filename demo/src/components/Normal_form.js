import React from 'react';


export default class NewForm extends React.Component{
	constructor(props){
	super(props);
	this.state = {username:"",password:""}
}
onchageData = (event) =>{
	this.setState({username:event.target.value,password:event.target.value})
}
submitData = (event) =>{
	event.preventDefault();
    alert("You are submitting " + this.state.username + " You are password " + this.state.password);
}

	render(){
	return (<div> <form onSubmit={this.submitData}>
		username : <input type="text" name="" onChange={this.onchageData}/> <br/>
		password: <input type="password" name="" onChange={this.onchageData} /> <br/>
		<input type="submit" name="" value="submit" />
	</form></div>)
}
}