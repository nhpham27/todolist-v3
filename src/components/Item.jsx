import React, { useCallback, useState } from "react";

function Item(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    if (isClicked === true)
      setIsClicked(false);
    else setIsClicked(true);
    console.log(isClicked);
  }

  return <li onClick={handleClick} style={{textDecoration: isClicked ? "line-through" : "none"}}>{props.text}</li>
}

export default Item;