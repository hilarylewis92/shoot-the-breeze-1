import React, { Component } from 'react';

export default class FilterMessages extends Component {
  
  render(){
    const {onFilterChange, sortMessages} = this.props;

    return (
      <div className = "filter-bar">
        <span className = 'title'>
          Shoot the Breeze
        </span>

        <input id = "filter-input"
          placeholder="Filter"
          onChange={(e) =>{onFilterChange(e.target.value)}}
        />

        <span>
          <button
            className='sort-btn'
            id='up-btn'
            onClick={sortMessages}>
            Sort &uarr;
          </button>

          <button
            className='sort-btn'
            id='down-btn'
            onClick={sortMessages}>
            Sort &darr;
          </button>
        </span>
      </div>
    );
  }
}
