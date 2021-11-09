import React from "react";
import {
  DarkSection,
  PinkMainSection,
  PinkSection,
} from "../../styledItems/styledItems";
import Left from "./leftNav";
import Main from "./main";
import Right from "./rightNav";

function Body() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        
        padding: 20
      }}
    >
      <Left />
      <Main />
      <Right />
    </div>
  );
}

export default Body;
