import {IMAGE_FETCHED} from '../constans/actions';
import images from '../api/images';


const imagesFetched = images =>({
  type:IMAGE_FETCHED,
  images
});


export const fetchImages = (query) => dispatch =>
images(query)
.then(images =>dispatch(imagesFetched(images)))
.catch(err=>console.log(err));
