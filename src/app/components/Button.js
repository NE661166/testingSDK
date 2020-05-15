import React from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons';
import styled, {css} from 'styled-components/native';
import {withTheme} from 'styled-components';
import isString from 'lodash/isString';
import Touchable from './Touchable';
import Text from './Text';
import View from './View';
import ImgIcon from './Icon';
import {is, isStyledBy, isStyledThemeBy, scale} from '../utils/styles';

type RightIconProps = {
  name?: any,
  iconSize?: Number,
  color?: string,
  solid?: boolean,
  light?: boolean,
};

const RightIcon = ({
  name: R,
  iconSize,
  color,
  light,
  solid,
}: RightIconProps) => {
  if (!R) {
    return null;
  }
  if (typeof R === 'string') {
    return (
      <Icon
        name={R}
        size={iconSize !== undefined ? scale(iconSize) : scale(8)}
        color={color}
        light={light}
        solid={solid}
        style={{textAlign: 'center', marginLeft: scale(6)}}
      />
    );
  }
  return R;
};

type Props = {
  footer?: boolean,
  block?: boolean,
  borderRounded?: boolean,
  solid?: boolean,
  light?: boolean,
  disabled?: boolean,
  onPress: Function,
  color?: string,
  weight?: string,
  size?: string,
  leftIcon?: string,
  rightIcon?: string,
  iconSize?: Number,
  children: any,
  theme: Object,
  showEsLogo?: Boolean,
};

const Button = ({
  children,
  disabled,
  weight,
  size,
  color,
  onPress,
  theme,
  leftIcon,
  iconSize,
  solid,
  light,
  rightIcon,
  showEsLogo,
  ...restProps
}: Props) => {
  let content = null;
  if (isString(children)) {
    content = (
      <View
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center">
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={iconSize !== undefined ? scale(iconSize) : scale(8)}
            color={color}
            light={light}
            solid={solid}
            style={{textAlign: 'center', marginRight: scale(6)}}
          />
        )}
        <Text
          color={disabled ? theme.color.disabledTextColor : color}
          weight={weight || 'bold'}
          size={size}
          textAlign="center">
          {children}
        </Text>
        {showEsLogo && (
          <View paddingLeft={scale(5)}>
            <ImgIcon name="whiteLogo" size={scale(20)} />
          </View>
        )}
        {rightIcon && (
          <RightIcon
            name={rightIcon}
            size={iconSize !== undefined ? scale(iconSize) : scale(8)}
            color={color}
            light={light}
            solid={solid}
          />
        )}
      </View>
    );
  } else {
    content = children;
  }
  return (
    <Touchable
      onPress={() => !disabled && onPress && [onPress(), Keyboard.dismiss()]}
      disabled={disabled}
      {...restProps}>
      {content}
    </Touchable>
  );
};

const StyledButton = styled(Button).attrs({
  paddingHorizontal: props => props.padding || props.paddingHorizontal || '12',
  paddingVertical: props => props.padding || props.paddingVertical || '8',
  color: ({color, primary, secondary, outlineGrey, grey, disabled, theme}) => {
    if (disabled) {
      return theme.color.disabledTextColor;
    }
    if (color) {
      return color;
    }
    if (primary) {
      return '#FFF';
    }
    if (secondary) {
      return theme.color.primary;
    }
    if (outlineGrey) {
      return '#68737A';
    }
    if (grey) {
      return '#FFF';
    }
    return '';
  },
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${isStyledBy('paddingHorizontal')};
  ${isStyledBy('paddingVertical')};
  ${isStyledBy('margin')};
  ${isStyledBy('marginHorizontal')};
  ${isStyledBy('flex')};
  ${isStyledBy('width')};
  ${isStyledBy('height')};
  ${isStyledBy('backgroundColor', {cssProp: 'background-color'})};
  ${isStyledBy('borderRadius', {cssProp: 'border-radius'})};
  ${isStyledBy('borderColor', {cssProp: 'border-color'})};
  ${isStyledBy('borderWidth', {cssProp: 'border-width'})};

  ${isStyledThemeBy('backgroundColor', {
    cssProp: 'background-color',
    at: 'color',
    defaultValue: props => props.theme.color.white,
  })};
  ${({footer, theme}) =>
    footer &&
    css`
      height: ${theme.footerHeight};
      width: 100%;
      padding-bottom: ${theme.footerPaddingBottom};
    `};
  ${is('borderRounded')`
      border-radius: 25px;
    `};
  ${is('border')`
      border-color: ${props => props.theme.color.dark.text.hint};
      border-width: 1px;
    `};
  ${is('block')`
      width: 100%;
    `};
  ${is('primary')`
      background-color: ${props => props.theme.color.primary};
    `};
  ${is('secondary')`
      background-color: #FFF;
      border: ${scale(1)}px solid ${props => props.theme.color.primary};
    `};
  ${is('outlineGrey')`
      background-color: #FFF;
      border: ${scale(1)}px solid #68737A;
  `};
  ${is('grey')`
      background-color: #68737A;
  `};
  ${is('disabled')`
      background-color: ${props => props.theme.color.disabledBackgroundColor};
      border: ${scale(1)}px solid #68737A;
    `};
`;

export default withTheme(StyledButton);
