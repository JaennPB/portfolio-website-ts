import React from "react";

import styled from "styled-components";

import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = styled.nav`
  border-bottom: 2px solid #284e73;
  grid-column: 2 / -1;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 2.5rem;
  margin-left: 6rem;

  display: flex;
  align-items: center;
`;

const ContactButton = styled.button`
  height: 100%;
  width: 30rem;
  font-size: 1.6rem;
  border: none;
  background-color: #254b6b;

  :hover {
    background-color: #2e5c83;
  }

  :active {
    opacity: 0.8;
  }

  transition: 100ms;
`;

const Icon = styled.p`
  background-color: #254b6b;
  color: white;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;

  border-radius: 0.5rem;

  margin-right: 1rem;
`;

const NavTop: React.FC = () => {
  return (
    <Nav>
      <Brand>
        <Icon>
          <FontAwesomeIcon icon={faTerminal} />
        </Icon>
        Jaenn Poumian
      </Brand>
      <ContactButton>Contact me</ContactButton>
    </Nav>
  );
};

export default NavTop;
