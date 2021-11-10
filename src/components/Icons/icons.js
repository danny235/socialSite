import React from "react";
import styled from "styled-components";
import { galleryOneIcon, galleryThreeIcon, galleryTwoIcon, refferalFiveIcon, refferalOneIcon, refferalFourIcon, refferalThreeIcon, refferalTwoIcon } from "../../assets";

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
    <div style={{ position: "relative", marginRight: 18 }}>
      <img style={{width: 21, height: 21}} src={refferalOneIcon} alt="one" />
      <img style={{width: 17, height: 17,position: "absolute", top: -20, left: 1}} src={refferalTwoIcon} alt="two" />
      <img style={{width: 14, height: 14,position: "absolute", top: -14}} src={refferalThreeIcon} alt="three" />
      <img style={{width: 13, height: 15,position: "absolute",}} src={refferalFourIcon} alt="four" />
      <img style={{width: 18, height: 18,position: "absolute",bottom: -4, left: 9}} src={refferalFiveIcon} alt="five" />
    </div>
  );
}

const CopyIcon = () => {
    return (
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    )
}



const styles = {
  galleryIcons: {
    width: 20,
    height: 14,
  },
};

export { GalleryIcon, RefferalIcon, CopyIcon };
