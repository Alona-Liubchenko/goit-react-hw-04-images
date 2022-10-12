import React, { Component } from 'react';
import scc from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onCloseOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }

  onCloseEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={scc.Overlay} onClick={this.onCloseOverlay}>
        <div className={scc.Modal}>
          <img src={this.props.largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
