import React from "react";
export class Cell extends React.Component {
  updateCellColor = () => {
    if (this.props.isEditable) {
      this.props.handleCellColorChange(this.props.index);
    }
  };
  onMouseMove = e => {
    if (e.buttons === 1) {
      this.updateCellColor();
    }
  };
  render() {
    return (
      <td
        className={`border border-grey-darkest w-1/10 bg-${
          this.props.cell.color
        }`}
        onClick={this.updateCellColor}
        onMouseMove={this.onMouseMove}
      />
    );
  }
}
