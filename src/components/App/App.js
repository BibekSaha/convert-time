import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import TimeInput from '../TimeInput/TimeInput';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import About from '../About/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInEnteredTime = this.handleChangeInEnteredTime.bind(this);
    this.handleChangeInDurationName = this.handleChangeInDurationName.bind(this);
    this.state = {
      enteredTime: '',
      durationName: 'minutes',
    }
  }

  handleChangeInEnteredTime(enteredTime) {
    this.setState({ enteredTime });
  }

  handleChangeInDurationName(durationName) {
    this.setState({ durationName });
  }

  calculateTime() {
    let time = this.state.enteredTime;
    const durationName = this.state.durationName;
    const convertedTimeArray = Array(4).fill(0);
    if (durationName === 'hours') {
      time = time * 60 * 60;
    } else if (durationName === 'minutes') {
      time = time * 60;
    }

    // Calculated the number of days
    convertedTimeArray[0] = parseInt(time / 86400);
    time %= 86400;

    // Calculates the number of hours
    convertedTimeArray[1] = parseInt(time / 3600);
    time %= 3600;

    // Calculates the number of minutes
    convertedTimeArray[2] = parseInt(time / 60);

    // Calculates the number of seconds
    convertedTimeArray[3] = time % 60;

    return convertedTimeArray;
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <TimeInput
              handleChangeInDurationName={this.handleChangeInDurationName}
              handleChangeInEnteredTime={this.handleChangeInEnteredTime}
              enteredTime={this.state.enteredTime}
              durationName={this.state.durationName}
            />
            <TimeDisplay
              timeArray={this.calculateTime()}
              isEnteredTimeAvailable={!!this.state.enteredTime}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;