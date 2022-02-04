import React from 'react';
import {useQuery} from 'react-query';
import {DEFAULT_CURRENCY_TICKER_EXCHANGE, REFETCH_PORTFOLIO_ASSET_PRICE, REFETCH_PORTFOLIO_ASSETS,} from '../../constants';
import {Asset, Spinner, Text} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {appConfigSelector} from '../../store/slices/appConfig';
import {useSelector} from 'react-redux';

const Portfolio = (props: any) => {
  const {currentExchange, globalExchange} = useSelector(appConfigSelector);
  const queryAssets = useQuery(
    'assets',
    async () => await currentExchange?.getMyAssets(),
    {
      refetchInterval: REFETCH_PORTFOLIO_ASSETS,
    },
  );

  const queryTickers = useQuery(
    'tickers',
    async () =>
      await globalExchange.fetchTickers(
        queryAssets.data?.map(
          asset => `${asset.code}/${DEFAULT_CURRENCY_TICKER_EXCHANGE}`,
        ),
      ),
    {
      refetchInterval: REFETCH_PORTFOLIO_ASSET_PRICE,
    },
  );

  return (
    <ScrollView>
      {queryAssets.isLoading && <Spinner size="large" />}
      {queryAssets.isError && <Text>Error</Text>}
      {queryAssets.isSuccess &&
        queryAssets.data?.map((asset, index) => (
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
    </ScrollView>
  );
};

export default Portfolio;
