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
  height: 180px;
  border-radius: 0px 0px 25px 25px;
  padding: 10px 50px 20px 50px;
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
  height: 300px;
  border-radius: 20px;
  padding: 20px;
`;
const DarkSection = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  height: 260px;
  border-radius: 20px;
`;
const WhiteBoxSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 500px;
  border-radius: 20px;
  position: relative;
  max-width: 100% !important;
`;
const PinkSection = styled.div`
  background-color: ${colors.lighterSecondary};
  width: 100%;
  height: 100px;
  border-radius: 20px;
  padding: 20px;
`;
const WhiteSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 70px;
  border-radius: 20px;
`;
const BorderImage = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ccc;
  height: 70px;
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
    border-radius: 30px;
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
`;

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
  WhiteBoxSection
};
