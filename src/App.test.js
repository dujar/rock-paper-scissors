import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { store } from './store'
import {
  selectMode, COMPUTER_VS_COMPUTER,
  switchGameMode, YOU_VS_COMPUTER,
  playerGameAction, ROCK, PAPER, SCISSORS, DRAW, WIN, LOSE

} from './actions'
import { getWinner } from './logic/game'


it(COMPUTER_VS_COMPUTER + ': MODE SELECTION', async () => {
  store.dispatch(selectMode(COMPUTER_VS_COMPUTER))
  expect(store.getState().game.mode).toEqual(COMPUTER_VS_COMPUTER)
});
it('Match count needs to increase', async () => {
  expect(store.getState().game.match).toEqual(1)
});
it('After 5 seconds, result should exists', async () => {
  setTimeout(() => {
    expect(store.getState().game.result).toBeTruthy()
  })
}, 5);

it('Switch mode', async () => {
  store.dispatch(switchGameMode())

  expect(store.getState().game.mode).toEqual(YOU_VS_COMPUTER)
  expect(store.getState().game.new_game_timer).toBeFalsy()

  setTimeout(() => {
    expect(store.getState().game.new_game_timer).toBeTruthy()
  }, 1)


});
it('Select ROCK', () => {
  store.dispatch(playerGameAction(ROCK))
  expect(store.getState().game.action_player).toEqual(ROCK)

})


it('After 7 seconds, result should exists', async () => {
  setTimeout(() => {
    expect(store.getState().game.result).toBeTruthy();
    expect(store.getState().game.new_game_timer).toBeFalsy();
    expect(store.getState().game.timer).toBeFalsy();
    expect(store.getState().game.message).toBeFalsy();
  })
}, 7);

it('process result correctly', () => {

  let result = getWinner(ROCK, ROCK)
  expect(result).toEqual(DRAW)

  result = getWinner(ROCK, SCISSORS)
  expect(result).toEqual(WIN)

  result = getWinner(ROCK, PAPER)
  expect(result).toEqual(LOSE)

  result = getWinner(SCISSORS, ROCK)
  expect(result).toEqual(LOSE)

  result = getWinner(PAPER, ROCK)
  expect(result).toEqual(WIN)

  result = getWinner(PAPER, PAPER)
  expect(result).toEqual(DRAW)

  result = getWinner(PAPER, SCISSORS)
  expect(result).toEqual(LOSE)

  result = getWinner(SCISSORS, SCISSORS)
  expect(result).toEqual(DRAW)

  result = getWinner(SCISSORS, PAPER)
  expect(result).toEqual(WIN)


})
