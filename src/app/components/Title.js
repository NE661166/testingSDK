import React, {PureComponent} from 'react';
import {WhiteSpace} from '@ant-design/react-native';
import {scale} from '../utils/styles';
import Text from './Text';
import View from './View';

type Props = {
  value?: Object,
  noPadding?: boolean,
  onPress?: Function,
  noBold?: boolean,
  lineHeight?: Number,
  size?: string,
  color?: string,
  paddingHorizontal?: Number,
};

const getPaddingHorizontal = (noPadding, paddingHorizontal) => {
  if (noPadding) {
    return 0;
  } else if (paddingHorizontal) {
    return paddingHorizontal;
  }
  return scale(10);
};

class Title extends PureComponent<Props> {
  render() {
    const {
      noPadding,
      paddingHorizontal,
      noBold,
      color,
      size,
      value,
      lineHeight,
    } = this.props;
    return (
      <View
        paddingHorizontal={getPaddingHorizontal(noPadding, paddingHorizontal)}>
        <View flexDirection="row" alignItems="center">
          <Text
            weight={noBold ? 'normal' : 'bold'}
            size={size || 'xl'}
            color={color || 'dark.text.primary'}>
            {value}
          </Text>
        </View>
        <WhiteSpace size="sm" />
        <View
          height={lineHeight ? scale(lineHeight) : scale(2)}
          backgroundColor="#ED1B2E"
          width={scale(40)}
        />
        <WhiteSpace size="sm" />
        <WhiteSpace size="sm" />
      </View>
    );
  }
}

export default Title;
