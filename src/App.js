/* global React */
class App extends React.Component {
  render() {
    return React.createElement("h1", {}, "Hi from React!");
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
