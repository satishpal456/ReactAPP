import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputBase, withTheme, Typography, Button, CircularProgress, IconButton } from '@material-ui/core'
// import style_cus from '..styles/style.css'
import axios from 'axios';
// import { Typography } from '@material-ui/core';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: '',
			title: '',
			name: ''
    };
  }
  onchageData = (event) =>{
    this.setState({ [event.target.name]: event.target.value });
  }
  submitData = (event) =>{
    event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:8000/artistry/', this.state)
			.then(response => {
				console.log("response",response)
			})
			.catch(error => {
				console.log(error)
			})
  }
	render(){
   
    const styles={padding:"5px",width:"60%"}
    const columns = {float: "left",width: "40%",padding: "10px",height: "300px"}
    const input_styles={padding:"5px",width:"60%"}
    const styles1={marginLeft:"100px",marginTop:"150px",}
		return (
    <div style={styles1}>
      <div style={columns}>
        <Typography variant="h6" component="h4" style={{color:"grey"}}>
          Sign In
      </Typography><br />
  <form onSubmit={this.submitData}>
      {/* <TextField id="standard-basic" required label="Category" name="category" onChange={this.onchageData} style={input_styles} /><br/> */}
      <TextField id="standard-basic" required label="Username" name="userId" onChange={this.onchageData} style={input_styles} /><br/>
      <TextField id="standard-basic" required label="Password" name="body" onChange={this.onchageData} style={input_styles} /><br/> <br />
      <Button type='submit' id="button_custom" variant="contained" color="primary" style={styles}> 
      Login
      </Button><br /> <br />
      <Typography variant="h7" component="h7" style={{marginLeft:"30px"}} >
    Don't have an aacount? <Link to="/signup"><label style={{color:"black",color:"blue",cursor: "pointer"}}>Sign Up </label>
    </Link>
    </Typography>
    </form>
    </div>
    <div style={columns}>
    <img src="https://www.plm.automation.siemens.com/media/global/de/Product%20Lightbulb%20Image_tcm53-57534.jpg" style={{height:"610px",marginTop:"-160px",width:"740px"}} />
    </div>
    <br />
    <br /></div>)
	}
}