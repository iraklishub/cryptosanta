import { gameiFrames } from '../app/constants'
const { mergeMania, blazingBlade, wordFinder, ticTacToe, brickPlunge, escapeRun, towerTwist } =
  gameiFrames

export const useGameiFrames = (game) => {
  switch (game) {
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
