import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogSelectionButton extends Component {

  logToConsole = (selected) => {
    console.log(`You clicked: ${selected}`);
  };

  handleClick = () => {
    let selectedAnimal = this.props.selected;

    setTimeout(() => {
      this.logToConsole(selectedAnimal);
    }, 5000, selectedAnimal);
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick}
      >
        <span> Log my click to console</span>
      </button>
    );
  }
}

LogSelectionButton.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default LogSelectionButton;
