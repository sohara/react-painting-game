import React from "react";
import { Cell } from "./Cell";

class PictureGrid extends React.Component {
  createRows = () => {
    let rows = [];
    for (let i = 0; i < 10; i++) {
      let start = i * 10;
      let end = start + 10;
      let columnCells = this.props.picture.cells.slice(start, end);
      let columns = [];
      columns = columnCells.map((cell, index) => (
        <Cell
          cell={cell}
          isEditable={this.props.isEditable}
          index={start + index}
          key={start + index}
          handleCellColorChange={this.props.handleCellColorChange}
        />
      ));
      // }
      rows.push(<tr key={i}>{columns}</tr>);
    }
    return rows;
  };
  render() {
    return <table className="w-full picture">{this.createRows()}</table>;
  }
}
export default PictureGrid;
