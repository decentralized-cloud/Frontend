import React from "react";
import styled from "styled-components";

const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-125deg, var(--light), var(--dark));
`;

const Landing = () => {
  return <StyledLanding></StyledLanding>;
};

export default Landing;
