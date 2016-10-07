import * as types from '../actions/actionTypes';

const initialState = {
  deck: 'rider',
  layout: 'basic',
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
        reversed: true
      };
    default:
      return state;
  }
}
