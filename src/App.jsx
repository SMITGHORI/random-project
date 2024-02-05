import React from "react";
import Background from "./component/Background";
import Foreground from "./component/Foreground";
import Card from "./component/Card";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      <Card />
    </div>
  );
}

export default App;
