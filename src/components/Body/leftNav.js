import React from "react";
import {
  businessManImg,
  editIcon,
  goldPinIcon,
  graySearchIcon,
  imagesIcon,
  metroSmallPinIcon,
  rsFeed,
  savedIcon,
  settingsSmallIcon,
} from "../../assets";
import { colors } from "../../assets/Colors";
import {
  BorderDiv,
  ColoredBtn,
  DarkSection,
  Ellipse,
  GrayBtn,
  IconBadge,
  SecondaryBtn,
  WhiteBoxSection,
  WhiteSection,
  WhiteToastSection,
} from "../../styledItems/styledItems";
import { AddIcon, GalleryIcon, RefferalIcon } from "../Icons/icons";

function Left() {
  const listItems = ["Feeds", "Gallery", "Settings", "Referral", "Saved"];
  const businessNames = [
    {
      id: 1,
      title: "Business name",
      name: "Business Page",
    },
    {
      id: 2,
      title: "Business name",
      name: "Business Page",
    },
    {
      id: 3,
      title: "Business name",
      name: "Profile seller",
    },
    {
      id: 4,
      title: "Business name",
      name: "Profile seller",
    },
  ];
  const ImageCheck = (val) => {
    switch (val) {
      case "Feeds":
        return <img style={styles.imageStyle} src={rsFeed} alt="Feeds" />;
        break;
      case "Gallery":
        return <GalleryIcon style={{ width: 10, height: 10 }} />;
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
        return <RefferalIcon />;
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
        width: 350,
        alignItems: "center",
        padding: 20,
      }}
    >
      <WhiteSection
        style={{
          marginBottom: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 10,
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
              paddingTop: 10,
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
              paddingTop: 10,
            }}
          >
            <p>Business</p>
            <IconBadge style={{ top: -10, right: -4 }}>50+</IconBadge>
          </GrayBtn>
        </div>
      </WhiteSection>
      <DarkSection
        style={{
          marginBottom: 50,
          padding: 15,
          paddingBottom: 30,
          width: "100%",
        }}
      >
        {listItems.map((item, idx) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
            
            }}
            key={idx}
          >
            {ImageCheck(item)}
            <p
              style={{
                color: item === "Feeds" ? colors.gold : colors.white,
                fontSize: 15,
                fontWeight: 400,
                marginTop: 25,
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </DarkSection>
      <WhiteBoxSection
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <div style={{ display: "flex", marginBottom: 10, padding: 15 }}>
          <h3
            style={{
              ...styles.accountSwitchText,
              fontSize: 17,
              fontWeight: 400,
              flex: 1,
            }}
          >
            My Pages
          </h3>
          <SecondaryBtn style={{ width: 90, display:"flex", alignItems:"center", padding: 10 }}>
            <AddIcon />
            <p style={{fontSize: 10, paddingTop: 10}}>

            Create new
            </p>
            </SecondaryBtn>
        </div>
        <div
          style={{
            dipslay: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 10,
          }}
        >
          <div style={styles.searchBox}>
            <img
              style={{ width: 15, height: 15, marginRight: 4 }}
              src={graySearchIcon}
              alt="search pages"
            />
            <p style={{marginTop: 10}}>Search Pages</p>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          {businessNames.map(({ id, title, name }) => (
            <div style={styles.businessContainer} key={id}>
              <img
                src={businessManImg}
                style={{ width: 40, height: 40, marginRight: 9 }}
                alt="profile"
              />
              {id === 1 && (
                <WhiteToastSection
                  style={{ right: -70, top: 140, width: 130, height: 80 }}
                >
                  <BorderDiv>
                  <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={goldPinIcon} alt="pin" />
                    <p style={styles.styledPee}>Pin</p>
                  </BorderDiv>
                  <BorderDiv>
                  <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={editIcon} alt="edit" />
                    <p style={styles.styledPee}>Edit Page</p>
                  </BorderDiv>
                </WhiteToastSection>
              )}
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    width: "100%",
                    position: "relative",
                    flexDirection: "column",
                    padding: 3,
                  }}
                >
                  <p
                    style={{
                      flex: 1,
                      fontSize: 15,
                      color: colors.secondary,
                      fontWeight: 400,
                      marginBottom: 5,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#ccc",
                    }}
                  >
                    {name}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 48,
                  }}
                >
                  <div
                    style={{ display: "flex", padding: 9, marginBottom: 10 }}
                  >
                    <Ellipse bgcolor={colors.secondary} />
                    <Ellipse bgcolor={colors.secondary} />
                    <Ellipse bgcolor={colors.secondary} />
                  </div>
                  <div>
                    <img
                      style={{ width: 10, height: 14 }}
                      src={metroSmallPinIcon}
                      alt="pin"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    width: 28,
    height: 27,
    marginRight: 15,
  },
  searchBox: {
    backgroundColor: "#ccc",
    color: colors.gray,
    borderRadius: 20,
    width: "100%",
    padding: 10,
    height: 30,
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
    height: 60,
    width: "100%",
    marginBottom: 5,
    alignItems: "center",
    padding: 10,
  },
  styledPee: {
    marginTop: 10
  }
};

export default Left;
