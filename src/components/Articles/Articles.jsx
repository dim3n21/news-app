import React, { Component } from 'react';

import Article from './Article/Article';
import { articles } from '../../fixtures';

class Articles extends Component {
     state = {
          openArticleId: null
     }

     toggleArticleId = (id) => {
          this.setState({
               openArticleId: id
          })
     };

     render () {
          return (
               <div>
                  {articles.map(article => (
                  <div key={article.id}>
                    <Article
                    article={article}
                    toggleOpenArticleId={() => this.toggleArticleId(article.id)}
                    isOpen={article.id === this.state.openArticleId}/>
                  </div>))}  
               </div>
          );
     }
     
};

export default Articles;