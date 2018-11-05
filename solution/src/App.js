import React, { Component } from "react";
import OfficePage from "./OfficePage";
import OverviewePage from "./OverviewPage";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: "5%" }}>
        {/* <OfficePage /> */}
        <OverviewePage />
      </div>
    );
  }
}

export default App;
