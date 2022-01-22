import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components';
import ccxt from 'ccxt';

const Portfolio = (props: any) => {
  const Coinbase = new ccxt.coinbase({
    apiKey: 'YEwB1avWVSjrKQwv',
    secret: 'iQvoDDGCiC2eScPlp2YDE3humvGV7Hqd',
  });

  const balance = Coinbase.balance;

  console.log(balance);

  return (
    <View>
      <Text>Portfolio</Text>
    </View>
  );
};

export default Portfolio;
