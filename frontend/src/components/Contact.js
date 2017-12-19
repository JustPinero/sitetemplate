import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:"dinkNuts@schmoe.com",
      subject:"",
      body:""
    };
  }
  componentDidMount() {
    console.log('wtf');
  }
  onSubjectChanged(text){
    this.setState({subject:text});
  }
  onBodyChanged(text){
    this.setState({body:text});
  }



  render() {
    return (
      <div>
        <Form>
        <FormGroup>
          <Label for="Text">Subject</Label>
          <Input type="text" name="text" id="Subject" onChange={(evt)=>this.onSubjectChanged(evt.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Text">Text Area</Label>
          <Input type="textarea" name="text" id="Text" onChange={(evt)=>this.onBodyChanged(evt.target.value)}/>
        </FormGroup>
        <Button onClick={(evt)=>{
          document.getElementById('Mailo').click();
        }}>Submit</Button>
        <a style={{display: "none"}} id='Mailo' href={`mailto:${this.state.email}?Subject=${encodeURIComponent(this.state.subject)}&body=${encodeURIComponent(this.state.body)}`} target="_top">Send Mail</a>
      </Form>
      </div>
    );
  }
}
