import React from 'react';
import { toast } from 'react-toastify';
import css from './Button.module.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export const Button = ({ total, items, onClick }) => {
  if (items.length === 0) {
    return;
  } else if (items.length === total) {
    toast.info('you have reached the end', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  } else {
    return (
      <button type="button" className={css.Button} onClick={onClick}>
        Load More
      </button>
    );
  }
};
Button.propTypes = {
  total: PropTypes.number,
  items: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};
