import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://udemy-utils.herokuapp.com/api/v1/'
} )
// const instance = axios.create({
//   baseURL: 'https://ruby-on-moon.herokuapp.com/'
// } )

export default instance