import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSession: true,
      timerSeconds: 0,
      intervalId: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  startTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.setState({
      intervalId: intervalId,
    });
    this.props.playStopTimer(true);
  }

  decreaseTimer() {
    switch (this.state.timerSeconds) {
      case 0:
        if (this.props.timerMinutes === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });

            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSeconds: 59,
          });
        }
        break;

      default:
        this.setState((prevSecond) => {
          return {
            timerSeconds: prevSecond.timerSeconds - 1,
          };
        });
        break;
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.props.playStopTimer(false);
  }

  resetTimer() {
    this.stopTimer();
    this.props.resetTimer();
    
    this.setState({
      timerSeconds: 0,
      isSession: true,
    });
    this.props.playStopTimer(false);
  }

  render() {
    return (
      <div className="timer">
        <div className="timer-wrapper">
          <div id="timer-label">
            {this.state.isSession === true ? "Session" : "Break"}
          </div>
          <div id="time-left">{`${this.props.timerMinutes}:${
            this.state.timerSeconds === 0
              ? "00"
              : this.state.timerSeconds < 10
              ? "0" + this.state.timerSeconds
              : this.state.timerSeconds
          }`}</div>
        </div>
        <div className="timer-actions">
          <button id="start" title="Start" onClick={this.startTimer}>
            &#9658;
          </button>
          <button id="stop" title="Stop" onClick={this.stopTimer}>
            &#9614;&#9614;
          </button>
          <button id="reset" title="Reset" onClick={this.resetTimer}>
            &#x21bb;
          </button>
        </div>
      </div>
    );
  }
}
