import {ComponentType} from 'react';
import {
  ModalContainer,
  Title,
  Overlay,
  ButtonWrapper,
  CancelButton,
  SaveButton,
} from './styles';
import ReactDOM from 'react-dom';
import React from 'react';

interface ModalProps {
  visible?: boolean;
  props?: any;
  title?: string;
  ok?: string;
  onConfirm?: () => void;
  onRequestClose?: () => void;
  component?: ComponentType<any> | undefined;
  modalcontentprops?: object;
  hideActionButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onRequestClose,
  onConfirm,
  title,
  ok,
  modalcontentprops,
  component: Component,
  hideActionButton,
}) => {
  return (
    <>
      {visible && Component && (
        <>
          <Overlay onClick={onRequestClose} />
          <ModalContainer>
            {title && <Title>{title}</Title>}
            <Component data={modalcontentprops} />
            {!hideActionButton && (
              <ButtonWrapper>
                <CancelButton onClick={onRequestClose}>Cancel</CancelButton>
                <SaveButton onClick={onConfirm}>{ok || 'Ok'}</SaveButton>
              </ButtonWrapper>
            )}
          </ModalContainer>
        </>
      )}
    </>
  );
};

const createModal: React.FC<ModalProps> = (props: any) => {
  const createModal: any = document.getElementById('modal');
  return ReactDOM.createPortal(<Modal {...props} />, createModal);
};

export default createModal;
