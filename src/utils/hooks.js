import { gameiFrames } from '../app/constants'
const {
  zBall,
  stickSanta,
  santaWarehouse,
  santaOnSkate,
  mergeMania,
  blazingBlade,
  wordFinder,
  ticTacToe,
  brickPlunge,
  escapeRun,
  towerTwist
} = gameiFrames

export const useGameiFrames = (game) => {
  switch (game) {
    case 'sticksanta':
      return stickSanta
    case 'zballchristmas':
      return zBall
    case 'santaswarehouse':
      return santaWarehouse
    case 'santaonskate':
      return santaOnSkate

    case 'mergemania':
      return mergeMania
    case 'blazingblade':
      return blazingBlade
    case 'wordfinder':
      return wordFinder
    case 'tictactoe':
      return ticTacToe
    case 'brickplunge':
      return brickPlunge
    case 'escaperun':
      return escapeRun
    case 'towertwist':
      return towerTwist

    default:
      break
  }
}
