import React, { Component } from 'react';
import propTypes from 'prop-types';

class Item extends Component {
  state = {
    showP: false,
  };

  render() {
    return (
      <div>
        {this.state.showP ?
          <p>test/test</p>
          : null }
        <p>there is music</p>
      </div>
    );
  }
}

// Item.propTypes = {
//   children: propTypes.node.isRequired,
// };

export default Item;
