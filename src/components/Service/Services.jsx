import React from "react";
import { FaJava } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1>What I Did</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaJava}
            title={"Full Stack Java Developer"}
            disc={
            <p>
            At MINAB IT SOLUTIONS PLC, I worked as a Full Stack Java Developer from April 2019 to July 2022.
            During my tenure, I developed and deployed enterprise applications using Java, Spring, and Spring Boot. 
            I implemented Spring Security and Spring Dependency Injection for application security.
            Additionally, I designed and implemented service interfaces using microservices in an AWS environment. 
            I contributed to the development of a financial technology solution on a cloud-based platform. 
            I utilized technologies such as Angular.js, React, and Node.js for front-end development.
            </p>}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaJava}
            title={"Java Developer"}
            disc={`
            At AHADOO TECH IT SOLUTIONS PLC, I worked as a Java Developer from March 2018 to March 2019. 

            During this time, I contributed to the digitization of stock, sales, supply, and market management systems.
            I also assisted in software requirement and design specification processes, conducted back-end programming and database implementation, and designed user interfaces. 
            Additionally, I utilized technologies such as Java, Spring, Spring Boot, AWS, and Angular. 
            `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Software Developer"}
            disc={`At EPIC APPAREL PLC, I worked as a Software Developer from July 2017 to March 2018. 
            In this role, I utilized technologies such as Java, JavaScript, Git, and more to oversee front- and back-end programming and maintenance of internal enterprise applications. 
            I focused on designing user interfaces, conducting back-end programming, and implementing databases. Additionally, I implemented unit and integration testing to ensure application quality.
             I played a role in gathering, measuring, and organizing data to improve the data collection process. 
                  `}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
