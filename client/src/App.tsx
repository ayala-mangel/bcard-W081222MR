import React from "react";
import "./App.css";
import Card from "./cards/components/card/Card";
import Loops from "./sandbox/iterations/Loops";
import ConditionalRendering from "./sandbox/conditional-rendering/ConditionalRendering";
import OnClick from "./sandbox/events/OnClick";
import RaisingEvents from "./sandbox/events/RaisingEvents";
import Cards from "./cards/components/Cards";
import CardsPage from "./cards/pages/CardsPage";
// import FatherPropsString from "./sandbox/props/props-string/FatherPropsString";
// import FatherPropsObject from "./sandbox/props/props-object/FatherPropsObject";
// import FatherPropsTwoKeys from "./sandbox/props/props-two-keys/FatherPropsTwoKeys";
// import PropsTs from "./sandbox/props/props-ts/PropsTs";
// import StyleModule from "./sandbox/components/styles/StyleModule";
// import Styles from "./sandbox/components/styles/Styles";
// import MuiTypography from "./sandbox/mui-sandbox/data-display/MuiTypography";
// import MuiDivider from "./sandbox/mui-sandbox/data-display/MuiDivider";
// import MuiButton from "./sandbox/mui-sandbox/data-display/MuiButton";
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
      {/* <Styles /> */}
      {/* <StyleModule /> */}
      {/* <MuiTypography /> */}
      {/* <MuiDivider />/ */}
      {/* <MuiButton /> */}
      {/* <Card /> */}
      {/* <FatherPropsString /> */}
      {/* <FatherPropsObject /> */}
      {/* <FatherPropsTwoKeys /> */}
      {/* <PropsTs /> */}
      {/* <Loops /> */}
      {/* <ConditionalRendering /> */}
      {/* <Cards /> */}
      {/* <OnClick /> */}
      {/* <RaisingEvents /> */}
      <CardsPage />
    </div>
  );
}

export default App;
