import logo from "./logo.svg";
import "./App.css";
import { headerArrowDown, headerFace } from "./assets";
import { MainHeader } from "./styledItems/styledItems";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        backgroundColor: "#e4e4e4",
        height: "300vh",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default App;
