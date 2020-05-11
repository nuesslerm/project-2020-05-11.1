import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    // this is where you do API calls after the base class component was mounted
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  /**
   * contains anything that needs to be done before react removes
   * the component from the DOM
   */
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  /**
   * for performance:
   * if the properties coming in (nextProps)
   * are the same as the properties that we already have (props)
   * then don't re-render
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    // return false;
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className="lifecycles">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
