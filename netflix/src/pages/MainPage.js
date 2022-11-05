import React from "react";
import MainHeader from "../components/MainHeader.js/MainHeader";
import MainBody from "../components/MainBody.js/MainBody";
import styled from "styled-components";
import MainList from "../components/MainBody.js/MainList";
const MainPage = () => {
  return (
    <Layout>
      <MainHeader />
      <MainBody />
    </Layout>
  );
};

const Layout = styled.div`
  /* z-index: -1; */
  display: flex;
  flex-direction: column;
  /* background-color: black; */
`;

export default MainPage;
