import React from 'react';
import './TimeInput.css';
import '../../base.css';

class TimeInput extends React.Component {
  render() {
    return (
      <div className="container TimeInput">
        <input 
          type="number" 
          value={this.props.enteredTime} 
          onChange={e => this.props.handleChangeInEnteredTime(e.target.value)}
          placeholder="Enter a number to get started"
        />
        <select value={this.props.durationName} onChange={e => this.props.handleChangeInDurationName(e.target.value)}>
          <option value="hours">hours</option>
          <option value="minutes">minutes</option>
          <option value="seconds">seconds</option>
        </select>
      </div>
    )
  }
}

export default TimeInput;