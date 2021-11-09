import React from "react";
import { roseThin } from "../../assets";
import { colors } from "../../assets/Colors";
import { BorderImage, PinkMainSection, SecondaryBtn } from "../../styledItems/styledItems";

function Main() {
  const items = ["Community", "See What's Trending", "My page"];
  const counts = [
    {
      id: "105",
      title: "Post",
    },
    {
      id: "7080",
      title: "Followers",
    },
    {
      id: "1,500",
      title: "Following",
    },
    {
      id: "1,500",
      title: "Supporting",
    },
  ];
  const Business = [
    "Other Pages",
    "Business One",
    "Business One longer name",
    "Business One",
    "Business One",
    "Business One",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      
        width: 900,
        alignItems: "center",
        padding: 50,
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <BorderImage>
          {items.map((item, idx) => (
            <p
              style={{
                padding: 20,
                color: item === "My page" ? colors.secondary : "#ccc",
                fontWeight: 500,
              }}
              key={idx}
            >
              {item}
            </p>
          ))}
        </BorderImage>
      </div>
      <PinkMainSection>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src={roseThin}
              style={styles.profilePhoto}
              alt="profile"
            />
          </div>
          <div>
            <h3 style={styles.userName}>Rose Kooto</h3>
            <p style={styles.userNameLabel}>User name</p>
            <p style={styles.userInfo}>
              Lorem ipsum is simply dummy text of the prining and typesetting
              industry. Lorem ipsum has been the industy's standard dummy text
              ever since the 1500s, when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book. it
            </p>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              {counts.map(({ id, title }) => (
                <span style={{marginRight: 10, display: "flex", flexDirection: "column", alignItems: "center"}} key={id}>
                  <p style={styles.numCount}>{id}</p>
                  <p style={styles.userInfo}>{title}</p>
                </span>
              ))}
            </div>

            <SecondaryBtn>Following</SecondaryBtn>
            <div>
              {Business.map((item, idx) => (
                <p style={styles.business} key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </PinkMainSection>
    </div>
  );
}

const styles = {
  profilePhoto: {
    width: 96,
    height: 96,
    marginTop: 30,
    marginRight: 10,
  },
  userName: {
    color: colors.secondary,
    fontWeight: 500,
    fontSize: 24,
  },
  userNameLabel: {
    color: "#808080",
    fontSize: 15,
  },
  userInfo: {
    color: "#808080",
    fontSize: 14,
    width: "93%",
  },
  numCount: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 0,
  },

  business: {
    color: colors.secondary,
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 1,
  },
};

export default Main;
