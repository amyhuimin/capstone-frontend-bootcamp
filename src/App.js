import React from "react";
import logo from "./logo.png";
import "./App.css";
import PostCard from "./Component/postCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <PostCard />
        </header>
      </div>
    );
  }
}

export default App;
