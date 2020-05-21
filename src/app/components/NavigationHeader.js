import React, {PureComponent} from 'react';
import {View, Dimensions, ImageBackground} from 'react-native';
import {Flex} from '@ant-design/react-native';
import styled from 'styled-components/native';
import {scale, navBarMarginTop} from '../utils/styles';

const Logo = styled.Image`
  width: ${scale(128)};
  height: ${scale(68)};
  resize-mode: contain;
  margin-left: ${scale(10)};
  margin-top: ${scale(10)};
  margin-bottom: ${scale(10)};
`;

class NavigationHeader extends PureComponent {
  render() {
    return (
      <View>
        <View style={{backgroundColor: 'white'}}>
          <Flex marginTop={navBarMarginTop} direction="column">
            <Logo source={require('../img/logo_main.jpg')} />
          </Flex>
          <Flex direction="column">
            <ImageBackground
              source={require('../img/bg_header.jpg')}
              style={{
                width: Dimensions.get('window').width,
                height: scale(10),
              }}
            />
          </Flex>
        </View>
      </View>
    );
  }
}

export default NavigationHeader;
