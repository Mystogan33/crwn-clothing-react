import { HeaderActionTypes } from './header.types';

const INITIAL_STATE = {
  showNavbar: false
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HeaderActionTypes.TOGGLE_NAVBAR:
      return {
        ...state,
        showNavbar: action.payload
      }
    default:
      return state;
  }
};

export default headerReducer;
