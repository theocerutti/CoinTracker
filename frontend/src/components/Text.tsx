import {getTheme} from '../utils/theme';
import {Text as BasicText} from 'react-native';
import styled from 'styled-components/native';
import {Brand} from '../types/theme';
import {fontSize} from '../theme';

export const Text = styled(BasicText)<{
  variant?: 'textPrimary' | 'textSecondary' | 'textTertiary'; //Pick<Brand, 'textPrimary'>;
}>`
  font-family: Roboto;
  color: ${props => getTheme(props)[props.variant || 'textPrimary']};
  font-size: ${props => {
    switch (props.variant) {
      default:
      case 'textPrimary':
        return fontSize.base;
      case 'textSecondary':
        return fontSize.small;
      case 'textTertiary':
        return fontSize.smaller;
    }
  }};
`;

type UpdatePostDto = Pick<Brand, 'textPrimary'>;

const updateDto: UpdatePostDto = {
  textPrimary: '1',
};
