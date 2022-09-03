import styled from "styled-components";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContainer = styled.section`
  border-left: 2px solid #284e73;
  grid-column: 3 / -1;
  grid-row: 2 / -1;

  :hover {
    background-color: #254b6b;
    border-left: 2px solid #254b6b;
  }

  transition: 150ms;
`;

const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 10rem;
  font-weight: 300;

  :hover {
    transform: translateX(1.5rem);
  }

  transition: 150ms;
`;

const ArrowToProjects = () => {
  return (
    <ArrowContainer>
      <Icon>
        <FontAwesomeIcon icon={faChevronRight} />
      </Icon>
    </ArrowContainer>
  );
};

export default ArrowToProjects;
