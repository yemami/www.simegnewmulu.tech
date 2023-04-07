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
            At MINAB IT SOLUTIONS, Addis Ababa, Ethiopia 2019-2022, I worked as a Full Stack Java Developer: Coordinated teams on client sites to develop,
            analyze and maintain enterprise applications, provide data verification and conduct system trainings. 
            Developed and deployed enterprise applications,Implemented Spring Security and Spring Dependency Injection,
          	Developed and analyzed user requirements; translated to technical specifications,Developed functionalities according to client requirements,
          	Tested and implemented applications and systems,Developed and implemented service interfaces using microservices,
            Ensured quality of code; trained and mentored junior developers,Assisted in developing Hahujobs Industry Park labor recruitment application with biometric identification for worker and job seeker registration. 
          
            
            </p>}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaJava}
            title={"Full Stack Java Developer"}
            disc={`At AHADOO TECH IT PLC. SOLUTIONS, Addis Ababa, Ethiopia 2018-2019, 
            I worked as a Software Developer & Hub Officer: Assisted in architecting, designing, and developing software using Java. 
            Ensured code quality as key team leader and mentor.
            I Contributed to full-stack 
            projects, designed interactive websites, provided ongoing support, 
            and used Java, JavaScript, Spring-Boot, React, Hibernate, MongoDB, 
            Maven
            Digitized stock, sales, supply, and market management systems. 
            Implemented unit and integration testing using various frameworks. 
            Assisted in software requirement and design specification process. 
            Designed user interfaces; conducted back-end programming and database implementation. 
            `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Software Developer"}
            disc={`At EPIC APPAREL PLC., Hawassa, Ethiopia • 2017-2018 I worked as a Software Developer: Oversaw front- and back-end programming and maintenance of internal enterprise applications. 
                  Built intuitive and functional user interfaces.
                  Developed user requirements and translated to technical specifications.
                  Implemented unit and integration testing. 
                	Gathered, measured and organized data, improving data collection process. 
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
