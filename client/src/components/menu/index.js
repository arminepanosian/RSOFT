import React, { useState } from "react";
import {
  MainMenu,
  LogoDiv,
  SpanR,
  Departments,
  DepartmentsContainer,
  LanguageRamka,
  HeaderLanguage,
  LanguageDiv,
  LangImg,
  LangText,
  ResMenuIcon,
  IconSpan,
  ResDiv,
  RamkaDiv,
  MenuLinks
} from "./styled";
import i18n from "i18next";
import am from "../../assets/images/am.png";
import ru from "../../assets/images/ru.png";
import en from "../../assets/images/en.png";
import { RxDropdownMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
export const Menu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lang") || "ru"
  );
  const [selectLangImg, setSelectLangImg] = useState(
    localStorage.getItem("src") || ru
  );
const loc = useLocation()

  const [pages, setPages] = useState([
    { inner: "Home", path: "/", choosen: loc.pathname === "/" ? true : false, },
    { inner: "Contact", path: "/contact", choosen: loc.pathname === "/contact" ? true : false, },
    { inner: "Reviews", path: "/review", choosen: loc.pathname === "/review" ? true : false, },
  ]);
  const [openLang, setOpenLang] = useState(false);
  const languages = [
    { code: "am", name: "AM", src: `${am}` },
    { code: "ru", name: "RU", src: `${ru}` },
    { code: "en", name: "EN", src: `${en}` },
  ];
  const [resMenu , setResmenu] = useState(false)

  const handleSelectLang = (code, src) => {
    setSelectedLanguage(code);
    localStorage.setItem("lang", code);
    localStorage.setItem("src", src);
    i18n.changeLanguage(code);
    setOpenLang(!openLang);
    setSelectLangImg(src);
    setOpenLang(!openLang);
  };

  const menuColor = (e, i) => {
    let x = pages.slice();
    x.map((element, indexes) => {
      if (indexes === i) element.choosen = true;
      else element.choosen = false;
    });
    setPages(x);
  };
  return (
    <MainMenu>

      <LogoDiv to={"/"}>
        <SpanR>R</SpanR>'SOFT
      </LogoDiv>
      <DepartmentsContainer>
        {pages.map((element, index) => {
          return (
            <Departments
              key={index}
              to={element.path}
              $active={element.choosen}
              onClick={() => menuColor(element, index)}
            >
              {element.inner}
            </Departments>
          );
        })}
      </DepartmentsContainer>
      <LanguageRamka>
        <HeaderLanguage onClick={() => setOpenLang(!openLang)}>
          <LangImg src={`${selectLangImg}` || `${ru}`} />
          <LangText>{selectedLanguage}</LangText>
        </HeaderLanguage>
        {openLang && (
          <LanguageDiv>
            {languages.map((element) => {
              return (
                <HeaderLanguage
                  key={element.code}
                  onClick={() => handleSelectLang(element.code, element.src)}
                >
                  <LangImg src={element.src} value={element.src} />
                  <LangText>{element.code}</LangText>
                </HeaderLanguage>
              );
            })}
          </LanguageDiv>
        )}
      </LanguageRamka>
      <ResMenuIcon onClick={() => setResmenu((e) => !e)}>
        <IconSpan>
        <RxDropdownMenu />
        </IconSpan>
      </ResMenuIcon>
      <ResDiv $resMenu = {resMenu}>
      {pages.map((element, index) => {
          return (
            <MenuLinks
              key={index}
              to={element.path}
              $active={element.choosen}
              onClick={() => menuColor(element, index)}
            >
              {element.inner}
            </MenuLinks>
          );
        })}
      </ResDiv>
      {resMenu ? <RamkaDiv $resMenu = {resMenu} onClick={() => setResmenu((e) => !e)}/> : null}

    </MainMenu>
  );
};
