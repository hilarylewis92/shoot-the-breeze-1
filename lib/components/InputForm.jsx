import React, { Component } from 'react';

export default class InputForm extends Component {
  toggleSubmitBtn(draftedMessage) {
    if(draftedMessage.length > 0 && draftedMessage.length <= 140){
      return false;
    }else{
      return true;
    }
  }
    toggleClearBtn(draftedMessage){
      if(draftedMessage.length > 0){
        return false;
      }else{
        return true;
      }
    }

  render(){
    const {draftedMessage, onDraftedMessageChange, onMessageSubmit, clearField} = this.props;
    const disabledSubmit = this.toggleSubmitBtn(draftedMessage);
    const disabledClear = this.toggleClearBtn(draftedMessage);

    return (
      <div className = "input-bar">
        <div className = "line-one">
          <input id = "message-input"
            placeholder="Message"
            value={draftedMessage}
            onChange={onDraftedMessageChange}
          />

          <span
            className = 'character-count'>
            {140 - draftedMessage.length}
          </span>
        </div>

        <button
          className = 'clear-btn'
          disabled={disabledClear}
          onClick = {clearField}>Clear</button>

        <button
          className= 'submit-btn'
          disabled={disabledSubmit}
          onClick={onMessageSubmit}>Submit</button>
      </div>
    );
  }
}
