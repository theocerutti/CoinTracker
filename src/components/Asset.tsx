import React from 'react';
import {Asset as AssetType} from '../types/exchanges';
import {Image, View} from 'react-native';
import ccxt from 'ccxt';
import {formatPrice} from '../utils/convertPrice';
import styled from 'styled-components/native';
import {Text} from './Text';
import {spacing} from '../theme';
import {Separator} from './Separator';

const AssetContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${spacing.sp8} ${spacing.sp16} ${spacing.sp8} ${spacing.sp16};
`;

const LeftContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AssetLogo = styled(Image)`
  height: ${spacing.sp24};
  width: ${spacing.sp24};
  margin-right: ${spacing.sp8};
`;

export const Asset = ({
  asset,
  ticker,
}: {
  asset: AssetType;
  ticker: ccxt.Ticker | undefined;
}) => {
  return (
    <>
      <Separator/>
      <AssetContainer>
        <LeftContainer>
          <AssetLogo source={{uri: `https://cryptoicon-api.vercel.app/api/icon/${asset.code.toLowerCase()}`}}/>
          <View>
              <Text bold>
                {asset.code} {asset.name}
              </Text>
              <Text variant="textSecondary">
                {asset.amount} | {formatPrice(ticker?.info.lastPrice)}
              </Text>
            </View>
        </LeftContainer>
        <View>
          <Text bold>{formatPrice(ticker?.info.lastPrice * asset.amount)}</Text>
        </View>
      </AssetContainer>
    </>
  );
};
