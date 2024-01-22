import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bg from "../../assets/images/bg.png";
import Mard1 from "../../assets/images/pic-1.jpg";
import Mard2 from "../../assets/images/pic-2.jpg";
import Mard3 from "../../assets/images/pic-3.jpg";

// Styled Components
const StyledHeader = styled.header`
  background-image: url(${Bg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledContainerLeft = styled.div`
  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--primary-color);
  }

  p {
    color: var(--text-dark);
    margin-bottom: 1rem;
  }

  button {
    padding: 1rem 2rem;
    margin-top: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      var(--primary-color),
      var(--primary-color-dark)
    );
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
  }
`;

const StyledContainerRight = styled.div`
  display: grid;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCard = styled.div`
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background-color: var(--white);
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const StyledCardImage = styled.img`
  max-width: 75px;
  border-radius: 100%;
`;

const StyledCardContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledCardDetails = styled.div`
  p {
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }

  h4 {
    text-align: right;
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 500;
  }
`;

// React Component
const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    try {
      const getRev = async () => {
        const request = await fetch("https://rsoft.onrender.com/reviewsAll");
        const response = await request.json();
        setReviews(response.reverse());
      };
      getRev()
    } catch (err) {
      console.log(err);
    }
  },[]);
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContainerLeft>
          <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button>
        </StyledContainerLeft>
        <StyledContainerRight>
          {reviews?.map((e, i) => {
            return (
              <StyledCard key={e+i}>
                <StyledCardImage src={Mard1} alt="user" />
                <StyledCardContent>
                  <StyledCardDetails>
                    <p>
                      {e.description}
                    </p>
                    <h4>- {e.name} {e.lastName}</h4>
                  </StyledCardDetails>
                </StyledCardContent>
              </StyledCard>
            );
          })}
        </StyledContainerRight>
      </StyledContainer>
    </StyledHeader>
  );
};

export { Testimonials };
