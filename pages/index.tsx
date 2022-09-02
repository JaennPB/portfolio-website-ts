import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Dashboard from "../components/Dashboard";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";

const Main = styled.main`
  background-color: #011627;
  height: 100vh;
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 6rem 1fr;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaenn Poumian | React Dev</title>
        <meta name="description" content="Created with Next.js by JaennPB" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Main>
        <NavLeft />
        <NavTop />
        <Dashboard />
      </Main>
    </>
  );
};

export default Home;
