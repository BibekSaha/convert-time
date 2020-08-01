import React from 'react';
import './TimeDisplay.css';
import '../../base.css';

function timeStringBuilderFromArray(array) {
  const [days, hours, minutes, seconds] = array;
  let stringBuilder = '';
  if (days) stringBuilder += days === 1 ? days + ' day ' : days + ' days ';
  if (hours) stringBuilder += hours === 1 ? hours + ' hour ' : hours + ' hours ';
  if (minutes) stringBuilder += minutes === 1 ? minutes + ' minute ' : minutes + ' minutes ';
  if (seconds) stringBuilder += seconds === 1 ? seconds + ' second ' : seconds + ' seconds ';
  return stringBuilder;
}

const TimeDisplay = props => {
  if (!props.isEnteredTimeAvailable) return null;
  return (
    <div className="TimeDisplay container">
      <p>{timeStringBuilderFromArray(props.timeArray)}</p>
    </div>
  );
};

export default TimeDisplay;