import $ from 'jquery'
import axios from 'axios'
import{ csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()


document.addEventListener('DOMContentLoaded', () => {
  axios.get(`/api/articles/3/comments`)
    .then( (response) => {
      console.log(response)
    })
})
  

