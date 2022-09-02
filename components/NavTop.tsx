import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: 2px solid #102a44;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 2rem;
  margin-left: 6rem;
`;

const ContactButton = styled.button`
  height: 100%;
  width: 15%;
  font-size: 1.6rem;
  border: none;
  background-color: #1d3b53;

  :hover {
    background-color: #254b6b;
  }

  :active {
    opacity: 0.8;
  }
`;

interface Props {}

const NavTop: React.FC<Props> = ({}) => {
  return (
    <Nav>
      <Brand>Jaenn Poumain</Brand>
      <ContactButton>Contact me</ContactButton>
    </Nav>
  );
};

export default NavTop;
