import wordObjects from './wordObjects';
import images from '/images';

const blokImages = wordObjects.map(word => ({
  wordObjects,
  images: images[word],
}));

export default blokImages; 
export { wordObjects }; 
