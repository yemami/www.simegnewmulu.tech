import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        years:"2022 - Present",
        name : "Mahrishi International University",
        position : "MSc in Computer Science",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679264567/miu_naucl8.jpg",
        disc : `I am currently pursuing an MSc in Computer Science at Maharishi International University, where I am immersing myself in the latest advancements in the field.
         Through hands-on projects and collaborations with fellow students, I am gaining practical experience and honing my problem-solving and critical thinking skills.
          I am excited to apply my expertise to real-world challenges and drive impactful results in the industry.`
    },
    {
        years:"2013 - 2017",
        name : "Hawassa University",
        position : "BSc in Computer Science",
        img_url : "https://netstorage-tuko.akamaized.net/images/0fgjhs41agvqjl1si.jpg?imwidth=300",
        disc : `As a BSc Computer Science graduate from Hawassa University, 
        I possess a strong foundation in software development and a wide range of skills to excel in the field.
         My education has equipped me with a deep understanding of computer systems, programming languages, and software engineering principles.
          I am excited to apply my knowledge and expertise to contribute to innovative projects and drive impactful results in the industry.`
    },
    
    {
        years:"2021 - Present",
        name : "Udemy",
        position : "Crash Courses",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679267036/udemy_y1nsbl.png",
        disc : `I have completed professional courses on AWS and Java programming on Udemy, acquiring valuable skills in cloud computing and software development.`
    },
   
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Education</span>
            <h1>where I study</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`