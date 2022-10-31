import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

const MainHeader = () => {
  return (
    <MainHeaderCtn>
      <FirstDiv>
        {" "}
        <NetflixImg />
        <HomeDiv>홈</HomeDiv>
        <SeriesDiv>시리즈</SeriesDiv>
        <MovieTab>영화</MovieTab>
        <TrendTab>NEW! 요즘 대세 콘텐츠</TrendTab>
        <ReserveTab>내가 찜한 콘텐츠</ReserveTab>
        <LanguageSearch>언어별로 찾아보기</LanguageSearch>
      </FirstDiv>

      <RightHeader>
        <FaSearch />
        <span>키즈</span>
        <BsBell />
        <ProfileCtn>
          <ProfileBox />
          <ProfileDetail />
        </ProfileCtn>
      </RightHeader>
    </MainHeaderCtn>
  );
};

const MainHeaderCtn = styled.div`
  z-index: 999;
  padding: 30px;
  gap: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 130px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(168, 22, 47, 0) 81%
  );
`;
const NetflixImg = styled.div`
  width: 150px;
  height: 100px;
  margin-top: -40px;
  background-size: cover;
  background-image: url("https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png");
`;

const RightHeader = styled.div`
  height: 130px;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;
const ProfileDetail = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  display: none;
`;
const ProfileCtn = styled.div`
  width: 40px;
  height: 40px;
  &:hover {
    ${ProfileDetail} {
      position: relative;
      right: 150px;
      display: block;
    }
  }
`;

const ProfileBox = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #2580e9;
`;

const HomeDiv = styled.div`
  cursor: pointer;
`;
const SeriesDiv = styled.div`
  cursor: pointer;
`;
const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const MovieTab = styled.div`
  cursor: pointer;
`;
const TrendTab = styled.div`
  cursor: pointer;
`;
const ReserveTab = styled.div`
  cursor: pointer;
`;
const LanguageSearch = styled.div`
  cursor: pointer;
`;

export default MainHeader;
