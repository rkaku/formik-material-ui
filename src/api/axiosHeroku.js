import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://ruby-on-moon.herokuapp.com/'
} )
export default instance