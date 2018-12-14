import { FETCH_POSTS, NEW_POST} from '@/redux/actions/types';
import { POST_API } from '@/globals.js';
import axios from 'axios';

export function fetchPosts() {
  return function(dispatch) {
    axios.get(POST_API)
    .then(res => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      });
    });
  };
}