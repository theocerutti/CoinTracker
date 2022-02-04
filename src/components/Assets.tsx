import React from 'react';
import {Asset} from '../types/exchanges';
import {View} from 'react-native';
import ccxt from 'ccxt';
import {useFormatPrice} from '../utils/convertPrice';
import styled from 'styled-components/native';
import {Text} from './Text';
import {spacing} from '../theme';

const AssetContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${spacing.sp8};
`;

const Assets = ({
  asset,
  ticker,
}: {
  asset: Asset;
  ticker: ccxt.Ticker | undefined;
}) => {
  return (
    <AssetContainer>
      <View>
        <Text>
          {asset.code} {asset.name}
        </Text>
        <Text variant="textSecondary">
          {asset.amount} | {useFormatPrice(ticker?.info.lastPrice)}
        </Text>
      </View>
      <View>
        <Text>{useFormatPrice(ticker?.info.lastPrice * asset.amount)}</Text>
      </View>
    </AssetContainer>
  );
};

export default Assets;
