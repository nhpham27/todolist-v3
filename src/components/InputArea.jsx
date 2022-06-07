import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input type="text" value={props.noteItem} onChange={props.onChange} />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
