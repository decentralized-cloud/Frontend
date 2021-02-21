import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
`;

const Header = () => {
  return <StyledHeader>meow</StyledHeader>;
};

export default Header;
