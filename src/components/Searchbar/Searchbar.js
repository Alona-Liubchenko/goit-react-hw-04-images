import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
