import React from "react";
import styled from "styled-components";
import { galleryOneIcon, galleryThreeIcon, galleryTwoIcon, refferalFiveIcon, refferalOneIcon, refferalFourIcon, refferalThreeIcon, refferalTwoIcon, copyOneIcon, copyTwoIcon, copyThreeIcon, addOneIcon, addTwoIcon, addThreeIcon } from "../../assets";

const Square = styled.div`
  position: relative;
  background-image: url(${galleryOneIcon});

  width: 49px;
  height: 49px;
`;

function GalleryIcon() {
  return (
    <div style={{ position: "relative", marginRight: 18 }}>
      <img style={{ width: 23, height: 23 }} src={galleryOneIcon} alt="one" />
      <img
        style={{
          ...styles.galleryIcons,
          position: "absolute",
          bottom: 1,
          left: 3,
        }}
        src={galleryTwoIcon}
        alt="two"
      />
      <img
        style={{
          ...styles.galleryIcons,
          width: 7,
          height: 7,
          position: "absolute",
          left: 4,
          top: 3,
        }}
        src={galleryThreeIcon}
        alt="three"
      />
    </div>
  );
}

function RefferalIcon() {
  return (
    <div style={{ position: "relative", marginRight: 27 }}>
      <img style={{width: 15, height: 15}} src={refferalOneIcon} alt="one" />
      <img style={{width: 13, height: 13,position: "absolute", top: -11, left: 1}} src={refferalTwoIcon} alt="two" />
      <img style={{width: 10, height: 10,position: "absolute", top: -8}} src={refferalThreeIcon} alt="three" />
      <img style={{width: 10, height: 11,position: "absolute", top: 4, right: -8}} src={refferalFourIcon} alt="four" />
      <img style={{width: 15, height: 15,position: "absolute",bottom: -2, left: 6}} src={refferalFiveIcon} alt="five" />
    </div>
  );
}

const CopyIcon = () => {
    return (
        <div style={{ position: "relative", marginRight: 6}}>
            <img style={{width: 10, height: 10}} src={copyOneIcon} alt="1" />
            <img style={{width: 7, height: 12,position: "absolute", left: 2, top: 1}} src={copyTwoIcon} alt="2" />
            <img style={{width: 6, height: 6, position: "absolute", left: 5}} src={copyThreeIcon} alt="3" />
        </div>
    )
}
const AddIcon = () => {
    return (
        <div style={{ position: "relative", marginRight: 4 }}>
            <img style={{width: 10, height: 10}} src={addOneIcon} alt="1" />
            <img style={{position: "absolute",width: 1, height: 9, top: 7, left: 4}} src={addTwoIcon} alt="2" />
            <img style={{position: "absolute", width: 8, height: 1,top: 10, left: 1}} src={addThreeIcon} alt="3" />
        </div>
    )
}



const styles = {
  galleryIcons: {
    width: 20,
    height: 14,
  },
};

export { GalleryIcon, RefferalIcon, CopyIcon, AddIcon };
