import { HeaderActionTypes } from './header.types';

export const toggleNavbar = isScrolled => ({
  type: HeaderActionTypes.TOGGLE_NAVBAR,
  payload: isScrolled
});
