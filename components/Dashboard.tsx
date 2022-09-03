import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  padding: 6rem;
`;

const Heading = styled.p`
  font-size: 5rem;
  font-weight: 300;
`;

const HeadingAccent = styled.span`
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;

const ImgContainer = styled.div`
  background-color: red;
  height: 200px;
  width: 200px;
  border-radius: 10rem;

  margin-right: 2.5rem;

  overflow: hidden;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 2.5rem;
`;

const Dashboard: React.FC = () => {
  return (
    <Section>
      <HeadingContainer>
        <ImgContainer>
          <Image alt="me" src="/me.png" height={200} width={200} />
        </ImgContainer>
        <Heading>
          Web & Mobile App <HeadingAccent>Developer</HeadingAccent>
        </Heading>
      </HeadingContainer>
      <Description>
        I design and create beautiful, modern and powerful full-stack
        applications for IOS, Android and the Web.
        <br />
        <br />I am deeply focused on staying updated and using current and
        in-demand tecnologies for my projects. The main technologies I like to
        use are: React Native for mobile development and React.Js with Next.Js
        for web applications. I use TypeScript for all my projects and Firebase
        is my back-end of choice.
      </Description>
    </Section>
  );
};

export default Dashboard;
