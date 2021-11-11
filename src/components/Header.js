import React from "react";
import {
  headerArrowDown,
  headerBell,
  headerBellBall,
  headerFace,
  headerFlag,
  headerIconOne,
  headerIconTwo,
  headerInbox,
  headerSearch,
  unknownOne,
  unknownTwo,
} from "../assets";
import { CircleOne, CircleTwo, IconBadge, MainHeader, SearchDiv } from "../styledItems/styledItems";

function Header() {
  return (
    <MainHeader>
      <CircleOne style={{left: 10, top: -300}} />
      <CircleTwo style={{left: -200, top: -240}} />
      <div style={styles.headerContainer}>
        <div style={styles.imageContainer}>
          <img style={styles.imageFace} src={headerFace} />
          <img style={styles.imageArrow} src={headerArrowDown} />
          <p style={styles.imageText}>Jonathan Deo</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={styles.imageFlag} src={headerFlag} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconBadge top="-10px">20</IconBadge>
            <img style={styles.imageNot} src={headerInbox} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconBadge top="-10px">50+</IconBadge>
            <img style={styles.imageNot} src={headerBell} />
            <img style={styles.imageNotBell} src={headerBellBall} />
          </div>
          <SearchDiv>
            <img style={styles.imageNot} src={headerSearch} />
            <p style={{marginTop: 10}}>Search</p>
          </SearchDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconBadge
              style={{ width: 10, height: 10 }}
              top="-10px"
              left="-10px"
            />

            <img style={styles.imageNotLogo} src={headerIconOne} />
            <img style={styles.imageNotLogo} src={headerIconTwo} />
          </div>
        </div>
      </div>
    </MainHeader>
  );
}

const styles = {
  headerContainer: {
    padding: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContents: "center",
    width: "100%"
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContents: "center",
  },
  imageFace: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  imageFlag: {
    height: 25,
    width: 47,
    marginRight: 20,
  },
  imageNot: {
    height: 28,
    width: 30,
    marginRight: 20,
  },
  imageNotLogo: {
    height: 28,
    width: 30,
  },
  imageNotBell: {
    height: 5,
    width: 10,
    marginRight: 20,
  },
  imageArrow: {
    height: 6,
    width: 13,
    marginRight: 10,
  },
  imageText: {
    color: "#ccc",
    fontWeight: 400,
    fontSize: 18,
  },
};

export default Header;
