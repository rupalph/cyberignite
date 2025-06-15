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
  { topic: "The Science of Slime", text: "Investigate different slime recipes, varying ingredients like glue type, activator, and additives. Test properties like viscosity, elasticity, and stretchiness. Create a controlled experiment and analyze the results. Consider the chemical reactions involved." },
  { topic: "Plant Growth Under Different Light Conditions", text: "Design an experiment to test the effects of different light colors (wavelengths) or intensities on plant growth. Measure growth rate, leaf size, and overall health. Research the role of light in photosynthesis." },
  { topic: "The Impact of Sound on Human Concentration", text: "Conduct a study on how different types of music or background noise affect the ability to focus and complete tasks. Use a standardized test or puzzle. Analyze the results and consider the psychology of attention." },
    { topic: "The Correlation Between Exercise and Heart Rate", text: "Design an experiment to measure heart rate changes during different types and intensities of exercise. Analyze the data and research the cardiovascular system's response to physical activity. Explore the long-term health benefits of exercise.." },

];
const Content = () => {
  return (
    <Container>
    <Heading>Science Programs</Heading>
    <Paragraph> Let's try experimenting and innovating solutions together. </Paragraph>

      <GridContainer>
              {data.map((item, index) => (

            <GridItem><p>{item.topic}</p>{item.text}</GridItem>
        ))}

          </GridContainer>
    </Container>
  );
};

export default Content;
