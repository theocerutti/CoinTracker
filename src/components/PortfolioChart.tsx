import React from 'react';
import {View} from 'react-native';
import {VictoryChart, VictoryLine} from 'victory-native';
import {useSelector} from 'react-redux';
import {themeSelector} from '../store/slices/theme';

const PortfolioChart = () => {
  const { theme } = useSelector(themeSelector)

  return (
    <View>
      <VictoryChart theme={{
        axis: {
          style: {
            axis: {
              fill: "transparent",
              stroke: theme.textPrimary,
              strokeWidth: 1,
            },
            grid: {
              fill: "none",
              stroke: "none",
              pointerEvents: "painted"
            },
            ticks: {
              fill: "transparent",
              size: 1,
              stroke: "transparent"
            },
            tickLabels: {
              padding: 10,
              fill: theme.textPrimary,
              stroke: theme.textPrimary
            }
          }
        },
        line: {
          style: {
            data: {
              stroke: theme.textPrimary
            },
          },
        },
      }}>
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          interpolation={"cardinal"}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 }
          ]}
        />
      </VictoryChart>
    </View>
  );
};

export default PortfolioChart;