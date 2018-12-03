import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import Play from "./Play";
import Design from "./Design";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="pin-b fixed bg-black p-2">
          <Link to="/play" className="text-white">
            Play
          </Link>
          <Link to="/design" className="text-white">
            Design
          </Link>
        </div>
        <Router>
          <Play path="/play" />
          <Design path="/design" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
