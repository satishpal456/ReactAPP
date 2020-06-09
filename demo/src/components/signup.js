import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputBase, withTheme, Typography, Button, CircularProgress, IconButton } from '@material-ui/core'
// import style_cus from '..styles/style.css'
import axios from 'axios';
// import { Typography } from '@material-ui/core';
import logo from './nature.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

export default class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      email: '',
      firstname: '',
      password: '',
    };
  }
  onchageData = (event) =>{
    this.setState({ [event.target.name]: event.target.value });
  }
  submitData = (event) =>{
    event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:8000/artistry',(this.state))
			.then(response => {
        console.log("response",response);
        swal(response.data.message, "You clicked the button!", "success");
        setTimeout(() => {
          swal.close();
        }, 3000);
			})
			.catch(error => {
				console.log(error)
			})
  }
	render(){
   
    const styles={padding:"8px",width:"30%"}
    const input_styles={padding:"3px",width:"30%",height:"60px"}
    const styles1={marginLeft:"150px",marginTop:"50px"}
		return (<div style={styles1}><br />

      <Typography variant="h6" component="h4" style={{color:"grey"}}>
      Sign Up
    </Typography>
    <br />
    <form onSubmit={this.submitData}>
      {
      /* <TextField id="standard-basic" required label="Category" name="category" onChange={this.onchageData} style={input_styles} /><br/> */}
      <TextField id="standard-basic"  required label="Username" name="category" onChange={this.onchageData} style={input_styles} /><br/>
      <TextField id="standard-basic"  required label="Email" name="email" onChange={this.onchageData} style={input_styles} /><br/>
      <TextField id="standard-basic"  required label="Firtsname" name="firstname" onChange={this.onchageData} style={input_styles} /><br/>
      <TextField id="standard-basic"  required label="Password" name="password" onChange={this.onchageData} style={input_styles} /><br/> <br />
      <Button type='submit' id="button_custom" variant="contained" color="primary" style={styles}> 
      Sign Up
      </Button>
    </form>
    <br />
    <Typography variant="h7" component="h7" style={{marginLeft:"30px"}} >
    Already have an aacount? <Link to="/login"><label style={{color:"black",color:"blue",cursor: "pointer"}}>Sign In </label>
    </Link>
    </Typography>
    <br/>
  </div>
  )
	}
}
