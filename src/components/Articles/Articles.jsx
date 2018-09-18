import React, { Component } from 'react';

import accordion from '../../hoc/accordion/accordion';
import Article from './Article/Article';
import { articles } from '../../fixtures';

class Articles extends Component {
 
     render () {
          return (
               <div>
                  {articles.map(article => (
                  <div key={article.id}>
                    <Article
                         article = {article}
                         isOpen = {article.id === this.props.openItemId}
                         toggleOpenItem = {this.props.toggleOpenItem(article.id)}
                    />
                  </div>))}  
               </div>
          );
     }
     
};

export default accordion(Articles);