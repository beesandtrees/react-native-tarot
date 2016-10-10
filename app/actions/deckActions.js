import * as types from './actionTypes';

export function chooseLayout(layout) {
  return {
    type: types.LAYOUT,
    layout
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
