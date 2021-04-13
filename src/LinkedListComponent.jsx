import React, { useState, memo } from "react";
import { linkedList } from "./LinkedListLogic";

const LinkedListComponent = () => {
  const [listItem, setListItem] = useState({});
  const [list, setList] = useState([]);
  const [change, setChange] = useState(false);
  const [alter, setAlter] = useState(false);

  const handleInputChange = (e) => {
    setListItem(e.target.value);
  };

  const handleButton = () => {
    !alter ? handleTail() : handleHead();
    setAlter(!alter);
  };

  const handleTail = () => {
    linkedList.addTail(parseInt(listItem, 10));
    setChange(false);
    setList([...list, parseInt(convertToArray(listItem))]);
  };

  const handleHead = () => {
    linkedList.addHead(linkedList.head, parseInt(listItem, 10));
    setChange(true);
    setList([parseInt(convertToArray(listItem)), ...list]);
  };

  const convertToArray = (number) => {
    let arr = [];
    if (!change) {
      arr.push(number);
    } else if (change) {
      arr.unshift(number);
      return arr[0];
    }
    return arr[0];
  };

  return (
    <div>
      <p>{JSON.stringify(list)}</p>
      <p>{JSON.stringify(linkedList)}</p>

      <input type="number" name="createList" onChange={handleInputChange} />

      <button onClick={handleButton}>Ingresar</button>
    </div>
  );
};

export default memo(LinkedListComponent);
