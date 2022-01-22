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
import {switchAutoCurrency} from '../../store/slices/settings';

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

const ActionIcon = styled(Icon)`
  color: ${getThemePropSelector('buttonPrimary')};
`;

const ActionButtons = styled(View)`
  display: flex;
  flex-direction: row;
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

  const onPressCurrency = () => {
    dispatch(switchAutoCurrency());
  };

  return (
    <AppHeaderContainer>
      <TouchableOpacity onPress={onPressDrawer}>
        <ActionIcon name="bars" size={25} />
      </TouchableOpacity>
      <Text>{appName}</Text>
      <ActionButtons>
        <TouchableOpacity onPress={onPressCurrency}>
          <ActionIcon name="btc" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressTheme}>
          <ActionIcon
            name={themeType === 'dark' ? 'sun' : 'moon'}
            solid
            size={25}
          />
        </TouchableOpacity>
      </ActionButtons>
    </AppHeaderContainer>
  );
};

export default AppHeader;
