import React, { Component } from 'react';
import { UserContext } from './UserContextserContext';
import ComponentF from './ComponentF';

class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;