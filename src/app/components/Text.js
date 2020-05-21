import React from 'react';
import styled from 'styled-components/native';
import {
  isStyledBy,
  isStyledThemeBy,
  isStyledPadding,
  isStyledMargin,
  scale,
} from '../utils/styles';

type Props = {
  weight?: string,
  color?: string | boolean,
  size?: string | number,
  fontFamily?: string,
};

export const StyledText = styled.Text`
  ${isStyledThemeBy('color', {
    at: 'color',
  })};
  ${isStyledThemeBy('size', {
    cssProp: 'font-size',
    at: 'size.text',
    defaultValue: scale(14),
  })};
  ${isStyledBy('flex')};
  ${isStyledBy('fontFamily', {
    cssProp: 'font-family',
  })};
  ${isStyledBy('textAlign')};
  ${isStyledBy('textDecorationLine')};
  ${isStyledBy('width')};
  ${isStyledThemeBy('backgroundColor', {
    at: 'color',
  })};
  ${isStyledBy('lineHeight', {cssProp: 'line-height'})};
  ${isStyledMargin()};
  ${isStyledPadding()};
  ${isStyledBy('justifyContent', {cssProp: 'justify-content'})};
  ${isStyledBy('textTransform', {cssProp: 'text-transform'})};
  ${isStyledBy('fontStyle', {cssProp: 'font-style'})};
  ${isStyledBy('overflow')};
  ${isStyledBy('borderRadius', {cssProp: 'border-radius'})};
`;

const Text = (props: Props) => <StyledText {...props} />;

export default Text;
