import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const hendleNameChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };
  const hendleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Enter the search query');
      return;
    }
    onSubmit(value);
    setValue(' ');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={hendleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <BiSearchAlt2 size="25px" />
          {/* <span className={css.SearchForm_button_label}>Search</span> */}
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={hendleNameChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
