import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

// const KEY = '29510449-399a931f33aaf543423460729';

export class App extends Component {
  state = {};
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=29510449-399a931f33aaf543423460729&q=yellow+flowers&image_type=photo'
    )
      .then(response => response.json())
      .then(console.log);
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit />
        <ImageGallery />
        <Button></Button>
        <Loader />
        <Modal />
      </div>
    );
  }
}
