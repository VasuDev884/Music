import React, { useEffect, useState } from "react";
import { Img, MainContainerHolder } from "../sider/styleComponents";
import {
  LandingPageHolder,
  Scroller,
  SubName,
  MusicHolder,
  Imgholder,
  SongName,
  NameHolder,
  MainName,
  AllAlbumDisplay,
} from "./styledComponents";
import { DummyData } from "../DummyArray/index";
import { useDispatch } from "react-redux";
import { SongPlay, SongVerity } from "../../redux/songfilter/action";
import { Link } from "react-router-dom";

function LandingPage() {
  const [Data, setData] = useState<any>([]);
  const [Song, setSong] = useState<any>([]);
  const dispatch = useDispatch();
  const HandleClick = (ids: any) => {
    const newData = DummyData.filter((data: any) => data.SongName === ids);
    dispatch(SongPlay(newData));
  };

  let value = DummyData.sort(() => Math.random() - Math.random()).slice(0, 1);
  useEffect(() => {
    setData(value);
  }, []);

  useEffect(() => {
    value.map((e: any) => {
      const MainSongs = DummyData.filter(
        (data: any) => data.SongCategory === e.SongCategory
      );
      setSong(MainSongs);
    });
  }, []);
  console.log(Song);

  const HandleClickData = (ids: any) => {
    const SongData = DummyData.filter((data: any) => data.SongAlbumName === ids);
    dispatch(SongVerity(SongData));
  };
  return (
    <LandingPageHolder>
      <MainContainerHolder>
        <Scroller>
          <MainName>Playlists</MainName>
          <AllAlbumDisplay>
            {DummyData?.slice(0, 5).map((e, index) => (
              <Link to={'/list'}>
             <MusicHolder
                key={index}
                onClick ={()=>HandleClickData(e.SongAlbumName)}
               >
                <div>
                  <Imgholder>
                    <Img src={e.SongImg} /> 
                  </Imgholder>
                  <NameHolder>
                  <SongName >{e.SongAlbumName}</SongName>
                    <SubName>{e.SongSingerName}</SubName>
                  </NameHolder>
                </div>
              </MusicHolder>
              </Link>
            ))}
          </AllAlbumDisplay>
          <>
            {Data?.map((e: any) => (
              <MainName>
                {e.SongCategory} <Link to={'/list'}><h5 onClick ={()=>HandleClickData(e.SongAlbumName)}>see all</h5></Link>
              </MainName>
            ))}
            <AllAlbumDisplay>
              {Song?.slice(0, 5).map((e: any, index: any) => (
                <MusicHolder
                  key={index}
                  onClick={(ids) => HandleClick(e.SongName)}
                >
                  <div>
                    <Imgholder>
                      <Img src={e.SongImg} />
                    </Imgholder>
                    <NameHolder>
                    <Link to={'/list'}><SongName  onClick ={()=>HandleClickData(e.SongAlbumName)}>{e.SongAlbumName}</SongName></Link> 
                      <SubName>{e.SongSingerName}</SubName>
                    </NameHolder>
                  </div>
                </MusicHolder>
              ))}
            </AllAlbumDisplay>
          </>
        </Scroller>
      </MainContainerHolder>
    </LandingPageHolder>
  );
}

export default LandingPage;
