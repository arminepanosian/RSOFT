import React from "react";
import RazImg from "../../assets/images/raz.jpeg";
import AmImg from "../../assets/images/ameli.jpg";
import AndImg from "../../assets/images/and.jpg";

import {
  CardContainer,
  PosterContainer,
  PosterOverlay,
  PosterImage,
  DetailsContainer,
  InfoContainer,
  RatingContainer,
  RatingSpan,
  DepartmenTitle,
  MembersDiv,
  MainSTaff,
} from "./styled";

const MovieCard = () => {
  const staffMembers = [
    {
      name: "Razmik",
      lastName: "Tiratsvyan",
      posititon: "CEO Founder and MERN-STACK developer",
      about:
        "Razmik has 3 years of experience in this field and he loves chess.",
      img: RazImg,
    },
    {
      name: "Armine",
      lastName: "Panosyan",
      posititon: "Back-End | Python Engineer",
      about:
        "Armine has 2 years of experience in back-end development. She loves read ficion books and watch films",
      img: AmImg,
    },
    {
      name: "Andranik",
      lastName: "Hakobyan",
      posititon: "Front-End developer",
      about:
        "Andranik has 2 years of experience in front-end development. he loves read books and the docs about programming",
      img: AndImg,
    },
  ];
  return (
    <MainSTaff>
      <DepartmenTitle>STAFF MEMBERS</DepartmenTitle>
      <MembersDiv>
        {staffMembers.map((element, index) => {
          return (
            <CardContainer>
              <PosterContainer>
                <PosterOverlay />
                <PosterImage src={element.img} />
              </PosterContainer>
              <DetailsContainer>
                <h1 style={{ fontSize: "31px" }}>
                  {element.name} {element.lastName}
                </h1>
                <h5>{element.posititon}</h5>
                <RatingContainer>
                  <RatingSpan>
                    <span style={{ color: "white" }}>R</span>'SOFT
                  </RatingSpan>
                </RatingContainer>
                <InfoContainer>{element.about}</InfoContainer>
              </DetailsContainer>
            </CardContainer>
          );
        })}
        <div
          style={{
            width: "100%",
            height: "70px",
            position: "relative",
            zIndex: 9999,
          }}
        >
        </div>
      </MembersDiv>
    </MainSTaff>
  );
};

export { MovieCard };
