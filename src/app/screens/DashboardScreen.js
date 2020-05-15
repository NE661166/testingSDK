import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Flex, WhiteSpace} from '@ant-design/react-native';
import {scale} from '../utils/styles';
import {View, Title, Text, Button} from '../components';

export default class DashboardScreen extends Component {
  componentDidMount() {
    // fetch(
    //   'https://eibtest.southeastasia.cloudapp.azure.com/clientws/portfolio/overview/details',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${this.props.route.params.accessToken}`,
    //     },
    //   },
    // )
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View>
        {/* <View backgroundColor="white">
          <Image
            source={require('../../../img/dashboardbackground.jpg')}
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
            {this.renderAccountNameSection()}
            <View showShadow backgroundColor="white" padding={scale(18)}>
              {this.renderAccountOverallDetailSection()}
            </View>
          </View>
        </View> */}

        {/* <View
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
              <Icon
                name="angle-right"
                color="#ED1B2E"
                size={scale(18)}
                style={{textAlign: 'center', marginLeft: scale(8)}}
              />
            </View>
          </View>
        </View> */}

        <WhiteSpace size="lg" />
        <Text size={scale(10)} textAlign="center">
          Summary as of summaryDate
        </Text>
      </View>
    );
  }
}

/*
class DashBoardScreen extends PureComponent {
  renderAccountNameSection = () => (
    <View>
      <WhiteSpace size="xl" />
      <Title
        noPadding
        size={scale(20)}
        color="#262626"
        value="Welcome, Goh Swee Kee"
        removeSentenceCap
      />
      <WhiteSpace size="md" />
      <Text size="s" color="black">
        You have 1 pending transaction(s).
      </Text>
      <WhiteSpace size="sm" />
      <View flexDirection="row" alignItems="center">
        <Text size="s" weight="semibold" color="#ED1B2E">
          View Transaction(s)
        </Text>
        <Icon
          name="angle-right"
          color="#ED1B2E"
          size={scale(18)}
          style={{ textAlign: 'center', marginLeft: scale(8) }}
        />
      </View>
      <WhiteSpace size="xl" />
    </View>
  );

  renderAccountOverallDetailSection = () => (
    <View>
      <View>
        <View flexDirection="row" alignItems="center">
          <Text size="xs">Overall balance</Text>
          <Button >
            <Icon name="info-circle" size={scale(13)} color="#68737A" />
          </Button>
        </View>
        <Flex align="start" direction="row">
          <Text marginRight={scale(4)} size="xl" weight="bold">
            MYR 1,848,488.33
          </Text>
        </Flex>
      </View>
      <WhiteSpace />
      <Flex direction="row">
        <View flex={1}>
          <View flexDirection="row" alignItems="center">
            <Text size="xs">Net flow</Text>
            <Button>
              <Icon name="info-circle" size={scale(13)} color="#68737A" />
            </Button>
          </View>
          <Flex align="start" direction="row">
            <Text weight="bold">MYR 1,719,354.31</Text>
          </Flex>
        </View>
        <View flex={1}>
          <View flexDirection="row" alignItems="center">
            <Text size="xs">Total profit/loss</Text>
            <Button>
              <Icon name="info-circle" size={scale(13)} color="#68737A" />
            </Button>
          </View>
          <Flex align="start" direction="row">
            <Text weight="bold">
              MYR -106,830.89
            </Text>
          </Flex>
        </View>
      </Flex>
    </View>
  );

  render() {
    return (
      <View>
        <View backgroundColor="white">
          <Image
            source={require('../../../img/dashboardbackground.jpg')}
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
            {this.renderAccountNameSection()}
            <View showShadow backgroundColor="white" padding={scale(18)}>
              {this.renderAccountOverallDetailSection()}
            </View>
          </View>
        </View>

        <View
          backgroundColor="white"
          marginHorizontal={scale(12)}
          showShadow
          paddingVertical={scale(12)}
          paddingHorizontal={scale(18)}
        >
          <View flexDirection="row" justifyContent="space-between">
            <View flexDirection="row" alignItems="center">
              <Text size="xs" weight="bold" color="#ED1B2E">
            View accounts
              </Text>
              <Icon
                name="angle-right"
                color="#ED1B2E"
                size={scale(18)}
                style={{ textAlign: 'center', marginLeft: scale(8) }}
              />
            </View>
          </View>
        </View>

        <WhiteSpace size="lg" />
        <Text size="xs" textAlign="center">
          Summary as of summaryDate
        </Text>
      </View>
    );
  }
}

export default DashBoardScreen;

 */
