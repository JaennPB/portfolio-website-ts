import type { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import ArrowToProjects from "../components/ArrowToProjects";

import Dashboard from "../components/Dashboard";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";

const Main = styled.main`
  background-color: #03355d;
  height: 100vh;
  display: grid;
  grid-template-columns: 6rem 1fr 30rem;
  grid-template-rows: 6rem 1fr;

  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jaenn Poumian | React Dev</title>
        <meta name="description" content="Created with Next.js by JaennPB" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Main>
        <NavLeft />
        <NavTop />
        <Dashboard />
        <ArrowToProjects />
      </Main>
    </div>
  );
};

export default Home;
