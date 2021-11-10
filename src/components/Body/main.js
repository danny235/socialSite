import React from "react";
import {
  bookmarkIcon,
  chatIcon,
  deleteIcon,
  eyeIcon,
  heartIcon,
  imagesIcon,
  locationIcon,
  peopleImg,
  pinIconSmall,
  reportIconSmall,
  roseThick,
  roseThin,
  shareIcon,
  tagIcon,
  videosIcon,
  whiteBookmark,
} from "../../assets";
import { colors } from "../../assets/Colors";
import {
  BorderDiv,
  BorderImage,
  Ellipse,
  PinkMainSection,
  SecondaryBtn,
  TextInput,
  WhiteFeedSection,
  WhiteInputSection,
  WhiteToastSection,
} from "../../styledItems/styledItems";

const Feed = ({ show }) => {
  return (
    <WhiteFeedSection style={{ position: "relative" }}>
      {show && (
        <WhiteToastSection
          style={{ right: 12, top: 10, width: 130, height: 200 }}
        >
          <BorderDiv>
            <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={eyeIcon} alt="hide" />
            <p style={styles.styledPee}>Hide</p>
          </BorderDiv>
          <BorderDiv>
            <p style={styles.styledPee}>Copy link</p>
          </BorderDiv>
          <BorderDiv>
            <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={pinIconSmall} alt="pin" />
            <p style={styles.styledPee}>Pin</p>
          </BorderDiv>
          <BorderDiv>
            <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={reportIconSmall} alt="pin" />
            <p style={styles.styledPee}>Report Post</p>
          </BorderDiv>
          <BorderDiv>
            <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={deleteIcon} alt="delete" />
            <p style={styles.styledPee}>Delete post</p>
          </BorderDiv>
        </WhiteToastSection>
      )}
      <div style={styles.feedContainer}>
        <img style={styles.peopleImg} src={peopleImg} alt="jumbo" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 1 }}
          >
            <img
              style={{ width: 60, height: 60, marginRight: 7 }}
              src={roseThick}
              alt="photo"
            />
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div>
                <h4
                  style={{
                    color: colors.secondary,
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Rose kooto
                </h4>
                <div style={{ display: "flex" }}>
                  <p style={styles.littleText}>Abuja</p>
                  <p style={styles.littleText}>11hr ago</p>
                  <p style={styles.littleText}>200 Likes</p>
                  <p style={styles.littleText}>20 Replies</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Ellipse />
                <Ellipse />
                <Ellipse />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 1 }}>
            <p style={{ fontSize: 13 }}>
              is simply dummey text of the printing and typesetting industry.
              Lorem ipsum has been the industry's standard dummy text ever since
              the 1500s. when an unknown printer took a gallery of type and
              scrambled it to make a type specimen book.
            </p>
            <div style={{ padding: 15 }}>
              <h4 style={{ fontSize: 12, marginBottom: 8 }}>
                View all comments
              </h4>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: 50, height: 50, marginRight: 8 }}
                  src={roseThick}
                  alt="photo"
                />
                <div>
                  <div>
                    <h4
                      style={{
                        color: colors.secondary,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Rose kooto
                    </h4>

                    <p style={styles.littleText}>Last Seen 11hr</p>
                  </div>
                  <p style={{ fontSize: 10 }}>
                    is simply dummey text of the printing and typesetting
                    industry. Lorem ipsum has been the industry's standard dummy
                    text ever since the 1500s. when an
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img
              style={{ ...styles.imagesStyle, width: 30, height: 27 }}
              src={heartIcon}
              alt="love"
            />
            <img
              style={{ ...styles.imagesStyle, width: 30, height: 29 }}
              src={chatIcon}
              alt="chat"
            />
            <img
              style={{ ...styles.imagesStyle, marginRight: 160 }}
              src={bookmarkIcon}
              alt="save"
            />
            <img
              style={{ ...styles.imagesStyle, width: 30, height: 20 }}
              src={shareIcon}
              alt="love"
            />
          </div>
        </div>
      </div>
    </WhiteFeedSection>
  );
};

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

        width: 1000,
        alignItems: "center",
        padding: 10,
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
                fontSize: 17,
                borderBottomWith: item === "My page" ? 2 : 0,
                borderBottomStyle: item === "My page" ? "solid" : "none",
                borderBottomColor:
                  item === "My page" ? colors.secondary : "none",
                paddingBottom: item === "My page" ? 30 : 10,
              }}
              key={idx}
            >
              {item}
            </p>
          ))}
        </BorderImage>
      </div>
      <PinkMainSection style={{ marginBottom: 40, position: "relative" }}>
        <WhiteToastSection
          style={{ right: -70, top: 30, width: 130, height: 80 }}
        >
          <BorderDiv>
            <p style={styles.styledPee}>Copy link</p>
          </BorderDiv>
          <BorderDiv>
            <img style={{width: 10, height: 10, marginRight: 8, marginLeft: 8}} src={reportIconSmall} alt="pin" />
            <p style={styles.styledPee}>Report Post</p>
          </BorderDiv>
        </WhiteToastSection>
        <div style={{ display: "flex" }}>
          <div>
            <img src={roseThin} style={styles.profilePhoto} alt="profile" />
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {counts.map(({ id, title }) => (
                <span
                  style={{
                    marginRight: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={id}
                >
                  <p style={styles.numCount}>{id}</p>
                  <p style={styles.userInfo}>{title}</p>
                </span>
              ))}
              <div style={{ display: "flex" }}>
                <Ellipse />
                <Ellipse />
                <Ellipse />
              </div>
            </div>

            <SecondaryBtn style={{ marginBottom: 10 }}>Following</SecondaryBtn>
            <div>
              {Business.map((item, idx) => (
                <p style={styles.business} key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </PinkMainSection>
      <WhiteInputSection
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: 60, display: "flex", alignItems: "center" }}>
          <TextInput
            style={{ marginRight: 20 }}
            placeholder="Share your Moments"
            type="text"
          />
          <SecondaryBtn style={{ height: 70 }}>Post</SecondaryBtn>
        </div>
        <div style={{ display: "flex", paddingLeft: 60, paddingBottom: 30 }}>
          <div style={styles.container}>
            <img
              src={imagesIcon}
              style={{ ...styles.imagesStyle, width: 30, height: 25 }}
              alt="image"
            />
            <p style={styles.imagesText}>Image</p>
          </div>
          <div style={styles.container}>
            <img
              src={videosIcon}
              style={{ ...styles.imagesStyle, width: 30, height: 20 }}
              alt="videos"
            />
            <p style={styles.imagesText}>Videos</p>
          </div>
          <div style={styles.container}>
            <img src={locationIcon} style={styles.imagesStyle} alt="location" />
            <p style={styles.imagesText}>Location</p>
          </div>
          <div style={styles.container}>
            <img
              src={tagIcon}
              style={{ ...styles.imagesStyle, width: 30, height: 26 }}
              alt="Tags"
            />
            <p style={styles.imagesText}>Tags</p>
          </div>
        </div>
      </WhiteInputSection>
      <Feed show={true} />
      <Feed />
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
    fontSize: 12,
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
    marginBottom: 2,
  },
  imagesStyle: {
    width: 20,
    height: 30,
    marginRight: 10,
  },
  imagesText: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: 400,
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: 15,
  },
  feedContainer: {
    padding: 20,
    display: "flex",
    width: "100%",
  },
  peopleImg: {
    height: 400,
    width: "55%",
    marginRight: 20,
  },
  littleText: {
    fontSize: 10,
    fontWeight: 500,
    marginRight: 7,
  },
  styledPee: {
    marginTop: 10
  }
};

export default Main;
