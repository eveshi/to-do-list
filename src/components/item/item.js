import React, { Component } from 'react';
import propTypes from 'prop-types';

class Item extends Component {
  // state = {
  //   showP: false,
  // };

  constructor() {
    super();
    this.state = {
      showP: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      showP: !this.state.showP,
    });
  }

  render() {
    return (
      <div>
        {this.state.showP ?
          <p>123</p>
          : null }
        <p>there is music</p>
        <button onClick={this.clickHandler}>change</button>
      </div>
    );
  }
}

// Item.propTypes = {
//   children: propTypes.node.isRequired,
// };

export default Item;
