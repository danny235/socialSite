import React from "react";
import {
  BorderImage,
  PinkSection,
  SecondaryBtn,
} from "../../styledItems/styledItems";
import { bookmarkIcon, roseThick } from "../../assets";
import { Progress } from "antd";
import { colors } from "../../assets/Colors";

function Right() {
  const items = ["Suggested Users", "Suggested Pages"];
  const dummyPages = [
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
    {
      id: 1,
      name: "Rose Kooto",
      location: "Abuja",
    },
  ];
  const dummyItems = [
    {
      id: 1,
      title: "Smoothie",
      description: "Smoothy store",
      orders: "25 orders left",
      percent: 65,
    },
    {
      id: 2,
      title: "Smoothie",
      description: "Smoothy store",
      orders: "25 orders left",
      percent: 40,
    },
    {
      id: 3,
      title: "Smoothie",
      description: "Smoothy store",
      orders: "25 orders left",
      percent: 75,
    },
    {
      id: 4,
      title: "Smoothie",
      description: "Smoothy store",
      orders: "25 orders left",
      percent: 60,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        width: 380,
        padding: 20,
        marginTop: 20,
      }}
    >
      <div style={{ width: "100%", marginBottom: 30 }}>
        <h3
          style={{
            color: colors.secondary,
            marginBottom: 10,
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Suggested Listings
        </h3>
        <PinkSection>
          {dummyItems.map(({ id, title, description, orders, percent }) => (
            <div style={{ display: "flex", marginBottom: 8 }} key={id}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      style={styles.imageStyle}
                      src={roseThick}
                      alt="photo"
                    />
                    <div style={{ width: 140 }}>
                      <p
                        style={{
                          color: colors.secondary,
                          fontSize: 16,
                          fontWeight: 500,
                          marginBottom: 4,
                        }}
                      >
                        {title}
                      </p>
                      <p style={styles.grayText}>{description}</p>
                      <p style={styles.grayText}>{orders}</p>
                    </div>
                    <SecondaryBtn style={{ width: 60, height: 30 }}>
                      Order
                    </SecondaryBtn>
                  </div>
                  <div style={{ paddingLeft: 50 }}>
                    <Progress
                      strokeColor={colors.gold}
                      percent={percent}
                      showInfo={false}
                      trailColor="#ccc"
                      strokeWidth={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </PinkSection>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <BorderImage style={{ height: 30, marginBottom: 20 }}>
          {items.map((item, idx) => (
            <p
              style={{
                color: item === "Suggested Pages" ? colors.secondary : "#ccc",
                fontWeight: 500,
                fontSize: 14,
                borderBottomWith: item === "Suggested Pages" ? 2 : 0,
                borderBottomStyle:
                  item === "Suggested Pages" ? "solid" : "none",
                borderBottomColor:
                  item === "Suggested Pages" ? colors.secondary : "none",
                paddingBottom: item === "Suggested Pages" ? 30 : 0,
              }}
              key={idx}
            >
              {item}
            </p>
          ))}
        </BorderImage>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <PinkSection>
          {dummyPages.map(({ id, name, location }) => (
            <div style={{marginBottom: 21}} key={id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img style={styles.imageStyle} src={roseThick} alt="photo" />
                  <div style={{ width: 100 }}>
                    <p
                      style={{
                        color: colors.secondary,
                        fontSize: 16,
                        fontWeight: 500,
                        marginBottom: 4,
                      }}
                    >
                      {name}
                    </p>
                    <p style={styles.grayText}>{location}</p>
                  </div>
                  <SecondaryBtn style={{ width: 70, height: 30, marginRight: 12 }}>
                    Support
                  </SecondaryBtn>
                  <img style={{width: 28, height: 30}} src={bookmarkIcon} alt="bookmark" />
                </div>
              </div>
            </div>
          ))}
        </PinkSection>
      </div>
    </div>
  );
}

const styles = {
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  grayText: {
    color: colors.gray,
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 3,
  },
};

export default Right;
