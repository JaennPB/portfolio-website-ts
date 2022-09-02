import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const Nav = styled.nav`
  border-right: 2px solid #102a44;
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuHamburger = styled.div`
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;

  :hover {
    transform: scale(1.2);
  }
`;

const SocialLinks = styled.div`
  height: 25%;
  padding-bottom: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.div`
  font-size: 2.5rem;

  :hover {
    transform: scale(1.2);
  }
`;

interface Props {}

const NavLeft: React.FC<Props> = ({}) => {
  return (
    <Nav>
      <MenuHamburger>
        <FontAwesomeIcon icon={faRocket} />
      </MenuHamburger>
      <SocialLinks>
        <Link>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
      </SocialLinks>
    </Nav>
  );
};

export default NavLeft;
