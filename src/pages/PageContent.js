import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  background-color: #f8f9fa;
`;

const MainImageContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  //height:50%;
  //max-height: 360px;
  margin-bottom: 0px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  //border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #3785b0;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  color: #6281ba;
  text-align: center;
  max-width: 800px;
`;

const CircularImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width:960px;
`;

const CircularImage = styled.img`
  width: 440px;
  height: 440px;
  border-radius: 5%;
  object-fit: cover;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #b4cad6;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates 3 equal-width columns */
  grid-gap: 100px; /* Adds 20px gap between grid items */
  padding: 50px;
  max-width: 1400px;
  margin-left: 130px;
  margin-right: 130px;
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const data = [
{topic: "CompTia Certificate Series", text: "Earn industry-recognized certifications like CompTIA Security+, PenTest+, and CySA+ to boost your cybersecurity career. These credentials validate essential skills in threat detection, vulnerability assessment, and ethical hacking. Stand out to employers with hands-on expertise in securing networks, systems, and data."},
    { topic: "Mentorship program", text: "Our mentorship program bridges the gap between students and industry professionals. We foster meaningful connections to support career exploration and growth. Students gain valuable insights, guidance, and real-world exposure through expert mentors." },
{ topic: "Stem workshops", text: "Our STEM workshops offer hands-on learning experiences in coding, robotics, and real-world problem solving. Students engage in interactive projects that build critical thinking, creativity, and collaboration skills. Designed to inspire future innovators, these workshops make technology fun, accessible, and impactful." },
  { topic: "Industry field-trips", text: "Industry field trips take students to factories and tech hubs to see STEM applications in real-world settings. These experiences help bridge classroom learning with practical industry insights and career awareness." },
  { topic: "Cyber Awareness Program", text: "Our Cyber Awareness Program educates students on the importance of online safety, digital responsibility, and cybersecurity fundamentals. The program empowers youth to protect their personal information and navigate the digital world confidently and securely." }
];
const Content = () => {
  return (
    <Container>
    <Heading>Cybersecurity and Strem Programs</Heading>
    <Paragraph> Let’s explore cybersecurity and STEM together by experimenting and innovating real-world tech solutions.</Paragraph>
      <GridContainer>
              {data.map((item, index) => (
            <GridItem><p>{item.topic}</p>{item.text}</GridItem>
        ))}
          </GridContainer>
    </Container>
  );
};

export default Content;
