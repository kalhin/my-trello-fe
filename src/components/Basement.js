import React, { useState, useEffect } from "react";

import Board from "./Board";
import AddBoardPopup from './AddBoardModal'
import { getBoards } from "../api/api";

export default function Basement() {
  useEffect(() => {
    getBoards().then((data) => setBoard(data));
  }, []);

  const [boardList, setBoard] = useState([]);
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  const boardItem = boardList.map((board) => (
    <li key={board.id}>
      <Board title={board.title} />
    </li>
  ));

  return (
    <div>
      <ul>{boardItem}</ul>
      <button type="button" onClick={() => setOpen(true)}>Add Board</button>
      <AddBoardPopup />
    </div>
  );
}
