import React from 'react';
import scc from './Modal.module.css';

export const Modal = ({ largeImageUrl }) => {
  return (
    <div className={scc.Overlay}>
      <div className={scc.Modal}>
        <img src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};
