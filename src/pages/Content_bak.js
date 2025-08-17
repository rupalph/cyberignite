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
  gap: 60px;
  margin-top: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width:960px;
`;
const CircularImageDiv = styled.div`
 background: url("./image1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
      border-radius: 50%;
      height: 100px;
      width: 100px;

`;
const CircularImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  border: 2px solid #b4cad6;
`;
const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const data = [
  { src: "/image1.png", text: "Research" },
  { src: "/image2.png", text: "Learn" },
  { src: "/image3.png", text: "Apply your knowledge" },
];

const Content = () => {
  return (
    <Container>
      <MainImageContainer>
        <MainImage src="/img2.jpg" alt="Highlight" />
      </MainImageContainer>
      <Heading>Empower and guide young individuals to pursue careers in cybersecurity</Heading>
      <Paragraph>Help underprivileged students earn valuable cybersecurity certifications and connect with industry professionals for mentorship and career guidance. </Paragraph>
      <CircularImagesContainer>
        {data.map((item, index) => (
          <Item key={index}>
            <CircularImage src={item.src} alt={item.text} />
            <Text>{item.text}</Text>
          </Item>
        ))}
      </CircularImagesContainer>
    </Container>

  );
};

export default Content;
