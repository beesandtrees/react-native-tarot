import * as types from '../actions/actionTypes';

// TODO -- create initial state from asyncStorage!

const initialState = {
  deck: 'Rider-Waite',
  layout: 'Basic',
  reversed: false
};

export default function createDeck(state = initialState, action = {}) {

  switch (action.type) {
    case types.DECK:
      return {
        ...state,
        deck: action.deck
      };
    case types.LAYOUT:
      return {
        ...state,
        layout: action.layout
      };
    case types.REVERSED:
      return {
        ...state,
        reversed: action.tf
      };
    case types.TODAY:
      return {
        ...state,
        deck: 'Rider-Waite',
        layout: 'Single',
        reversed: true
      };
    default:
      return state;
  }
}
