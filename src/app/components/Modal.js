import React from 'react';
import Modal from 'react-native-modal-wrapper';

type Props = {
  onClose?: Function,
};

export default ({onClose, ...rest}: Props) => (
  <Modal onRequestClose={onClose} {...rest} />
);
