import { FETCH_POSTS, NEW_POST} from '@/redux/actions/types';

const initalState = {
  items: [],
  item: {}
};

export default function(state = initalState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state, 
        items: action.payload
      };
    default:
      return state;
  }
}