import React from "react";
import styled from "styled-components";

import Video from "../../assets/Video";
const MainBody = () => {
  return (
    <MoiveScreen>
      <Video />

      <iframe
        width="150%"
        height="100%"
        src="https://www.youtube.com/embed/brpNSXMpY28?autoplay=1&start=10&mute=1&controls=0&mute=1&loop=0
    "
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </MoiveScreen>
  );
};

const MoiveScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3400px;
  height: 1200px;
  position: absolute;
  top: 0px;
  left: -600px;
  z-index: -1;
`;

export default MainBody;
