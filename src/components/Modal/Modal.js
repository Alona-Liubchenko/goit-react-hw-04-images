import { useEffect } from 'react';
import scc from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageUrl, onClose }) => {
  const onCloseOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    const onCloseEsc = event => {
      if (event.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', onCloseEsc);
    return () => {
      window.removeEventListener('keydown', onCloseEsc);
    };
  }, [onClose]);

  return (
    <div className={scc.Overlay} onClick={onCloseOverlay}>
      <div className={scc.Modal}>
        <img src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
