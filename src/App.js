import React from "react";
import "./App.css";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25,
      isPlay: false
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevLength) => {
      return {
        breakLength: prevLength.breakLength + 1,
      };
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevLength) => {
      return {
        breakLength: prevLength.breakLength - 1,
      };
    });
  }

  onIncreaseSessionLength() {
    this.setState((prevLength) => {
      return {
        sessionLength: prevLength.sessionLength + 1,
        timerMinutes: prevLength.sessionLength + 1,
      };
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevLength) => {
      return {
        sessionLength: prevLength.sessionLength - 1,
        timerMinutes: prevLength.sessionLength - 1,
      };
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevMinute) => {
      return {
        timerMinutes: prevMinute.timerMinutes - 1,
      };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinutes: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinutes: this.state.breakLength,
      });
    }
  }

  onResetTimer() {
    this.setState({
      timerMinutes: this.state.sessionLength,
    });
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Pomodoro Clock</h2>
        <BreakInterval
          isPlay={this.state.isPlay}
          breakInterval={this.state.breakLength}
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
        />
        <SessionLength
          isPlay={this.state.isPlay}
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
        />
        <Timer
          timerMinutes={this.state.timerMinutes}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          playStopTimer={this.onPlayStopTimer}
        />
      </div>
    );
  }
}

export default App;
