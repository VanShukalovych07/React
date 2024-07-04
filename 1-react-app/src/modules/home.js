import React, { useState } from "react";

const Home = () => {
  const [value, useValue] = useState(0);
  return (
    <>
      <p>Counter</p>
      <p>{value}</p>
      <button> </button>
    </>
  );
};
export default Home;
