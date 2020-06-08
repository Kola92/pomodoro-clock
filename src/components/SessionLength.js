import React from "react";

function SessionLength(props) {
  function increaseSessionCounter() {
    if (props.sessionLength === 60) return;
    props.increaseSession();
  }

  function decreaseSessionCounter() {
    if (props.sessionLength === 1) return;
    props.decreaseSession();
  }
  return (
    <div className="length-control">
      <div id="session-label">Session Length</div>
      <div className="time-adjust">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="session-decrement"
          onClick={decreaseSessionCounter}
        >
          &#8595;
        </button>
        <div id="session-length">{props.sessionLength}</div>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="session-increment"
          onClick={increaseSessionCounter}
        >
          &#8593;
        </button>
      </div>
    </div>
  );
}

export default SessionLength;
