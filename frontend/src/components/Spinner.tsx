import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {getThemePropSelector} from '../utils/theme';

export const Spinner = styled(ActivityIndicator)`
  color: ${getThemePropSelector('textPrimary')};
`;
