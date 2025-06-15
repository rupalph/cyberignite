import React from 'react';
import Content from "./Content";

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'centre',
        alignItems: 'centre',
        height: '100vh'
      }}
    >
      <Content/>
    </div>
  );
};

export default Home;