import React, { useState } from "react";
import { Part2, ServicesMain, Title, Card, CardIcon, CardTitle, CardAbout } from "./styled";
import { TbWorldWww } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";




export const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <TbWorldWww/>,
      title: "Web Applications",
      about: "we have a lot of eh",
      to: "/web-app",
    },
    {
      icon: <PiStudentFill/>,
      title: "Courses",
      about: "we have a lot of eh",
      to: "/courses",
    },
    {
      icon: <CiMobile3/>,
      title: "Mobile Applications",
      about: "we have a lot of eh",
      to: "/mobile-applications",
    }
  ]);
  return (
    <ServicesMain>
      <Title>Our Services</Title>
      <Part2>
        {services.map((element, index) => {
          return (
            <Card>
              <CardIcon>{element.icon}</CardIcon>
              <CardTitle>{element.title}</CardTitle>
              <CardAbout>{element.about}</CardAbout>
            </Card>
          );
        })}
      </Part2>
    </ServicesMain>
  );
};
