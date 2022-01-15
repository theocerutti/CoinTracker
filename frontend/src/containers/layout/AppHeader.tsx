import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../components';
import styled from 'styled-components/native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {spacing} from '../../theme';
import {getThemePropSelector} from '../../utils/theme';
import {useDispatch, useSelector} from 'react-redux';
import {switchAutoTheme, themeSelector} from '../../store/slices/theme';
import {appName} from '../../constants';

const AppHeaderContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${spacing.sp10};
  background-color: ${getThemePropSelector('backgroundLevel3')};
  width: 100%;
  height: ${spacing.sp50};
`;

const DrawerIcon = styled(Icon)`
  color: ${getThemePropSelector('buttonPrimary')};
`;

const ThemeSwitcherIcon = styled(Icon)`
  color: ${getThemePropSelector('buttonPrimary')};
`;

const AppHeader = (props: DrawerHeaderProps) => {
  const dispatch = useDispatch();
  const {themeType} = useSelector(themeSelector);

  const onPressDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const onPressTheme = () => {
    dispatch(switchAutoTheme());
  };

  return (
    <AppHeaderContainer>
      <TouchableOpacity onPress={onPressDrawer}>
        <DrawerIcon name="bars" size={25} />
      </TouchableOpacity>
      <Text>{appName}</Text>
      <TouchableOpacity onPress={onPressTheme}>
        <ThemeSwitcherIcon
          name={themeType === 'dark' ? 'sun' : 'moon'}
          solid
          size={25}
        />
      </TouchableOpacity>
    </AppHeaderContainer>
  );
};

export default AppHeader;
