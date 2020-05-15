import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
  children: any,
};

const Touchable = (props: Props) => <TouchableOpacity {...props} />;

export default Touchable;
