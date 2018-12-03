import React from "react";
import ColorPicker from "./ColorPicker";
class Play extends React.Component {
  state = {
    color: "blue"
  };

  handleColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="pin fixed flex-col">
        <div className="flex-shrink flex bg-black h-16">
          <div className="flex-1 bg-yellow">left</div>
          <div className="flex-1 bg-pink">
            <ColorPicker
              color={this.state.color}
              handleColorChange={this.handleColorChange}
            />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 border-r-2 border-gray-dark border-dashed p-4">
            grid
          </div>
          <div className="flex-1  p-4">grid</div>
        </div>
      </div>
    );
  }
}

export default Play;
