import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Orginals' videoId={'32RAq6JzY-w'} />
      <RowPost title='Actions' isSmall  />
    </div>
  );
}

export default App;


