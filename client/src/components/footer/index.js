import React from "react";
import {
  FooterDiv,
  FooterMenu,
  FooterMenuText,
  FooterMenuDiv,
  FooterMenuHr,
  FooterInfo,
  FooterInfoDivs,
  FooterInfoIconDiv,
  FooterInfoIcon,
  InfoTitle,
  FooterInfoDiv,
  Info,
  FooterBottom,
  FooterBottomDivs,
  PayImg,
  PayDiv,
  TitleFooter,
  FooterIcon,
  FooterIconDiv,
  FooterLinks,
} from "./styled";
import { IoCallSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";

import pay from "../../assets/images/pay.png";
import { BsFillCreditCard2FrontFill as Card } from "react-icons/bs";

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FooterDiv>
        <FooterMenu>
          <FooterMenuDiv>
            <FooterMenuText>Home</FooterMenuText>
          </FooterMenuDiv>

          <FooterMenuDiv>
            <FooterMenuText>Contact</FooterMenuText>
          </FooterMenuDiv>
          <FooterMenuDiv>
            <FooterLinks onClick={scrollToTop} to="rewiev">
              <FooterMenuText>Reviews</FooterMenuText>
            </FooterLinks>
          </FooterMenuDiv>
                    <FooterMenuHr />
        </FooterMenu>

        <FooterInfo>
          <FooterInfoDivs>
            <FooterInfoIconDiv>
              <FooterInfoIcon>
                <IoCallSharp />
              </FooterInfoIcon>
            </FooterInfoIconDiv>
            <FooterInfoDiv>
              <InfoTitle>+37493409047 , +37498420244</InfoTitle>
              <br />
              
            </FooterInfoDiv>
          </FooterInfoDivs>
          <FooterInfoDivs>
            <FooterInfoIconDiv>
              <FooterInfoIcon>
                <BiTimeFive />
              </FooterInfoIcon>
            </FooterInfoIconDiv>
            <FooterInfoDiv>
              <InfoTitle>{t("fInfoT2")}</InfoTitle>
              <br />
              <Info>
                {t("fInfo2")} <InfoTitle>10։00-20։00</InfoTitle>
              </Info>
            </FooterInfoDiv>
          </FooterInfoDivs>

          <FooterInfoDivs>
            <FooterInfoIconDiv>
              <FooterInfoIcon>
                <FaRegAddressCard />
              </FooterInfoIcon>
            </FooterInfoIconDiv>
            <FooterInfoDiv>
              <InfoTitle>Ք․ Էյմիածին  </InfoTitle>
              <br />
              <Info>
              Բաղրամյան / 24
              </Info>
            </FooterInfoDiv>
          </FooterInfoDivs>

          <FooterInfoDivs>
            <FooterInfoIconDiv>
              <FooterInfoIcon>
                <Card />
              </FooterInfoIcon>
            </FooterInfoIconDiv>
            <FooterInfoDiv>
              <InfoTitle>{t("fInfoT4")}</InfoTitle>
              <br />
              <Info>{t("fInfo4")}</Info>
            </FooterInfoDiv>
          </FooterInfoDivs>
        </FooterInfo>
        <FooterBottom>
          <FooterBottomDivs>
            <FooterIconDiv>
              <FooterIcon>
                <BsTelegram />
              </FooterIcon>
              <FooterIcon>
                <BsFacebook />
              </FooterIcon>
              <FooterIcon>
                <BsYoutube />
              </FooterIcon>
            </FooterIconDiv>
          </FooterBottomDivs>

          <FooterBottomDivs>
            <TitleFooter>Все права защищены &copy;</TitleFooter>
          </FooterBottomDivs>
          <FooterBottomDivs>
            <PayImg src={pay} />
          </FooterBottomDivs>
        </FooterBottom>
      </FooterDiv>
    </>
  );
};
