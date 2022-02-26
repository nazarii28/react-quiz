import {combineReducers} from 'redux'
import quizReducer from './quiz'
import createReduser from "./create";
import authReducer from "./auth";

export default combineReducers({
  quiz: quizReducer,
  create: createReduser,
  auth: authReducer
})