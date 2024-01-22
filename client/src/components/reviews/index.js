import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PersonReview1 from "../../assets/images/image1.jpg";
// import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialsSection = styled.div`
  width: 100%;
  padding: 0 8%;
`;

const SectionHeader = styled.header`
  max-width: 700px;
  text-align: center;
  margin: 30px auto 40px;
`;

const H1 = styled.h1`
  position: relative;
  font-size: 36px;
  color: var(--primary-clr);
`;

const TestimonialsContainer = styled.div`
  position: relative;
`;

const TestimonialCard = styled.div`
  padding: 20px;
`;

const TestCardBody = styled.main`
  background-color: var(--card-clr);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.12);
  padding: 20px;
`;

const Quote = styled.div`
  display: flex;
  align-items: center;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 45px;
  color: var(--heading-clr);
  margin-right: 20px;
  color: #296ebd;
`;

const QuoteHeading = styled.h2`
  color: var(--heading-clr);
`;

const Paragraph = styled.p`
  margin: 10px 0 15px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-clr);
`;

const Ratings = styled.div`
  margin-top: 20px;
`;

const StarIcon = styled(FaStar)`
  font-size: 17px;
  color: var(--primary-clr);
  cursor: pointer;
  color: yellow;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const ProfileImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #296ebd;
`;

const Description = styled.span`
  font-size: 15px;
  color: var(--text-clr);
`;

const OwlNav = styled.div`
  position: absolute;
  right: 20px;
  bottom: -10px;
`;

const OwlButton = styled.button`
  border-radius: 50% !important;
`;

const OwlPrevIcon = styled(FaArrowLeft)`
  padding: 10px !important;
  border-radius: 50%;
  font-size: 18px !important;
  background-color: var(--card-clr) !important;
  color: var(--primary-clr);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: var(--primary-clr) !important;
    color: #e9e9e9;
  }
`;

const OwlNextIcon = styled(FaArrowRight)`
  padding: 10px !important;
  border-radius: 50%;
  font-size: 18px !important;
  background-color: var(--card-clr) !important;
  color: var(--primary-clr);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: var(--primary-clr) !important;
    color: #e9e9e9;
  }
`;

const OwlDots = styled.div`
  margin-top: 15px;
`;

const OwlDot = styled.span`
  background-color: #434753 !important;
  padding: 6px !important;

  &.active span {
    background-color: var(--primary-clr) !important;
  }
`;

const Testimonials = () => {
  const [topRev, setTopRev] = useState([]);

  useEffect(() => {
    const getF = async () => {
      try {
        const req = await fetch(`https://rsoft.onrender.com/reviewsTop`);
        const res = await req.json();
        console.log(res);
        const response = res.filter((e, i) => {
          return e.confirmed === true;
        });
        setTopRev(response);
      } catch (err) {
        console.log(err);
      }
    };
    getF();
  }, []);

  return (
    <TestimonialsSection>
      <SectionHeader>
        <H1>What Clients Say</H1>
      </SectionHeader>

      {topRev?.map((element, index) => {
        return (
          <TestimonialCard key={element + index}>
            <TestCardBody>
              <Quote>
                <QuoteIcon />
                <QuoteHeading>R'SOFT</QuoteHeading>
              </Quote>
              <Paragraph>{element.description}</Paragraph>
              <Ratings>
                {Array.from({ length: element.stars }, (_, index) => (
                  <StarIcon key={index} />
                ))}
              </Ratings>
            </TestCardBody>
            <Profile>
              <ProfileImage>
                <Image src={PersonReview1} alt="Person 1" />
              </ProfileImage>
              <ProfileDesc>
                <Name>
                  {element.name} {element.lastName}
                </Name>
                <Description>{element.position}</Description>
              </ProfileDesc>
            </Profile>
          </TestimonialCard>
        );
      })}
      <Link style={{ marginLeft: "23px" }} to="/review">
        See all reviews
      </Link>
    </TestimonialsSection>
  );
};

export { Testimonials };
