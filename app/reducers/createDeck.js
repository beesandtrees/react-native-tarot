import * as types from '../actions/actionTypes';

const initialState = {
  deck: 'Basic',
  spread: 'Past-Present-Future',
  reversed: false
};

export default function createDeck(state = initialState, action = {}) {

  switch (action.type) {
    case types.DECK:
      return {
        ...state,
        deck: action.deck
      };
    case types.SPREAD:
      return {
        ...state,
        spread: action.spread
      };
    case types.REVERSED:
      return {
        ...state,
        reversed: action.tf
      };
    case types.TODAY:
      return {
        ...state,
        deck: 'Basic',
        spread: 'Single'
      };
    default:
      return state;
  }
}
