import {FontSize, FontWeight, Spacing, Theme, ZIndex} from './types/theme';

export const theme: Theme = {
  light: {
    statusHealthy: '#009E93',
    statusWarning: '#E77B00',
    statusCritical: '#C10004',
    selectedActive: '#90D0FF',
    highlight: '#E3F2FD',
    border: '#898989',
    buttonPrimary: '#9DA6EC',
    buttonSecondary: '#CACFE3',
    buttonDelete: '#FFCDD2',
    infoPrimary: '#5C486D',
    infoSecondary: '#EBE3F1',
    backgroundLevel1: '#F9F9FB',
    backgroundLevel2: '#F3F3F5',
    backgroundLevel3: '#EAEAEC',
    backgroundLevel4: '#DBDBDD',
    textPrimary: '#101010',
    textSecondary: '#515170',
    textTertiary: '#B5B5B5',
    textReverse: '#EAEAEA',
    textLink: '#1349C5',
  },
  dark: {
    statusHealthy: '#0AADA6',
    statusWarning: '#F8F32B',
    statusCritical: '#E84855',
    selectedActive: '#037AFF',
    highlight: '#1A3C75',
    border: '#313131',
    buttonPrimary: '#2F4185',
    buttonSecondary: '#595A78',
    buttonDelete: '#3D0808',
    infoPrimary: '#8E8EAC',
    infoSecondary: '#333366',
    backgroundLevel1: '#121219',
    backgroundLevel2: '#323245',
    backgroundLevel3: '#232331',
    backgroundLevel4: '#171721',
    textPrimary: '#EAEAEA',
    textSecondary: '#B5B5B5',
    textTertiary: '#B5B5B5',
    textReverse: '#000000',
    textLink: '#71AEFF',
  },
};

export const fontSize: FontSize = {
  smaller: '10px',
  small: '12px',
  base: '14px',
  large: '16px',
  larger: '20px',
  big: '24px',
  bigger: '30px',
  huge: '40px',
  massive: '60px',
};

export const fontWeight: FontWeight = {
  light: '400',
  base: '400',
  semibold: '600',
  bold: '700',
};

export const zIndex: ZIndex = {
  tooltip: 9990,
  notification: 9000,
  modal: 8500,
  overlay: 8000,
  dropdown: 7000,
  nav: 500,
  sidebar: 100,
  scrollbarButton: 2,
  base: 1,
};

export const spacing: Spacing = {
  sp0: '0px',
  sp1: '1px',
  sp2: '2px',
  sp4: '4px',
  sp8: '8px',
  sp10: '10px',
  sp12: '12px',
  sp14: '14px',
  sp16: '16px',
  sp20: '20px',
  sp24: '24px',
  sp28: '28px',
  sp32: '32px',
  sp40: '40px',
  sp50: '50px',
};

export default theme;
