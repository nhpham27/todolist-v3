import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";

function App() {
  const [note, setNote] = useState("");
  const [items, setItems] = useState([]);
  
  function handleChange(event) {
    const newText = event.target.value;
    setNote(newText);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, {
        key: items.length+1,
        text: note
      }];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
          noteItem= {note}
          onChange={handleChange}
          onClick={addItem}
        />
      <div>
        <ul>
          {items.map(item => <Item
            key = {item.key}
            text = {item.text}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
