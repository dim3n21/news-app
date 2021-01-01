import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Jumbotron, Button } from 'react-bootstrap';

class Form extends Component {

     state = {
          user: '',
          text: ''
     }

     limits = {
          user: {
               min: 3,
               max: 50
          },
          text: {
               min: 3,
               max: 100
          }
     }

     
     handleChange = type => ev => {
          const { value } = ev.target
          this.setState({
               [type]: value
          })
     }

     getValidationState = (type) => {
          const length = this.state[type].length;
     
          if (length > this.limits[type].min && length < this.limits[type].min ) return 'success';
          else if (length < this.limits[type].min) return 'warning';
          else if (length > this.limits[type].max) return 'error';
          return null;
     }

     saveCommentHandler = (event) => {
          event.preventDefault();
          if(this.state.user.length > this.limits.user.min || this.state.text.length > this.limits.text.min) {
               const newComment = {id: this.props.id, user: event.target[0].value, text: event.target[1].value};
               this.props.onChange(newComment);
               this.setState({
                    user: '',
                    text: ''
               })
          }
     }
     
     
     render() {
          console.log("this.props.id: ", this.props.id);
          return (
               <Jumbotron>
                    <h3>Please leave your comment <span style={{
                         color: '#FF0000',
                         fontSize: '1.5rem'
                    }}>Under Construction</span></h3>
                    <form onSubmit={this.saveCommentHandler}>
                         <FormGroup
                              controlId="formUser"
                              bsSize="sm"
                              validationState={this.getValidationState('user')}
                         >
                              <ControlLabel>Name</ControlLabel>
                              <FormControl
                                   type="text"
                                   value={this.state.user}
                                   placeholder="Enter your name"
                                   onChange={this.handleChange('user')}
                              />
                              <FormControl.Feedback />
                         </FormGroup>
                         <FormGroup
                              controlId="formComment"
                              bsSize="lg"
                              validationState={this.getValidationState('text')}
                         >
                              <ControlLabel>Comment</ControlLabel>
                              <FormControl
                                   type="text"
                                   value={this.state.text}
                                   placeholder="Enter your comment"
                                   onChange={this.handleChange('text')}
                              />
                              <FormControl.Feedback />
                         </FormGroup>
                         <Button type="submit">Submit</Button>
                    </form>  
                </Jumbotron>
          );
     }
}



export default Form;