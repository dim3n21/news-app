import React from 'react';

import Article from './Article/Article';
import { articles } from '../../fixtures';

const Articles = props => {
     
     const  articleList = articles.map(article => (<div key={article.id}><Article article={article} /></div>))
     return (
          <div>
             {articleList}  
          </div>
     );
};

export default Articles;