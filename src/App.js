import React from "react";
import { render } from "react-dom";
class App extends React.Component {
  render() {
    return (
      <div class="pin-b fixed bg-black p-2">
        <a href="#" className="text-white">
          Play
        </a>
        <a href="#" className="text-white">
          Design
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
