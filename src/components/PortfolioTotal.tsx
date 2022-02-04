import React from 'react';
import {View} from 'react-native';
import {Text} from './Text';
import styled from 'styled-components/native';
import {getThemePropSelector} from '../utils/theme';
import {fontSize} from '../theme';
import PortfolioChart from './PortfolioChart';

const Container = styled(View)`
  align-items: center;
  background-color: ${getThemePropSelector('backgroundLevel1')};
`;

const PortfolioTotal = () => {
  return (
    <Container>
      <Text bold size={fontSize.huge}>$267.37</Text>
      <PortfolioChart/>
    </Container>
  );
};

export default PortfolioTotal;