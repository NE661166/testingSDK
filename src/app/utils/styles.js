import {Platform, Dimensions, StyleSheet} from 'react-native';
import {css} from 'styled-components/native';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';

export const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 680;

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const IOS_STATUSBAR_HEIGHT = 20;
export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? IOS_STATUSBAR_HEIGHT : 0;
export const HEADER_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;

export const verticalScale = size => (height / guidelineBaseHeight) * size;

export const scale = (size, factor = 0.5) =>
  size + ((width / guidelineBaseWidth) * size - size) * factor;

const size = {
  text: {
    xxs: scale(8),
    xs: scale(10),
    s: scale(12),
    m: scale(14),
    l: scale(16),
    xl: scale(20),
  },
};

const color = {
  primary: '#ED1B2E',
  primary100: '#FFCDD2',
  primary300: '#E57373',
  primary700: '#D32F2F',
  secondary: '#536DFE',
  secondaryA100: '#8C9EFF',
  secondaryA400: '#3D5AFE',
  secondaryA700: '#304FFE',
  white: '#FFF',
  disabledBackgroundColor: '#D9D9D9',
  disabledTextColor: '#7F7F7F',
  grey: '#E0E0E0',
  grey100: '#F5F5F5',
  grey50: '#FAFAFA',
  greyMid: '#F2F3F5',
  profit: '#66BB6A',
  loss: '#F44336',
  dark: {
    text: {
      primary: '#68737A',
      secondary: '#0000008A',
      hint: '#00000061',
      disabled: '#00000061',
    },
    divider: '#0000001F',
  },
  light: {
    text: {
      primary: '#FFFFFFFF',
      secondary: '#FFFFFFB3',
      hint: '#FFFFFF80',
      disabled: '#FFFFFF80',
    },
    divider: '#FFFFFF1F',
  },
  background: '#F2F2F2',
};

const headerTitleStyle = {
  fontSize: scale(size.text.l),
  color: color.light.text.primary,
  marginHorizontal: scale(10),
  paddingTop: scale(10),
};

export const inputItemStyle = {
  paddingLeft: scale(5),
  paddingRight: scale(10),
  marginRight: scale(10),
  paddingTop: 25,
};

export const secondInputItemStyle = {
  paddingLeft: scale(5),
  paddingRight: scale(10),
  marginRight: scale(10),
  paddingTop: 35,
};

export const loginInputItemStyle = {
  paddingLeft: scale(5),
  paddingRight: scale(10),
  marginRight: scale(10),
  paddingTop: 30,
};

export default {
  footerHeight: 44,
  footerPaddingBottom: 0,
  appBarHeight: APPBAR_HEIGHT,
  statusBarHeight: STATUSBAR_HEIGHT,
  headerHeight: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
  headerTitleStyle,
  headerTintColor: color.light.text.primary,
  headerStyle: {
    backgroundColor: 'red',
  },
  color,
  size,
};

export const masterStyles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: color.greyMid,
  },
});

const resolveDefaultValue = (props, defaultValue) => {
  if (isFunction(defaultValue)) {
    return defaultValue(props);
  }
  return defaultValue;
};

const styledIf = (method, condition) => (...names) => (
  styledFn,
  ...rest
) => props =>
  names[method](name => Boolean(props[name]) === condition) &&
  css(styledFn, ...rest);

const is = styledIf('every', true);
const isNot = styledIf('every', false);
const isOr = styledIf('some', true);
const isSomeNot = styledIf('some', false);

const styledBy = (prop, {cssProp, defaultValue} = {}) => props =>
  `${cssProp || prop}: ${props[prop] ||
    resolveDefaultValue(props, defaultValue)}`;

const isStyledBy = (prop, {cssProp, defaultValue} = {}) => props =>
  (!!props[prop] || defaultValue !== undefined) &&
  css`
    ${styledBy(prop, {
      cssProp,
      defaultValue: resolveDefaultValue(props, defaultValue),
    })};
  `;

const isStyledThemeBy = (
  prop,
  {cssProp = prop, at, defaultValue} = {},
) => props => {
  const themeAt = at ? `theme.${at}.${props[prop]}` : `theme.${props[prop]}`;
  return get(props, themeAt)
    ? css`
        ${cssProp}: ${get(props, themeAt)};
      `
    : isStyledBy(prop, {
        cssProp,
        defaultValue: resolveDefaultValue(props, defaultValue),
      });
};

const isStyledPadding = () => css`
  ${isStyledBy('padding')};
  ${isStyledBy('paddingHorizontal', {cssProp: 'padding-left'})};
  ${isStyledBy('paddingHorizontal', {cssProp: 'padding-right'})};
  ${isStyledBy('paddingVertical', {cssProp: 'padding-top'})};
  ${isStyledBy('paddingVertical', {cssProp: 'padding-bottom'})};
  ${isStyledBy('paddingLeft', {cssProp: 'padding-left'})};
  ${isStyledBy('paddingRight', {cssProp: 'padding-right'})};
  ${isStyledBy('paddingTop', {cssProp: 'padding-top'})};
  ${isStyledBy('paddingBottom', {cssProp: 'padding-bottom'})};
`;

const paddingProps = [
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
];

const marginProps = [
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
];

const isStyledMargin = () => css`
  ${isStyledBy('margin')};
  ${isStyledBy('marginHorizontal', {cssProp: 'margin-left'})};
  ${isStyledBy('marginHorizontal', {cssProp: 'margin-right'})};
  ${isStyledBy('marginVertical', {cssProp: 'margin-top'})};
  ${isStyledBy('marginVertical', {cssProp: 'margin-bottom'})};
  ${isStyledBy('marginLeft', {cssProp: 'margin-left'})};
  ${isStyledBy('marginRight', {cssProp: 'margin-right'})};
  ${isStyledBy('marginTop', {cssProp: 'margin-top'})};
  ${isStyledBy('marginBottom', {cssProp: 'margin-bottom'})};
`;

export {
  is,
  isNot,
  isOr,
  isSomeNot,
  styledBy,
  isStyledBy,
  isStyledThemeBy,
  isStyledPadding,
  paddingProps,
  isStyledMargin,
  marginProps,
};
