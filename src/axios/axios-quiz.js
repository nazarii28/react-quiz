import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-1f3ea-default-rtdb.firebaseio.com/'
})