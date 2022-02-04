import React from 'react';
import {useQuery} from 'react-query';
import {DEFAULT_CURRENCY_TICKER_EXCHANGE, REFETCH_PORTFOLIO_ASSET_PRICE, REFETCH_PORTFOLIO_ASSETS,} from '../../constants';
import {Asset, Spinner, Text} from '../../components';
import {coinbase, globalExchange} from '../../App';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import PortfolioTotal from '../../components/PortfolioTotal';

const Portfolio = (props: any) => {
  const queryAssets = useQuery(
    'assets',
    () => coinbase.getMyAssets(),
    {
      refetchInterval: REFETCH_PORTFOLIO_ASSETS,
    },
  );

  const queryTickers = useQuery(
    'tickers',
    () =>
      globalExchange.fetchTickers(
        queryAssets.data?.map(
          asset => `${asset.code}/${DEFAULT_CURRENCY_TICKER_EXCHANGE}`,
        ),
      ),
    {
      refetchInterval: REFETCH_PORTFOLIO_ASSET_PRICE,
    },
  );

  const queryTransactions = useQuery(
    'transactions',
    () => coinbase.getMyTransactions()
  );

  console.log(JSON.stringify(queryTransactions?.data, undefined, 2));

  return (
    <ScrollView>
      {queryAssets.isLoading && <Spinner size="large" />}
      {queryAssets.isError && <Text>Error</Text>}
      {queryAssets.isSuccess &&
        <View>
          <PortfolioTotal/>
          {queryAssets.data.map((asset, index) => (
            <Asset
              key={index}
              ticker={
                queryTickers.data?.[
                  `${asset.code}/${DEFAULT_CURRENCY_TICKER_EXCHANGE}`
                  ]
              }
              asset={asset}
            />
          ))}
        </View>
      }
    </ScrollView>
  );
};

export default Portfolio;
