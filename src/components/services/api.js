import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29510449-399a931f33aaf543423460729';
const PER_PAGE = 12;
// const currentPage ;
export const fetchGallery = async (value, page) => {
  const response = await axios.get(
    `?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );

  return response.data;
};
