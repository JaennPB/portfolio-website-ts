import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
  border-right: 2px solid #102a44;
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  display: flex;
  flex-direction: column;
`;

const MenuHamburger = styled.div`
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 6rem;
`;

interface Props {}

const NavLeft: React.FC<Props> = ({}) => {
  return (
    <Nav>
      <MenuHamburger>Menu</MenuHamburger>
      <SocialLinks>
        <p>LinkedIn</p>
        <p>Upwork</p>
      </SocialLinks>
    </Nav>
  );
};

export default NavLeft;
