export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, feedback) => ({
  type: MAKE_GUESS,
  guess,
  feedback
})

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = auralStatus => ({
  type: GENERATE_AURAL_UPDATE,
  auralStatus
})

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = {
  type: RESTART_GAME
}
