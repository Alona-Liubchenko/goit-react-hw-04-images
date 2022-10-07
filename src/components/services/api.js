import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29510449-399a931f33aaf543423460729';
const currentPage = 1;
export const addGallery = async value => {
  const response = await axios.get(
    `/?q=${value}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};