import axios from 'axios';
import React from 'react';
import App from '../App';
import Home from './Home';
import Contact from './Contact';

export default class Switchboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  componentDidMount(){
    /*
      Use this section for testing various states,
      while there is no admin panel and while state only
      persists in memory
    */
    let mockState = {
      displayTestPage: false,
    };
    axios.post('http://localhost:8081/', mockState)
    .then(console.log)
    .then(console.error);
    /*
    /END TEST SECTION

    WARNING YOU MAY HAVE TO REFRESH PAGE FOR NEW STATE TO SHOW
    SINCE THE CALL TO GET STATE IS RIGHT AFTER THIS
    */
    axios.get('http://localhost:8081/')
    .then((response)=>{
      console.log("I am working here is my state butt burger", response.data);
      this.setState(response.data);
    })
    .catch(err=>console.log(err));
  }

  SwitchRender() {
    let page;
    let location = this.props.location.pathname;
    if (location == '/') {
      page = (<Home/>);
    }
    if(location == '/contactus'){
      page= (<Contact/>);
    }

    if (this.state.displayTestPage == true) {
      page = (<App/>);
    }

    return (
      <div>
      {page}
      </div>
    );

  }

  render() {
    return this.SwitchRender();
  }
}
