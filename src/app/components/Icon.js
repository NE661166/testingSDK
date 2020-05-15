import React from 'react';
import styled from 'styled-components/native';
import {isStyledThemeBy, isStyledBy} from '../utils/styles';
import img from '../img';

const StyledImage = styled.Image`
  ${isStyledThemeBy('size', {
    cssProp: 'width',
    at: 'size.icon',
    defaultValue: props => props.theme.size.icon.m,
  })};
  ${isStyledThemeBy('size', {
    cssProp: 'height',
    at: 'size.icon',
    defaultValue: props => props.theme.size.icon.m,
  })};
  ${isStyledThemeBy('color', {
    cssProp: 'tint-color',
    at: 'color',
  })};
  ${isStyledBy('height')};
  ${isStyledBy('width')};
`;

type Props = {
  name: string,
};

const Icon = ({name, ...rest}: Props) => (
  <StyledImage source={img[name]} {...rest} />
);

export default Icon;
