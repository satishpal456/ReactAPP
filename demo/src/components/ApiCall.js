import React from 'react';
import axios from 'axios';



export default class APICall extends React.Component{
	constructor(props){
		super(props)
		this.state={
            users:[],
        
        }
        axios('https://jsonplaceholder.typicode.com/users')
        .then(result=>{console.log(result);this.setState({users:result.data});})
	}
	render(){
		return (<UserDetails user={this.state.users} />);
	}
}



const UserDetails =(props)=>{
    console.log("props",props);
    return(<table className="table" border="1">
        <thead className="bg-dark text-light"><tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
        </tr></thead>
    <tbody>
    {props.user.map((e)=><tr>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        </tr>)}
    </tbody>
    </table>)
}