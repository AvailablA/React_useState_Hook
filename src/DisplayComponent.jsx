import React from 'react';

const DisplayComponent = ({ data }) => {
  return (
    <>
      <h1>NAME: {data.name}</h1>
      <h2>GENDER: {data.gender}</h2>
      <h3>EMAIL: {data.email}</h3>
      <h4>MOBILE: {data.mobile}</h4>
     
    </>
  );
};

export default DisplayComponent;


 {/* <button onClick={() => window.location.reload()}>Reset Display</button> */}