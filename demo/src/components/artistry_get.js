import React from 'react';
import axios from 'axios';

export default class GetData extends React.Component{
    constructor(props){
		super(props)
		this.state={
            users:[],
        
        }
        axios('http://localhost:8000/artistry')
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
            <td>Id</td>
            <td>Category</td>
            <td>Action</td>
        </tr></thead>
    <tbody>

    {props.user.map((e)=><tr>
        <td>{e.id}</td>
        <td>{e.category}</td>
        <td><button onClick={e.id} value={e.id}>Delete</button></td>
        </tr>)}
    </tbody>
    </table>)
}