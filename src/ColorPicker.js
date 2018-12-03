import React from "react";

const COLORS = [
  "red",
  "teal",
  "yellow",
  "blue",
  "green",
  "grey",
  "white",
  "black",
  "purple",
  "orange",
  "pink",
  "indigo"
];

class Design extends React.Component {
  render() {
    return (
      <div className="flex m-4 shadow-md">
        {COLORS.map((color, index) => (
          <div
            className={`flex-1 text-center text-2xl align-middle p-4 cursor-pointer bg-${color}`}
            key={index}
            onClick={() => this.props.handleColorChange(color)}
          >
            {this.props.color === color ? "🖌" : ""}
          </div>
        ))}
        {/* <h1>Color Picker</h1>
        <p>color is {this.props.color}</p> */}
      </div>
    );
  }
}

export default Design;
