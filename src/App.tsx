import { useState } from "react";
import Star from "./Star";
import { StarSize } from "./types";

function App() {


  return (
    <div className="App">
      <Star size={StarSize.large} />
      <Star size={StarSize.medium} />
      <Star size={StarSize.small} />
      <Star />
    </div>
  );
}

export default App;
