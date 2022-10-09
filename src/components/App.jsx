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
  };
  // async componentDidMount() {
  //   try {
  //     const images = await API.addGallery();
  //     this.setState({ images });
  //   } catch (error) {}
  // }
  hendleFormSubmit = async value => {
    const image = await API.addGallery(value);
    this.setState(state => ({
      images: [image, ...state.images],
    }));
    console.log(image);
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />

        <ImageGallery images={this.state.images} />
        <Button></Button>
        <Loader />
        <Modal />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
