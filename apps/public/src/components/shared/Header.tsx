import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 2.3rem;
  font-weight: 500;
  color: var(--white);
  text-transform: capitalize;
`;

const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  height: 100%;
  cursor: pointer;
  padding: 1rem;
  font-size: 2rem;
  color: var(--white);
`;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 1rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>edge cloud-9</Logo>
      <NavContainer>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Meow</NavItem>
      </NavContainer>
      <ButtonContainer>
        <Button>sign in</Button>
        <Button primary>request a demo</Button>
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;
