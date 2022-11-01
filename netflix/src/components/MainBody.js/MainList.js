import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MainList = () => {
  const MovieApi = "https://api.themoviedb.org/3/movie";
  const Api_Key = "7eead578dd4664c72c3041490fef851a";

  const [PopularList, SetPopularList] = useState();

  const GetMoviePopularList = async () => {
    try {
      const { data } = await axios.get(
        `${MovieApi}/popular?api_key=${Api_Key}`
      );
      console.log(data.results);
      SetPopularList(data.results);
    } catch (error) {}
  };

  //   const NextSlideBtn =() ={

  //   }
  console.log(MovieApi);
  useEffect(() => {
    GetMoviePopularList();
  }, []);

  return (
    <ListBox>
      <SliderBtn>넘기기</SliderBtn>
      <MovieCtn>
        {PopularList.map((movie) => {
          console.log(movie.poster_path);
          return (
            <MovieBox>
              <div> {movie.title}</div>
              <Poster>
                {" "}
                <img
                  align="center"
                  width="100%"
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
              </Poster>
            </MovieBox>
          );
        })}
      </MovieCtn>{" "}
      <SliderBtn className="right">넘기기</SliderBtn>
    </ListBox>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: aliceblue;
  position: relative;
  bottom: 470px;
  border-bottom: 5px solid black;
  display: flex;
  overflow: hidden;
`;

const MovieBox = styled.div`
  width: 16%;
  height: 100%;
  background-color: aqua;
  border-right: 2px solid black;
  flex: none;
`;

const MovieCtn = styled.div`
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 300px;
  display: flex;
  border: 5px solid black;
  /* margin-left: -1500px; */
`;
const SliderBtn = styled.button`
  z-index: 999;
  width: 100px;
  height: 400px;
  background-color: rebeccapurple;
  position: absolute;
  &.right {
    right: 0px;
  }
`;

const Poster = styled.div``;
export default MainList;
