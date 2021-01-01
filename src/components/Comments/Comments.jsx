import React, { Component } from 'react';
import Comment from './Comment/Comment';
import { Button } from 'react-bootstrap';
import Form from '../Form/Form';


class Comments extends Component {
     // static defaultProps = {
     //      comments: [
     //           {id: 1, user: "John Doe", text: "Hey this article was very interesting"},
     //           {id: 2, user: "John Doe", text: "Hey this article was very interesting"},
     //           {id: 3, user: "John Doe", text: "Hey this article was very interesting"},
     //           {id: 4, user: "John Doe", text: "Hey this article was very interesting"}
     //      ]
     // };

     state = {
          isOpen: false
     };

     toggleOpen = () => {
          this.setState( ( prevState ) => {
              return { isOpen: !prevState.isOpen };
          } );
      };

      getBody = () => {
          if (this.state.isOpen) {
               return (
                   <div>
                        {this.props.comments.map(comment =>
                            <div key={comment.id}>
                                <Comment 
                                    comment={comment}/>
                            </div>)}
                    </div>  
               )
          }
      };


     render() {

          if (!this.props.comments.length) return null
         
          return (
               <div> 
                    <p><Button bsStyle={ this.state.isOpen ? "danger" : "success"}
                              onClick={this.toggleOpen}>{this.state.isOpen ? 'Hide Comments' : 'Show Comments'}
                         </Button>
                    </p>
                    {this.getBody()}
                    
               </div>
               )
          }        
};

export default Comments;