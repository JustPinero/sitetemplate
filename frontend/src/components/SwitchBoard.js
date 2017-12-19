import axios from 'axios';
import React from 'react';
import App from '../App';

export default class Switchboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  componentDidMount(){
    axios.get('http://localhost:8081/')
    .then((response)=>{
      console.log("I am working here is my state butt burger", response.data);
      this.setState(response.data);
    })
    .catch(err=>console.log(err));
  }
  render(){
    return(
      <App/>
    );
  }
}
