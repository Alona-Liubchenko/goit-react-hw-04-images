import { ToastContainer } from 'react-toastify';
import * as API from './services/api';

import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    isLoading: false,
    error: '',
    largeImageUrl: null,
  };

  hendleFormSubmit = value => {
    this.setState({
      value,
      page: 1,
      images: [],
    });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.setState({ isLoading: true });
      try {
        const items = await API.fetchGallery(this.state.value, this.state.page);
        this.setState(prev => ({
          total: items.total,
          images: [...prev.images, ...items.hits],
          error: '',
        }));
      } catch {
        this.setState({ error: 'Error. Try again later' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  loadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  setLargeImageUrl = images => {
    this.setState({ largeImageUrl: images });
  };
  OnCloseModal = () => {
    this.setState({ largeImageUrl: null });
  };
  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery images={images} onClick={this.setLargeImageUrl} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Button
            items={images}
            total={this.state.total}
            onClick={this.loadMore}
          />
        )}
        {this.state.largeImageUrl && (
          <Modal
            largeImageUrl={this.state.largeImageUrl}
            onClose={this.OnCloseModal}
          />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
