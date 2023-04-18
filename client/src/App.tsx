import React from "react";
import "./App.css";
import StyleModule from "./sandbox/components/styles/StyleModule";
import Styles from "./sandbox/components/styles/Styles";
// import Logic from "./sandbox/components/Logic";
// import StringInterpolation from "./sandbox/components/StringInterpolation";
// import Template from "./sandbox/components/Template";
// import Babel from "./sandbox/introduction/Babel";

function App() {
  return (
    <div className="App">
      {/* {<Babel />} */}
      {/* <Template /> */}
      {/* <Logic />/ */}
      {/* <StringInterpolation /> */}
      <Styles />
      <StyleModule />
    </div>
  );
}

export default App;
