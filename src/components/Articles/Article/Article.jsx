import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col, Image} from 'react-bootstrap';
import { newsPlaceholder } from '../../../assets/images';

import Comments from '../../Comments/Comments';
import Form from '../../Form/Form';

class Article extends Component {

    state = {
        comments: []
    }

    onCommentChange = (newComment) => {
        console.log('newComment: ', newComment);
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    getBody = () => {
        if (this.props.isOpen) {
            return (
            <div>
                <br /> <br />
                <p>{this.props.article.description} <a style={{fontSize:'18px'}} href={this.props.article.url} target='_blank' >Learn More</a></p>
                <Comments comments={this.state.comments}/>
                <Form id={this.props.article.url} comments={this.state.comments} onChange={(newComment) => this.onCommentChange(newComment)}/>
            </div>
            )
        } return null
    };

    render() {
        
        // Image Placeholder 
        let src;
        if (this.props.article.urlToImage) {
        src = this.props.article.urlToImage } else {
            src = newsPlaceholder
        }

        return (
            <Jumbotron>
                <Grid>
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                            <Image src={src}  alt="600x400" rounded responsive />  
                        </Col>
                        <Col xs={12} md={8} lg={8}>
                            <h3>{this.props.article.title}</h3><br />
                            <p><Button onClick={this.props.toggleOpenItem} bsStyle="primary">
                                {this.props.isOpen ? 'Close' : 'Learn more'}
                            </Button></p>
                        </Col>    
                    </Row>
                </Grid>
            {this.getBody()}
            </Jumbotron>
        );
    }
}

export default Article;