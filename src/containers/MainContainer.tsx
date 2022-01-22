import React from 'react';
import {fontSize} from '../theme';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {getThemePropSelector} from '../utils/theme';

const Container = styled(View)`
  font-size: ${fontSize.base};
  color: ${getThemePropSelector('textPrimary')};
`;

const MainContainer = (props: any) => {
  return <>{props.children}</>;
};

export default MainContainer;
