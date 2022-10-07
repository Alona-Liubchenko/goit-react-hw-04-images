import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };
  hendleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Введіть назву картинок');

      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: ' ' });
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
            value={this.state.imageName}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
