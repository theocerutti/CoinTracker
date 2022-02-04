import {getTheme} from '../utils/theme';
import {Text as BasicText} from 'react-native';
import styled from 'styled-components/native';
import {Brand, FontSize} from '../types/theme';
import {fontSize, fontWeight} from '../theme';

export const Text = styled(BasicText)<{
  size?: FontSize[keyof FontSize],
  variant?: 'textPrimary' | 'textSecondary' | 'textTertiary'; //Pick<Brand, 'textPrimary'>;
  bold?: boolean
}>`
  font-family: Roboto;
  color: ${props => getTheme(props)[props.variant || 'textPrimary']};
  font-size: ${props => {
    if (props.size) return props.size;
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
  font-weight: ${props => props.bold ? fontWeight.bold : fontWeight.base};
`;

type UpdatePostDto = Pick<Brand, 'textPrimary'>;

const updateDto: UpdatePostDto = {
  textPrimary: '1',
};
