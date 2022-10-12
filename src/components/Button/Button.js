import React from 'react';
import { toast } from 'react-toastify';
import css from './Button.module.css';
import 'react-toastify/dist/ReactToastify.css';

export const Button = ({ total, items, onClick }) => {
  if (items.length === 0) {
    console.log(items);
  } else if (items.length === total) {
    toast.info('Кінець!', {
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
