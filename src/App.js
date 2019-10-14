import { MineGame } from "./MineGame";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <MineGame rows={10} columns={10} mines={10} />
      </div>
    );
  }
}

export default App;
