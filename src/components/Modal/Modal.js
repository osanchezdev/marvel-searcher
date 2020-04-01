import React from 'react';
import { bool, string, func } from 'prop-types';

import ModalWrapper from './styles/ModalWrapper';
import ModalCard from './styles/ModalCard';
import ModalTitle from './styles/ModalTitle';
import ModalCloseBtn from './styles/ModalCloseBtn';
import ComicsList from '../ComicsList';

const Modal = ({ show, handleClose, title }) => {
  return (
    <ModalWrapper show={show} onClick={handleClose}>
      <ModalCard onClick={e => e.stopPropagation()}>
        <ModalTitle>
          {title}
          <ModalCloseBtn onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseBtn>
        </ModalTitle>
        <ComicsList />
      </ModalCard>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  show: bool.isRequired,
  handleClose: func.isRequired,
  title: string.isRequired,
};

export default Modal;
