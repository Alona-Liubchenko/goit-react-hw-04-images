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

  async componentDidMount() {
    const images = await API.addGallery();
    this.setState({ images });
    console.log(images);
  }
  // fetch(
  //   'https://pixabay.com/api/?key=29510449-399a931f33aaf543423460729&q=yellow+flowers&image_type=photo'
  // )
  //   .then(response => response.json())
  //   .then(image => this.setState({ image }));
  hendleFormSubmit = value => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        {/* {this.state.image && <div>{this.state.image.tags}</div>} */}
        <ImageGallery values={this.state.value} />
        <Button></Button>
        <Loader />
        <Modal />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
