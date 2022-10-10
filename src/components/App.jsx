import { ToastContainer } from 'react-toastify';
import * as API from './services/api';

import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    isLoading: false,
    error: '',
  };

  hendleFormSubmit = async value => {
    this.setState({ isLoading: true });
    try {
      const items = await API.fetchGallery(value);
      this.setState({ images: items });
      console.log(items);
    } catch {
      this.setState({ error: 'Error while loading data. Try again later' });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onLoadMoreButton = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />

        <ImageGallery images={images} />

        {this.state.isLoading ? <Loader /> : <Button />}

        <Modal />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
