import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Info from "./components/Info";
const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="flex-card-container">
        {Info.map(function (component) {
          {
            return <Card
              item={component}
            />;
          }
        })}
      </div>
    </div>
  );
};

export default App;
