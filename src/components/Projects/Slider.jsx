import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679257612/spring_t2vbig.webp",
        disc : "Expertise in building microservices-based application with Spring Boot, proficient in containerization, orchestration and deploying microservices in cloud environments using cutting-edge cloud tech."
    },
    {
        img : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679257374/jscript_hkz7ih.png",
        disc : "Proficiency in JavaScript has enabled me to build dynamic and responsive front-end and back-end user interfaces and applications. Using modern frameworks such as React and Angular on the front-end, and Node.js on the back-end."
    },
    {
        img : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679256368/jaava_fxtsws.jpg",
        disc : "With a deep understanding of Java core, I have a solid foundation in programming concepts and can develop robust, scalable, and maintainable software applications."
    },
    {
        img : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679259004/mongo_rypfjr.jpg",
        disc : "Experience with MongoDB has equipped me with the skills to design and develop high-performance, scalable, and fault-tolerant databases, using advanced features such as sharding, replication, and aggregation."
    },
    {
        img : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679258578/aws_hvlk0s.avif",
        disc : "Proficient in utilizing Amazon Web Services (AWS) to design and implement highly scalable and resilient solutions on the AWS platform. Experience with a wide range of AWS services, including EC2, ECS, EKS, ECS Fargate, ELB, EBS, S3, VPC, IAM, SQS, RDS, SNS, Lambda, CloudWatch, API Gateway, Terraform, Aurora, Route53, MSK, Kinesis, CloudFormation, Elastic Beanstalk, Autoscaling, DynamoDB, and more. Familiarity with monitoring tools such as Datadog to ensure efficient performance and effective management of AWS resources."
    },
    {
      img : "https://i.morioh.com/b93618229c.png",
      disc : "Proficiency in using Angular to develop complex and dynamic web applications with a focus on performance and scalability. Familiar with modern front-end development tools and practices such as TypeScript, RxJS, and reactive programming."
    },
    {
      img : "https://blog.logrocket.com/wp-content/uploads/2021/02/react-usememo-reactmemo.png?is-pending-load=1",
      disc : "Expertise in using React to build high-quality, reusable UI components and dynamic user interfaces. Familiar with modern front-end development tools and practices such as Redux, webpack, and testing frameworks."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`