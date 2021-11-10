import styled from "styled-components";
import {
  headerRect,
  roundBall,
  lineOneIcon,
  lineTwoIcon,
  lineThreeIcon,
  lineFourIcon,
  lineFiveIcon,
  lineSixIcon,
  lineSevenIcon,
} from "../assets";
import { colors } from "../assets/Colors";

const MainHeader = styled.div`
  background-image: url(${headerRect});
  background-repeat: no-repeat;
  height: 180px;
  border-radius: 0px 0px 25px 25px;
  padding: 10px 50px 20px 50px;
  margin-bottom: 30px;
`;

const SearchDiv = styled.div`
  background-color: #560259;
  width: 280px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-right: 50px;
  color: #fff;
  font-size: 14px;
`;

const IconBadge = styled.div`
  background-image: url(${roundBall});
  background-repeat: no-repeat;
  color: #fff;
  height: 20px;
  width: 20px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  top: ${(props) => (props.top ? props.top : null)};
  left: ${(props) => (props.left ? props.left : null)};
`;

const PinkMainSection = styled.div`
  background-color: ${colors.lighterSecondary};
  width: 100%;
  height: 260px;
  border-radius: 10px;
  padding: 20px;
`;
const DarkSection = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  height: 290px;
  border-radius: 10px;
`;
const WhiteBoxSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 420px;
  border-radius: 10px;
  position: relative;
  max-width: 100% !important;
`;
const PinkSection = styled.div`
  background-color: ${colors.lighterSecondary};
  width: 100%;
  height: 450px;
  border-radius: 10px;
  padding: 15px;
`;
const WhiteSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 90px;
  border-radius: 10px;
`;
const BorderImage = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ccc;
  height: 50px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;
`;
const SecondaryBtn = styled.button`
  outline: none;
  background: none;
  width: 150px;
  height: 35px;
  border: none;
  color: #fff;
  border-radius: 50px;
  background: ${colors.secondary} !important;
`;
const GrayBtn = styled.button`
  outline: none;
  background: none;
  width: 150px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 0px 10px 10px 0px;
  background: #ccc !important;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-contents: center;
`;
const ColoredBtn = styled.button`
  outline: none;
  background: none;
  width: 150px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 10px 0px 0px 10px;
  background: ${colors.secondary} !important;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-contents: center;
`;
const Ellipse = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ccc")};
  margin-right: 3px;
`;
const WhiteFeedSection = styled.div`
  height: 450px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  position: relative;
`;
const WhiteToastSection = styled.div`
  height: 100px;
  width: 80px;
  border-radius: 10px;
  background-color: ${colors.white};
  position: absolute;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;
const WhiteInputSection = styled.div`
  height: 240px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const TextInput = styled.input`
  height: 70px;
  width: 100%;
  outline: none;
  padding: 10px;
  border: none;
  background: #fff;
  border-radius: 50px;
  border: 1px solid #eee;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.secondary};
    font-weight: 500;
  }
`;

const BorderDiv = styled.div`
  border-bottom: 1px solid #eee;
  color: ${colors.secondary};
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: center;
`

export {
  MainHeader,
  SearchDiv,
  IconBadge,
  DarkSection,
  PinkMainSection,
  PinkSection,
  BorderImage,
  SecondaryBtn,
  WhiteSection,
  ColoredBtn,
  GrayBtn,
  WhiteBoxSection,
  Ellipse,
  WhiteInputSection,
  TextInput,
  WhiteFeedSection,
  WhiteToastSection,
  BorderDiv
};
