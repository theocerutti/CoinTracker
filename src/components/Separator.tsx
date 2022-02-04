import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {getThemePropSelector} from '../utils/theme';
import {spacing} from '../theme';

const SeparatorContainer = styled(View)`
  width: 100%;
  height: ${spacing.sp1};
  background-color: ${getThemePropSelector('backgroundLevel4')};
`;

export const Separator = () => {
  return (
    <SeparatorContainer/>
  );
};
