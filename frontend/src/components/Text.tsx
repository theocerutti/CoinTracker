import {getThemePropSelector} from '../utils/theme';
import {Text as BasicText} from 'react-native';
import styled from 'styled-components/native';

export const Text = styled(BasicText)`
  font-family: Roboto;
  color: ${getThemePropSelector('textPrimary')};
`;
