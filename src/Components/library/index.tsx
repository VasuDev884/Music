import React from "react";
import { Img, MainContainerHolder } from "../sider/styleComponents";
import {
  ImgHolder,
  LibraryHolder,
  SongPlayComponent,
  SongNameHolder,
  TimeHolder,
  SongPlaying,
} from "./styledComponents";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { H4Typrography } from "../landingPages/styledComponents";

function Library() {
  const { MainSong } = useSelector((state: RootState) => ({
    MainSong: state.SongPlayData.AllSong,
  }));

  const arr = MainSong;
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.SongName === obj.SongName) === index
  );
  let FilterName = unique;

  return (
    <LibraryHolder>
        <MainContainerHolder>
          {FilterName.map((e: any, index: any) => (
            <SongPlayComponent>
              <ImgHolder>
                <Img src={e.SongImg} />
              </ImgHolder>
              <SongNameHolder>
                <H4Typrography>{e.SongName}</H4Typrography>
                <H4Typrography>{e.SongAlbumName}</H4Typrography>
              </SongNameHolder>
              <TimeHolder>
                <H4Typrography>{e.SongTime}</H4Typrography>
              </TimeHolder>
            </SongPlayComponent>
          ))}
      </MainContainerHolder>
    </LibraryHolder>
  );
}

export default Library;
