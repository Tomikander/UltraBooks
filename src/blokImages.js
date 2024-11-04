import words from './words';
import images from './images';

const blokImages = words.map(word => ({
  word,
  imageUrl: images[word],
}));

export default blokImages; 
export { words }; 
