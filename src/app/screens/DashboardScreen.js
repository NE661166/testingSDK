import React, {Component} from 'react';
import {Image} from 'react-native';
import {Flex, WhiteSpace} from '@ant-design/react-native';
import {scale} from '../utils/styles';
import {View, Title, Text, Spinner} from '../components';
import get from 'lodash/get';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {
        currency: '',
        investorId: '',
        investorName: '',
        summaryDate: '',
        totalMarketValue: '',
        totalMarketValuePercent: '',
        totalNetFlow: '',
        totalProfitOrLossAmt: '',
        totalProfitOrLossPercent: '',
      },
    };
  }

  componentDidMount() {
    fetch(
      'https://eibtest.southeastasia.cloudapp.azure.com/clientws/portfolio/overview/details',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${get(
            this.props,
            'route.params.accessToken',
            '',
          )}`,
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          data: json.data,
        });
      })
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {isLoading, data} = this.state;

    if (isLoading) {
      return <Spinner visible={true} />;
    }

    return (
      <View>
        <View backgroundColor="white">
          <Image
            source={require('../img/dashboardbackground.jpg')}
            style={{
              position: 'absolute',
              zIndex: 1,
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }}
          />
          <View
            position="absolute"
            zIndex={2}
            width="100%"
            height="100%"
            backgroundColor="rgba(255,255,255, 0.3)"
          />
          <View zIndex={3} paddingHorizontal={scale(12)}>
            <View>
              <WhiteSpace size="xl" />
              <Title
                noPadding
                size={scale(20)}
                color="#262626"
                value={`Welcome, ${data.investorName}`}
                removeSentenceCap
              />
              <WhiteSpace size="md" />
              <Text size={scale(12)} color="black">
                You have 1 pending transaction(s).
              </Text>
              <WhiteSpace size="sm" />
              <View flexDirection="row" alignItems="center">
                <Text size={scale(12)} weight="semibold" color="#ED1B2E">
                  View Transaction(s)
                </Text>
              </View>
              <WhiteSpace size="xl" />
            </View>

            <View showShadow backgroundColor="white" padding={scale(18)}>
              <View>
                <View>
                  <View flexDirection="row" alignItems="center">
                    <Text size={scale(10)}>Overall balance</Text>
                  </View>
                  <Flex align="start" direction="row">
                    <Text marginRight={scale(4)} size={scale(20)} weight="bold">
                      {`${data.currency} ${data.totalMarketValue}`}
                    </Text>
                  </Flex>
                </View>
                <WhiteSpace />
                <Flex direction="row">
                  <View flex={1}>
                    <View flexDirection="row" alignItems="center">
                      <Text size={scale(10)}>Net flow</Text>
                    </View>
                    <Flex align="start" direction="row">
                      <Text weight="bold">{`${data.currency} ${
                        data.totalNetFlow
                      }`}</Text>
                    </Flex>
                  </View>
                  <View flex={1}>
                    <View flexDirection="row" alignItems="center">
                      <Text size={scale(10)}>Total profit/loss</Text>
                    </View>
                    <Flex align="start" direction="row">
                      <Text weight="bold">{`${data.currency} ${
                        data.totalProfitOrLossAmt
                      }`}</Text>
                    </Flex>
                  </View>
                </Flex>
              </View>
            </View>
          </View>
        </View>

        <View
          backgroundColor="white"
          marginHorizontal={scale(12)}
          showShadow
          paddingVertical={scale(12)}
          paddingHorizontal={scale(18)}>
          <View flexDirection="row" justifyContent="space-between">
            <View flexDirection="row" alignItems="center">
              <Text size={scale(10)} weight="bold" color="#ED1B2E">
                View accounts
              </Text>
            </View>
          </View>
        </View>

        <WhiteSpace size="lg" />
        <Text size={scale(10)} textAlign="center">
          {`Summary as of ${data.summaryDate}`}
        </Text>
      </View>
    );
  }
}
