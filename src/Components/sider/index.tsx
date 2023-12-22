import React from "react";
import {
  MainContainerHolder,
  SiderHolder,
  H2Typrography,
  LogoHolder,
  Img,
  ContectHolder,
  AboutHolder,
  CategoryHolder,
  CategoryBox,
} from "./styleComponents";
import { IoHome, IoSearch } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import LogoImg from "../../assests/D-removebg-preview.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DummyData } from "../DummyArray";
import { SongVerity } from "../../redux/songfilter/action";


function Sider() {
  const dispatch = useDispatch();
  const HandleClick = (ids: any) => {
    const newData = DummyData.filter((data: any) => data.SongCategory === ids);
    dispatch(SongVerity(newData));
  };

  const arr = DummyData;
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.SongCategory === obj.SongCategory) === index
  );
  let FilterNames = unique;

  return (
    <SiderHolder>
      <MainContainerHolder>
        <LogoHolder>
          <Img src={LogoImg} />
        </LogoHolder>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <H2Typrography>
            <IoHome style={{ marginRight: "25px", fontSize: "23px" }} /> Home
          </H2Typrography>
        </Link>
        <H2Typrography>
          <IoSearch style={{ marginRight: "25px", fontSize: "23px" }} /> Search
        </H2Typrography>
      </MainContainerHolder>

      <MainContainerHolder>
        <CategoryHolder>
          {FilterNames.map((e: any, index: any) =>
            e.SongCategory === "Rock" ? (
              <CategoryBox
                key={index}
                style={{
                  backgroundImage:
                    'url("https://www.sharetopros.com/blog/images/5-indie-rock-bands-who-changed-music-forever/5-indie-rock-bands-who-changed-music-forever-img-cover-1.webp")',
                  backgroundSize:'60%', backgroundRepeat:'no-repeat', 
                backgroundColor:'green'}}
              >
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "Pop" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#148a08" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "Jazz" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#8c1932" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "Party" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#e13300" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "HipHop" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#8400e7" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "K-pop" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#a56752" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "Workout" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#1e3264" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "Travel" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#8400e7" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : e.SongCategory === "PodCasts" ? (
              <CategoryBox key={index} style={{ backgroundColor: "#006450" }}>
                <Link to={"/list"} style={{ textDecoration: "none" }}>
                  <H2Typrography
                    onClick={(ids: any) => HandleClick(e.SongCategory)}
                  >
                    {e.SongCategory}
                  </H2Typrography>
                </Link>
              </CategoryBox>
            ) : (
              ""
            )
          )}
        </CategoryHolder>
      </MainContainerHolder>

      <MainContainerHolder>
        <ContectHolder>
          <FaInstagram
            style={{ fontSize: "30px", color: "white", marginRight: "20px" }}
          />
          <FaFacebookF
            style={{ fontSize: "25px", color: "white", marginRight: "20px" }}
          />
          <FaLinkedinIn
            style={{ fontSize: "30px", color: "white", marginRight: "20px" }}
          />
        </ContectHolder>
        <AboutHolder>
          <h6>Legal</h6>
          <h6>Privacy Center</h6>
          <h6>Privacy Policy</h6>
          <h6>Cookies</h6>
          <h6>About us</h6>
        </AboutHolder>
      </MainContainerHolder>
    </SiderHolder>
  );
}

export default Sider;
