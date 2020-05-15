import styled from 'styled-components/native';
import {isStyledBy, is, isStyledThemeBy} from '../utils/styles';

const StyledView = styled.View`
  ${isStyledBy('size', {
    cssProp: 'height',
  })};
  ${isStyledBy('size', {
    cssProp: 'width',
  })};
  ${is('center')`
    justify-content: center;
    align-items: center;
  `};
  ${isStyledThemeBy('backgroundColor', {
    at: 'color',
    defaultValue: 'transparent',
  })};
  ${isStyledThemeBy('borderColor', {
    at: 'color',
  })};
  ${isStyledBy('justifyContent', {cssProp: 'justify-content'})};
  ${isStyledBy('alignItems', {cssProp: 'align-items'})};
  ${isStyledBy('flexWrap', {cssProp: 'flex-wrap'})};
  ${isStyledBy('flexDirection', {cssProp: 'flex-direction'})};
  ${isStyledBy('borderWidth', {cssProp: 'border-width'})};
  ${isStyledBy('borderRadius', {cssProp: 'border-radius'})};
  ${isStyledBy('borderRadiusTopLeft', {cssProp: 'border-top-left-radius'})};
  ${isStyledBy('borderRadiusTopRight', {cssProp: 'border-top-right-radius'})};
  ${isStyledBy('borderRadiusBottomLeft', {
    cssProp: 'border-bottom-left-radius',
  })};
  ${isStyledBy('borderRadiusBottomRight', {
    cssProp: 'border-bottom-right-radius',
  })};
  ${isStyledBy('border')};
  ${isStyledBy('flex')};
  ${isStyledBy('position')};
  ${isStyledBy('bottom')};
  ${isStyledBy('width')};
  ${isStyledBy('zIndex', {cssProp: 'z-index'})};
  ${is('showShadow')`
    elevation: 3;
    shadow-opacity: 0.25;
    shadow-radius: 5;
    shadowOffset: 0 0;
  `};
`;

export default StyledView;
