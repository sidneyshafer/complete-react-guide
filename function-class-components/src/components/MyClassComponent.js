import React, { Component } from 'react';

// Alternatively, `extends React.Component` with only importing `React`
class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hello, Welcome to my Class Component!</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default MyClassComponent;