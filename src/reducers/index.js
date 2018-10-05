import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const hotColdReducer = (state=initialState, action) => {
  if(action.type === actions.MAKE_GUESS){
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: action.feedback
    })
  }
  else if (action.type === actions.GENERATE_AURAL_UPDATE){
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    })
  }
  else if (action.type === actions.RESTART_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }
  return state;
}