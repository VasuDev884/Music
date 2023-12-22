import React from "react";
import { MainContainerHolder } from "../sider/styleComponents";
import { AudioHolder } from "./styledComponents";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Audio = () => {
  const { MainSong } = useSelector((state: RootState) => ({
    MainSong: state.SongPlayData.AllSong,
  }));

  const arr = MainSong;

  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.SongTime === obj.SongTime) === index
  );
  let FilterName = unique;
  let Song: any;

  FilterName.map((e: any) => {
    Song = e.SongPath;
  });
  console.log(Song);

  return (
    <AudioHolder>
      <MainContainerHolder>
        <AudioPlayer
          autoPlay
          src={Song}
          onPlay={(e) => console.log("onPlay")}
          style={{
            marginTop: "-5px",
            borderRadius: "10px",
            backgroundColor: "#242424",
            boxShadow: "none",
          }}
        />
      </MainContainerHolder>
    </AudioHolder>
  );
};

export default Audio;
