import React from "react";
import ColorPicker from "./ColorPicker";
import PictureGrid from "./PictureGrid";

const TEMPLATES = [
  [
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "orange",
    "orange",
    "orange",
    "orange",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "pink",
    "pink",
    "pink",
    "pink",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "black",
    "black",
    "black",
    "black",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green"
  ],
  [
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red"
  ],
  [
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "white",
    "white",
    "blue",
    "blue",
    "blue",
    "blue",
    "white",
    "blue",
    "blue",
    "blue",
    "blue",
    "white",
    "white",
    "blue",
    "blue",
    "blue",
    "white",
    "white",
    "blue",
    "blue",
    "black",
    "blue",
    "blue",
    "blue",
    "black",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "black",
    "black",
    "black",
    "black",
    "black",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "black",
    "yellow",
    "black",
    "yellow",
    "black",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "blue",
    "green",
    "green",
    "black",
    "pink",
    "black",
    "black",
    "black",
    "black",
    "black",
    "green",
    "green",
    "green",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "green",
    "green",
    "green",
    "black",
    "green",
    "black",
    "green",
    "black",
    "green",
    "black",
    "black"
  ]
];
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
    let templatePicture = this.pickRandomTemplate();
    let playerPicture = this.createPicture();
    let correctCellCount = this.correctCellCount(
      templatePicture,
      playerPicture
    );
    let isComplete = correctCellCount === 100;

    return {
      templatePicture,
      playerPicture,
      correctCellCount,
      isComplete
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

  pickRandomTemplate() {
    const template = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
    const picture = {
      cells: []
    };
    for (let i = 0; i < 100; i++) {
      let color = template[i];
      picture.cells.push({ color });
    }
    return picture;
  }

  correctCellCount(templatePicture, playerPicture) {
    let count = 0;
    for (let i = 0; i < 100; i++) {
      if (playerPicture.cells[i].color === templatePicture.cells[i].color) {
        count++;
      }
    }
    return count;
  }

  handleColorChange = color => {
    this.setState({ color });
  };

  handleCellColorChange = index => {
    const color = this.state.color;
    const cells = this.state.game.playerPicture.cells.slice();
    cells[index].color = color;
    let templatePicture = this.state.game.templatePicture;
    let playerPicture = { cells };
    let correctCellCount = this.correctCellCount(
      templatePicture,
      playerPicture
    );
    let isComplete = correctCellCount === 100;
    this.setState({
      game: {
        templatePicture,
        playerPicture,
        correctCellCount,
        isComplete
      }
    });
  };

  handleNewGame = () => {
    this.setState({
      game: this.createGame()
    });
  };

  render() {
    return (
      <div className="bg-grey-light flex flex-col">
        <div className="flex-shrink flex bg-green min-h-16">
          <div className="flex-1 bg-yellow">
            <button onClick={this.handleNewGame}>🎲 New Game</button>[
            {this.state.game.correctCellCount} of 100 completed]
            <p>
              Game complete:
              {" " + this.state.game.isComplete}
            </p>
          </div>
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
