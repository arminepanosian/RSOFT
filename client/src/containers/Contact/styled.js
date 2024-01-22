import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #296ebd;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    min-height: 100vh;
    background-color: white;
  }
  @media (max-width: 991px) {
    background-color: white;

    &::before {
      display: none;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  min-width: 1100px;
  min-height: 550px;
  display: flex;
  z-index: 1000;
  @media (max-width: 1200px) {
    width: 90%;
    min-width: auto;
    margin: 20px;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContactInfo = styled.div`
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px);
  background-color: #296ebd;
  z-index: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1200px) {
    top: 0;
    height: 500px;
    position: relative;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
  }
`;

export const ContactForm = styled.div`
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1200px) {
    position: relative;
    width: calc(100% - 350px);
    padding-left: 0;
    margin-left: 0;
    padding: 40px;
    height: 500px;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
  }
`;

export const ContactInfoMainDiv = styled.div``;

export const ContactInfoH2 = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

export const Info = styled.ul`
  position: relative;
  margin: 20px 0;
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  margin: 20px 0;
  cursor: pointer;
  align-items: flex-start;
`;

export const ContactInfoSpan1 = styled.span`
  width: 30px;
  min-width: 30px;
`;

export const ContactInfoSpan = styled.span`
  color: white;
  margin-left: 10px;
  font-weight: 300;
`;

export const IconImg = styled.img`
  max-width: 100%;
  filter: invert(1);
`;

export const ContactFormH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  /* color:#296ebd ; */
`;

export const FormBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 35px;
  width: 47%;
`;

export const InputBox2 = styled.div`
  position: relative;
  margin-bottom: 35px;
  width: 100%;
`;

export const ContactFormSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
  color: gray;
`;

export const Input1 = styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: black;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  @media (max-width: 391) {
    font-size: 14px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: black;
  border: none;
  outline: none;
  resize: none;
  border-bottom: 1px solid;
`;

export const SubmitButton = styled.input`
  position: relative;
  cursor: pointer;
  background-color: #296ebd;
  color: white;
  border: none;
  max-width: 150px;
  padding: 12px;
`;

export const ErrorMessage = styled.span`
  color: red;
`;
