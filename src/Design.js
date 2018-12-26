import React from "react";
import PictureGrid from "./PictureGrid";
import ColorPicker from "./ColorPicker";
class Design extends React.Component {
  state = {
    color: "black",
    picture: this.createPicture()
  };

  createPicture() {
    const picture = {
      cells: []
    };
    for (let i = 0; i < 100; i++) {
      picture.cells.push({ color: "white" });
    }
    return picture;
  }

  handleCellColorChange = index => {
    const color = this.state.color;
    const cells = this.state.picture.cells.slice();
    cells[index].color = color;
    this.setState({
      picture: { cells }
    });
  };

  handleColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="flex h-screen">
        <div className="flex-1 p-16">
          <PictureGrid
            picture={this.state.picture}
            color={this.state.color}
            handleCellColorChange={this.handleCellColorChange}
            isEditable={true}
          />
          <hr />
          <ColorPicker
            color={this.state.color}
            handleColorChange={this.handleColorChange}
          />
        </div>
        <div className="flex-1 p-16 text-2xl">
          {JSON.stringify(
            this.state.picture.cells.map(cell => cell.color),
            null,
            2
          )}
        </div>
      </div>
    );
  }
}

export default Design;
