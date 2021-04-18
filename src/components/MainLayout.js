import React, { useState, useEffect } from "react";

import ListItem from "./ListItem"
import data from "../data/data.json"

export default function MainLayout() {
  useEffect(() => {
    console.log(data.items)
    setBoard(data.items);
  }, []);

  const [boardListItems, setBoard] = useState([]);
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  const boardItem = boardListItems.map((item) => (
    <li className="board__item" key={item.id}>
      <ListItem title={item.title} cards={item.cards}/>
    </li>
  ));

  return (
    <div className="board">
      <ul className="board__listItems">{boardItem}</ul>
      <button type="button" onClick={() => setOpen(true)}>Add Board</button>
      {/* <AddBoardPopup /> */}
    </div>
  );
}
