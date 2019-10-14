import React, { useState } from "react";

export function MineGame(props) {
  const [mines] = useState(props.mines);
  const [rows] = useState(props.rows);
  const [columns] = useState(props.columns);

  const gameBoard = new Array(rows);

  const NODESTATE = {
    NOT_CHECKED: 0,
    CLEARED: 1,
    FLAGGED: 2,
    UNSURE: 3
  };

  const createGame = () => {
    for (let i = 0; i < rows; i++) {
      gameBoard[i] = new Array(columns);
      gameBoard[i].fill({
        status: NODESTATE.NOT_CHECKED,
        isMine: false,
        surroundingMineCount: 0
      });
    }

    for (let i = 0; i < mines; i++) {
      var row = Math.floor(Math.random() * rows);
      var col = Math.floor(Math.random() * columns);
      if (!gameBoard[row][col].isMine) {
        gameBoard[row][col].isMine = true;
      } else {
        i--;
      }
    }
  };

  const wrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(" + columns + ", 1fr)",
    gridGap: "2px",
    gridAutoRows: "minmax(25px, auto)",
    margin: "auto",
    width: 25 * columns + "px"
  };

  const node = {
    backgroundColor:
      "rgb(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ")",
    border: "1px solid black"
  };

  return (
    <div>
      <div style={wrapper}>
        {Array.from(Array(rows * columns)).map((element, index) => (
          <div id="{index}" style={node}>
            {index}
          </div>
        ))}
      </div>
      <button onClick={createGame}>New Game</button>
    </div>
  );
}
