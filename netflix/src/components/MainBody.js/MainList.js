import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainList = () => {
  const MovieApi = "https://api.themoviedb.org/3/movie";
  const Api_Key = "7eead578dd4664c72c3041490fef851a";

  const [Margin, SetMargin] = useState(0);
  const [PopularList, SetPopularList] = useState();

  const nextcount = useRef(1);
  const backcount = useRef(1);

  const GetMoviePopularList = async () => {
    try {
      const { data } = await axios.get(
        `${MovieApi}/popular?api_key=${Api_Key}`
      );
      console.log(data.results);
      SetPopularList(data.results);
    } catch (error) {}
  };

  const NextSlideBtn = () => {
    SetMargin(Margin - 1500 * nextcount.current);
    console.log(nextcount.current);
    console.log(Margin);
  };

  const BeforeSlideBtn = () => {
    SetMargin(Margin + 1500 * backcount.current);
    console.log(backcount.current);
    console.log(Margin);
  };

  console.log(MovieApi);
  useEffect(() => {
    GetMoviePopularList();
  }, []);

  const Carousel = () => {
    // 옵션
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 10,
      nextArrow: <div>넘기기</div>,
    };

    return (
      <div className="carousel">
        <Slider {...settings}>
          {PopularList?.map((movie) => {
            console.log(movie.poster_path);
            return (
              <MovieBox>
                <Poster>
                  <img
                    style={{ borderRadius: "10px" }}
                    align="center"
                    width="100%"
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt="sd"
                  />
                </Poster>
              </MovieBox>
            );
          })}
        </Slider>
      </div>
    );
  };

  return (
    <Carousel />

    // <ListBox>
    //   <SliderBtn onClick={() => NextSlideBtn()}>넘기기</SliderBtn>
    //   <MovieCtn style={{ marginLeft: `${Margin}px` }}>
    //     {PopularList?.map((movie) => {
    //       console.log(movie.poster_path);
    //       return (
    //         <MovieBox>
    //           <Poster>
    //             {" "}
    //             <img
    //               style={{ borderRadius: "20px" }}
    //               align="center"
    //               width="100%"
    //               src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
    //               alt="sd"
    //             />
    //           </Poster>
    //         </MovieBox>
    //       );
    //     })}
    //     <Carousel />
    //   </MovieCtn>{" "}
    //   <SliderBtn onClick={() => BeforeSlideBtn()} className="right">
    //     넘기기
    //   </SliderBtn>
    // </ListBox>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: transparent;
  position: absolute;
  bottom: -80px;
  display: flex;
  overflow: hidden;
`;

const MovieBox = styled.div`
  width: max-content;
  height: 100%;
  flex: none;
  margin-left: 20px;
`;

const MovieCtn = styled.div`
  background-color: transparent;
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 300px;
  display: flex;
  transition: 1s;
  /* margin-left: -1500px; */
`;
const SliderBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100px;
  height: 100%;
  background-color: black;
  opacity: 80%;
  position: absolute;
  &.right {
    right: 0px;
  }
  :hover {
    opacity: 80%;
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const Poster = styled.div`
  /* margin-left: 10px; */
`;
export default MainList;
