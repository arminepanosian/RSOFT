import React from "react";
import {
  ContactForm,
  ContactInfo,
  ContactInfoH2,
  ContactInfoMainDiv,
  ContactInfoSpan,
  Container,
  Li,
  Info,
  MainSection,
  IconImg,
  ContactInfoSpan1,
  FormBox,
  InputBox,
  Input1,
  ContactFormSpan,
  InputBox2,
  Textarea,
  ContactFormH2,
  SubmitButton,
  ErrorMessage,
} from "./styled";

import { useForm } from "react-hook-form";
import { useValidation, yupResolver } from "../../validations/sendMessage";

import LocImg from "../../assets/images/location.png";
import MailImg from "../../assets/images/mail.png";
import CallPng from "../../assets/images/call.png";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(useValidation()),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const req = await fetch("https://rsoft.onrender.com/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainSection>
      <Container>
        <ContactInfo>
          <ContactInfoMainDiv>
            <ContactInfoH2>Contact Info</ContactInfoH2>
            <Info>
              <Li>
                <ContactInfoSpan1>
                  <IconImg src={LocImg}></IconImg>
                </ContactInfoSpan1>
                <ContactInfoSpan>
                  2912 Meadowbrook Road <br />
                  Los Angeles, Ca <br />
                  90017
                </ContactInfoSpan>
              </Li>
              <Li>
                <ContactInfoSpan1>
                  <IconImg src={MailImg}></IconImg>
                </ContactInfoSpan1>
                <ContactInfoSpan>lorem@ipsum.am</ContactInfoSpan>
              </Li>
              <Li>
                <ContactInfoSpan1>
                  <IconImg src={CallPng}></IconImg>
                </ContactInfoSpan1>
                <ContactInfoSpan>055-71-02-08</ContactInfoSpan>
              </Li>
            </Info>
          </ContactInfoMainDiv>
        </ContactInfo>
        <ContactForm>
          <ContactFormH2>Send a message</ContactFormH2>
          <FormBox>
            <InputBox>
              <Input1
                type="text"
                required
                placeholder="First Name"
                {...register("name", {
                  required: true,
                })}
              />
              <ErrorMessage>{errors.name ? errors.name : null}</ErrorMessage>
            </InputBox>
            <InputBox>
              <Input1
                type="text"
                required
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                })}
              />
              <ErrorMessage>{errors.lastName ? errors.lastName : null}</ErrorMessage>
            </InputBox>
            <InputBox>
              <Input1
                type="email"
                placeholder="Email Adress"
                {...register("email", {
                  required: true,
                })}
              />
              <ErrorMessage>{errors.email ? errors.email : null}</ErrorMessage>
            </InputBox>
            <InputBox>
              <Input1
                type="text"
                placeholder="Mobile Number"
                {...register("phone", {
                  required: true,
                })}
              />
              <ErrorMessage>{errors.phone ? errors.phone : null}</ErrorMessage>
            </InputBox>
            <InputBox2>
              <Textarea
                placeholder="Write your message here..."
                {...register("message", {
                  required: true,
                })}
              ></Textarea>
              <ErrorMessage>{errors.message ? errors.message : null}</ErrorMessage>
            </InputBox2>
            <InputBox2>
              <SubmitButton
                onClick={handleSubmit(onSubmit)}
                type="submit"
                value="Send"
              />
            </InputBox2>
          </FormBox>
        </ContactForm>
      </Container>
    </MainSection>
  );
};
