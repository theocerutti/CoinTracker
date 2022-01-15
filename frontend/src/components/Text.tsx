import {getThemePropSelector} from '../utils/theme';
import {Text as BasicText} from 'react-native';
import styled from 'styled-components/native';

export const Text = styled(BasicText)`
  color: ${getThemePropSelector('textPrimary')};
`;
