import React, { Component } from 'react';

/**
 * This function is called for every component. Hence, for every component
 * it returns a class called "accordian" which renders the same component
 * and adds new props called  "openItemId" and "toggleOpenItem"
 */
export default (OriginalComponent) => class accordion extends Component {
     state = {
          openItemId: null
     };

     toggleOpenItem = (openItemId) => ev => {
          this.setState({
               openItemId: openItemId === this.state.openItemId ? null : openItemId
          })
     };

     render () {
          return <OriginalComponent
                    {...this.props}
                    openItemId = {this.state.openItemId}
                    toggleOpenItem = {this.toggleOpenItem} />
     }
};