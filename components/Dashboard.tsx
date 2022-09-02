import React from "react";

import styled from "styled-components";

const Section = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

interface Props {}

const Dashboard: React.FC<Props> = ({}) => {
  return <Section>Dashboard</Section>;
};

export default Dashboard;
