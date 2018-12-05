import React from "react";
import ColorPicker from "./ColorPicker";
import PictureGrid from "./PictureGrid";
class Play extends React.Component {
  state = {
    color: "blue",
    game: this.createGame()
  };

  constructor(props) {
    super(props);
    this.handleCellColorChange = this.handleCellColorChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  createGame() {
    return {
      templatePicture: this.createPicture(),
      playerPicture: this.createPicture()
    };
  }

  createPicture() {
    const picture = {
      cells: []
    };
    for (let i = 0; i < 100; i++) {
      picture.cells.push({ color: "white" });
    }

    return picture;
  }

  handleColorChange = color => {
    this.setState({ color });
  };

  handleCellColorChange = index => {
    const color = this.state.color;
    const cells = this.state.game.playerPicture.cells.slice();
    cells[index].color = color;
    this.setState({
      game: {
        templatePicture: this.state.game.templatePicture,
        playerPicture: { cells }
      }
    });
  };

  render() {
    return (
      <div className="bg-grey-light flex flex-col">
        <div className="flex-shrink flex bg-green min-h-16">
          <div className="flex-1">left</div>
          <div className="flex-1">
            <ColorPicker
              color={this.state.color}
              handleColorChange={this.handleColorChange}
            />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 border-r-2 border-gray-dark border-dashed p-4">
            <div className="p-16">
              <PictureGrid picture={this.state.game.templatePicture} />
            </div>
          </div>
          <div className="flex-1  p-4">
            <div className="p-8">
              <PictureGrid
                picture={this.state.game.playerPicture}
                isEditable={true}
                color={this.state.color}
                handleCellColorChange={this.handleCellColorChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
