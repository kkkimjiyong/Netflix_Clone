import React from "react";
import styled from "styled-components";

import Video from "../../assets/Video";
import MainList from "./MainList";
const MainBody = () => {
  return (
    <>
      <MoiveScreen>
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube.com/embed/brpNSXMpY28?autoplay=1&start=10&mute=1&controls=0&loop=1&playlist=brpNSXMpY28"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </MoiveScreen>
      <TitleCtn>
        <TitleTxt>환승연애</TitleTxt>
        <BodyTxt>
          다양한 이유로 이별한 커플들이 모여 지나간 사랑을 되짚고 새로운 사랑을
          찾아나가는 연애 리얼리티
        </BodyTxt>
        <BtnBox>
          <Button>재생</Button>
          <Button className="DetailBtn">상세정보</Button>
        </BtnBox>
      </TitleCtn>{" "}
      <GradientBox></GradientBox>
      <MainList />
    </>
  );
};

const MoiveScreen = styled.div`
  width: 2200px;
  left: 70px;
  top: -150px;
  height: 1600px;
  position: absolute;
`;

const GradientBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 470px;
  left: -100px;
  z-index: 50;
  width: 2120px;
  height: 1200px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 2%,
    rgba(253, 29, 29, 0) 36%,
    rgba(215, 25, 25, 0) 71%,
    rgba(0, 0, 0, 1) 95%
  );
`;

const TitleCtn = styled.div`
  position: relative;
  top: 250px;
  left: 50px;
  width: 900px;
  height: 300px;
  z-index: 60;
  /* background-color: aliceblue; */
`;

const TitleTxt = styled.div`
  color: white;
  padding: 50px 30px 0px 30px;
  font-size: 80px;
  letter-spacing: 20px;
  font-weight: 900;
`;

const BodyTxt = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 30px;
`;

const BtnBox = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: row;
  padding: 10px 30px 30px 30px;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  :hover {
    background-color: #c6c4c2;
  }
  &.DetailBtn {
    width: 220px;
    color: white;
    background-color: gray;
    :hover {
      background-color: #3c3a34;
    }
  }
`;

export default MainBody;
