import React from "react";
import MainHeader from "../components/MainHeader.js/MainHeader";
import MainBody from "../components/MainBody.js/MainBody";
import styled from "styled-components";
const MainPage = () => {
  return (
    <Layout>
      <MainHeader />
      <MainBody />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
