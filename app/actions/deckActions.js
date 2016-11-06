import * as types from './actionTypes';

export function chooseSpread(spread) {
  return {
    type: types.SPREAD,
    spread
  };
}

export function chooseDeck(deck) {
  return {
    type: types.DECK,
    deck
  };
}

export function switchReversed(tf) {
  return {
    type: types.REVERSED,
    tf // true or false
  };
}

export function todaysCard() {
  return {
    type: types.TODAY
  };
}
