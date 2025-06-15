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
  font-size: 16px;
  color: #333;
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
  width: 300px;
  height: 200px;
  border-radius: 5%;
  object-fit: cover;
  //box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  //border: 1px solid #b4cad6;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const GridContainer = styled.div`
  display: grid;
 // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Key change here */
  grid-gap: 80px; /* Adds 20px gap between grid items */
  padding: 20px;
margin-left: 130px;
  margin-right: 130px;
`;

const GridItem = styled.div`
display: grid;
  background-color: #f0f0f0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 80px;
  padding: 30px;
  text-align: justify;
    //flex-basis: auto;

`;

const data = [
  { topic: "Identify issues in your community", text: "Talk to your neighbors and social media for your community to find out what problems residents are facing. From there make a lit of problems. Pick a problem and research if there is existing solution. If there is, how can you improve it to make it cost effective and easy to use. Conduct surveys with people in your community to see if your solution will help them solve the problem", img:"./images/issues.jpg" },
  { topic: "Build a prototype for your solution", text: "A good place to start building prototype: https://projecthub.arduino.cc/", img:"./images/projects.jpg"},
];
const PageContentResources = () => {
  return (
    <Container>
    <Heading>Resources</Heading>


      <GridContainer>
              {data.map((item, index) => (

            <GridItem><p>{item.topic}</p>{item.text}<CircularImage src={item.img} /> </GridItem>
        ))}

          </GridContainer>
    </Container>
  );
};

export default PageContentResources;
