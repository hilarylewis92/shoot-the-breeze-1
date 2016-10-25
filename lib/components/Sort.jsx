import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Sort extends Component {

  render() {
    return (
      <div>
        <button className='sort-btn' id='up-btn' onClick={this.props.sortMessages}>  Sort &uarr; </button>
        <button className='sort-btn' id='down-btn' onClick={this.props.sortMessages}>  Sort &darr; </button>
      </div>
    )
  }
}


//create a way to disable buttons
