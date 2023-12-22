import styled from "styled-components";

export const LandingPageHolder = styled.div`
  width: 152%;
  height: 37.9rem;
  margin-left: -24px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 8px;
  height: 30px;
  margin-top: 10px;
`;

export const Scroller = styled.div`
  overflow-y: scroll;
  height: 580px;
  padding-right: 10px;
  margin-top: 10px;
  width: 101.5%;
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightgray;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #242424;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export const AllAlbumDisplay = styled.div`
  display: flex;
`;

export const GridHolder = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 30% 10%;
  &:hover {
    background-color: #873e4a;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-left: 50px;
  margin-top: 10px;
  height: 60px;
`;

export const ImgHolder = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IndexDiv = styled.div`
  width: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: lightgray;
`;

export const SongAlbumName = styled.div`
  width: 150px;
  height: 100%;
  margin-left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SongTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H4Typrography = styled.h4`
  color: lightgray;
  font-weight: 600;
`;

export const MusicHolder = styled.div`
  width: 195px;
  height: 245px;
  background-color: #1b1b1b;
  margin: 0px 20px 10px 0px;
  padding: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  &:hover {
    background-color: #343333;
  }
`;

export const Imgholder = styled.div`
  width: 170px;
  height: 150px;
  margin: 5px 0px 10px 3px;
`;

export const NameHolder = styled.div`
  height: 60px;
  width: 150px;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const SongName = styled.h3`
  color: white;
  font-weight: 700;
  font-size: 15px;
`;

export const SubName = styled.h3`
  color: #8b8a8a;
  font-weight: 400;
  font-size: 15px;
`;

export const MainName = styled.h4`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
  width: 95.5%;
  margin: 10px 0px 20px 0px;
`;
