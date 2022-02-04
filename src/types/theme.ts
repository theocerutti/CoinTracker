export type StyledComponentProps = any;

export type ThemeType = 'light' | 'dark';

export type Theme = Record<ThemeType, Brand>;

export type HTMLColor = string;
export type BrandColorKey = keyof Brand;
export type Brand = {
  statusHealthy: HTMLColor;
  statusWarning: HTMLColor;
  statusCritical: HTMLColor;
  selectedActive: HTMLColor;
  highlight: HTMLColor;
  border: HTMLColor;
  buttonPrimary: HTMLColor;
  buttonSecondary: HTMLColor;
  buttonDelete: HTMLColor;
  infoPrimary: HTMLColor;
  infoSecondary: HTMLColor;
  backgroundLevel1: HTMLColor;
  backgroundLevel2: HTMLColor;
  backgroundLevel3: HTMLColor;
  backgroundLevel4: HTMLColor;
  textPrimary: HTMLColor;
  textSecondary: HTMLColor;
  textTertiary: HTMLColor;
  textReverse: HTMLColor;
  textLink: HTMLColor;
};

export type FontSize = {
  smaller: string;
  small: string;
  base: string;
  large: string;
  larger: string;
  big: string;
  bigger: string;
  huge: string;
  massive: string;
};

export type FontWeight = {
  light: string;
  base: string;
  semibold: string;
  bold: string;
};

export type ZIndex = {
  tooltip: number;
  notification: number;
  modal: number;
  overlay: number;
  dropdown: number;
  nav: number;
  sidebar: number;
  scrollbarButton: number;
  base: number;
};

export type Spacing = {
  sp0: string;
  sp1: string;
  sp2: string;
  sp4: string;
  sp8: string;
  sp10: string;
  sp12: string;
  sp14: string;
  sp16: string;
  sp20: string;
  sp24: string;
  sp28: string;
  sp32: string;
  sp40: string;
  sp50: string;
};
