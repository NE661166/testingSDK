import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {withTheme} from 'styled-components';
import Modal from 'testapp/src/app/components/Modal.js';
import {scale} from '../utils/styles';

type Props = {
  visible?: boolean,
  overlay?: boolean,
  size?: string,
  theme: Object,
  center?: boolean,
};

const CenteredView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

const HorizontalCenteredView = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${scale(20)}px;
`;

const Spinner = ({overlay, size, visible, theme, center}: Props) => {
  const spinnerColor = '#ED1B2E';
  if (overlay) {
    return (
      <Modal visible={visible}>
        <ActivityIndicator size={size} />
      </Modal>
    );
  }
  if (visible) {
    const Container = center ? CenteredView : HorizontalCenteredView;
    return (
      <Container>
        <ActivityIndicator size={size} />
      </Container>
    );
  }
  return null;
};

Spinner.defaultProps = {
  size: 'large',
};

export default withTheme(Spinner);
