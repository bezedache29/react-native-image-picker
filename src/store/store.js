import { createStore } from 'easy-peasy';
import { imagesStore } from './images';

const globalModel = {
  images: imagesStore
};

const store = createStore(globalModel);
export default store;