import React, { FC } from 'react';
import { Directory } from '../../components';

import { HomePageContainer } from './homepage.styles';

export const HomePage: FC<any> = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
