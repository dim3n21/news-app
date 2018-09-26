import React, { Component } from 'react';
import { Jumbotron, Button, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends Component {
     render() {
          return (
               <div>
                    <Grid>
                    <Jumbotron >
                            <h1 style={{textAlign: "center"}}>News you can trust.<br />All in one place.</h1><br />
                            <p style={{textAlign: "center"}}>
                            This website provides the best coverage of current events, curated by editors and personalized for you. Dive into your favorite topics or discover new ones. And stay up to date with rich videos, breaking news notifications, and subscriptions to some of your favorite publications.
                            </p><br />
                            <p style={{textAlign: "center"}}>
                                <Link to="/"><Button bsStyle="primary">Read News</Button></Link>
                            </p>
                        </Jumbotron>
                    </Grid>
               </div>
          );
     }
}

export default About;