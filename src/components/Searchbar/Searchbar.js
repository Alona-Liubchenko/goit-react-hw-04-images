import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  hendleNameChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Введіть назву картинок');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: ' ' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
