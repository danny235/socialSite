import React from "react";
import {
  bookmarkIcon,
  businessManImg,
  feedSmall,
  graySearchIcon,
  imagesIcon,
  rsFeed,
  savedIcon,
  settingsSmallIcon,
} from "../../assets";
import { colors } from "../../assets/Colors";
import {
  ColoredBtn,
  DarkSection,
  GrayBtn,
  IconBadge,
  SecondaryBtn,
  WhiteBoxSection,
  WhiteSection,
} from "../../styledItems/styledItems";

function Left() {
  const listItems = ["Feeds", "Gallery", "Settings", "Referral", "Saved"];
  const businessNames = [
    {
      id: 1,
      title: "Business name",
      name: "Business Page"
    },
    {
      id: 2,
      title: "Business name",
      name: "Business Page"
    },
    {
      id: 3,
      title: "Business name",
      name: "Profile seller"
    },
    {
      id: 4,
      title: "Business name",
      name: "Profile seller"
    },
  ]
  const ImageCheck = (val) => {
    switch (val) {
      case "Feeds":
        return <img style={styles.imageStyle} src={rsFeed} alt="Feeds" />;
        break;
      case "Gallery":
        return <img style={styles.imageStyle} src={imagesIcon} alt="Gallery" />;
        break;
      case "Settings":
        return (
          <img
            style={styles.imageStyle}
            src={settingsSmallIcon}
            alt="Settings"
          />
        );
        break;
      case "Referral":
        return (
          <img style={styles.imageStyle} src={imagesIcon} alt="Referral" />
        );
        break;
      case "Saved":
        return <img style={styles.imageStyle} src={savedIcon} alt="Saved" />;
        break;
      default:
        return null;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 270,
        alignItems: "center",
        padding: 50,
      }}
    >
      <WhiteSection
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100%',
          padding: 10
        }}
      >
        <h3 style={styles.accountSwitchText}>Switch Account</h3>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ColoredBtn
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <p>Social</p>
            <IconBadge style={{ top: -10, left: -3 }}>50+</IconBadge>
          </ColoredBtn>
          <GrayBtn
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <p>Business</p>
            <IconBadge style={{ top: -10, right: -4 }}>50+</IconBadge>
          </GrayBtn>
        </div>
      </WhiteSection>
      <DarkSection style={{ marginBottom: 50, padding: 15, paddingBottom: 30 }}>
        {listItems.map((item, idx) => (
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            key={idx}
          >
            {ImageCheck(item)}
            <p
              style={{
                color: item === "Feeds" ? colors.gold : colors.white,
                fontSize: 15,
                fontWeight: 400,
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </DarkSection>
      <WhiteBoxSection style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", marginBottom: 10, padding: 10}}>
          <h3
            style={{
              ...styles.accountSwitchText,
              fontSize: 17,
              fontWeight: 400,
              flex: 1
            }}
          >
            My Pages
          </h3>
          <SecondaryBtn style={{width: 90}}>Create new</SecondaryBtn>
        </div>
        <div style={{dipslay: "flex", justifyContent: "center", alignItems: "center", width: 250, padding: 10}}>

        <div style={styles.searchBox}>
          <img style={{width:15, height: 15, marginRight: 4}} src={graySearchIcon} alt="search pages" />
          <p>Search Pages</p>
        </div>
        </div>
        <div>

          {
            businessNames.map(({id, title, name})=> (
              <div style={styles.businessContainer} key={id}>
                <img src={businessManImg} style={{width: 40, height: 40, marginRight: 9}} alt="profile" />
                <div>
                  <div>
                    <p>{title}</p>
                  </div>
                  <p>{name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </WhiteBoxSection>
    </div>
  );
}

const styles = {
  accountSwitchText: {
    color: colors.secondary,
    fontWeight: 500,
    fontSize: 20,
    margin: 0,
    marginBottom: 3,
  },
  imageStyle: {
    width: 25,
    height: 30,
    marginRight: 15,
  },
  searchBox: {
    backgroundColor: "#ccc",
    color: colors.gray,
    borderRadius: 20,
    width: "93%",
    padding: 10,
    height: 20,
    display: "flex",
    alignItems: "center",
    marginRight: 7,
    justifySelf: "flex-start",
    fontSize: 12,
    marginBottom: 10,
  },
  businessContainer: {
    backgroundColor: "#eee",
    display: "flex",
    padding: 10,
    height: 60,
    width: 250,
    marginBottom: 5,
    alignItems: "center"
  }
};

export default Left;
