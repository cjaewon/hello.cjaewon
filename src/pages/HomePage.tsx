import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import Profile from '../components/common/Profile';
import Bio from '../components/common/Bio';

function HomePage() {
  return (
    <HomeTemplate>
      <Helmet>
        <title>Hello Cjaewon!</title>
        <meta
          name="description"
          content="cjaewon resume"
        />
      </Helmet>
      <main>
        <Profile />
        <Bio />
      </main> 
    </HomeTemplate>
  );
}

const HomeTemplate = styled.div`

`;

export default HomePage;