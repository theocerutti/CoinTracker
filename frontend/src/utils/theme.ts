import {
  Brand,
  BrandColorKey,
  HTMLColor,
  StyledComponentProps,
} from '../types/theme';

export const getThemePropSelector =
  (themeKey: BrandColorKey) =>
  (props: StyledComponentProps): HTMLColor => {
    return props.theme[themeKey];
  };

export const getTheme = (props: StyledComponentProps): Brand => {
  return props.theme;
};
