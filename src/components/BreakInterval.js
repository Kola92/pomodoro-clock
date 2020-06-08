import React from "react";

function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakInterval === 1) return;
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) return;
    props.increaseBreak();
  }
  return (
    <div className="length-control">
      <div id="break-label">Break Length</div>
      <div className="time-adjust">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="break-decrement"
          onClick={decreaseCounter}
        >
          &#8595;
        </button>
        <div id="break-length">{props.breakInterval}</div>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="break-increment"
          onClick={increaseCounter}
        >
          &#8593;
        </button>
      </div>
    </div>
  );
}

export default BreakInterval;
