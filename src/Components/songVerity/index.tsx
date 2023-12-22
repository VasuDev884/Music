import React from "react";
import {
  FlexWrapper,
  GridHolder,
  H4Typrography,
  Head,
  ImgHolder,
  IndexDiv,
  LandingPageHolder,
  SongAlbumName,
  SongTime,
  
} from "../landingPages/styledComponents";
import { Img, MainContainerHolder } from "../sider/styleComponents";
import { FaRegClock } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { SongPlay } from "../../redux/songfilter/action";
import { RootState } from "../../redux/store";
import { DummyData } from "../DummyArray";
import {  Scroller, VerityHolder } from "./styledComponents";

function Songvarieties() {
  const { Song } = useSelector((state: RootState) => ({
    Song: state.SongPlayData.Verites,
  }));

  const dispatch = useDispatch()
  const HandleClick = (ids:any) =>{
      const newData = DummyData.filter((data:any) => data.SongName=== ids);
      dispatch(SongPlay(newData))
  }

  console.log(Song);
  const arr = Song;
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.SongCategory === obj.SongCategory) === index
  );
  let FilterNames = unique;


  return (
    <LandingPageHolder>
      <MainContainerHolder>
      {FilterNames?.map((e:any , index:any)=>(
          <VerityHolder key={index}>{e.SongCategory}</VerityHolder>
        ))}
        <Head>
          <div>
            <H4Typrography>#</H4Typrography>
          </div>
          <div>
            <H4Typrography>Title</H4Typrography>
          </div>
          <div>
            <H4Typrography>Album</H4Typrography>
          </div>
          <div>
            <H4Typrography>
              <FaRegClock />
            </H4Typrography>
          </div>
        </Head>
        <Scroller>
          {Song?.map((e: any, index: any) => (
            <>
            <GridHolder key={index} onClick={(ids:any)=>HandleClick(e.SongName)}>
              <IndexDiv>{index + 1}</IndexDiv>
              <FlexWrapper>
                <ImgHolder>
                  <Img src={e.SongImg} />
                </ImgHolder>
                <div>
                  <H4Typrography>{e.SongName}</H4Typrography>
                  <H4Typrography>{e.SongSingerName}</H4Typrography>
                </div>
              </FlexWrapper>
              <SongAlbumName>
                <H4Typrography>{e.SongAlbumName}</H4Typrography>
              </SongAlbumName>
              <SongTime>
                <H4Typrography>{e.SongTime}</H4Typrography>
              </SongTime>
            </GridHolder>
            </>
          ))}
        </Scroller>
      </MainContainerHolder>
    </LandingPageHolder>
  );
}
export default Songvarieties;
