import $ from 'jquery'
import axios from 'axios'
import{ csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()


document.addEventListener('DOMContentLoaded', () => {
  let dataset = $('.comment-json').data()
  let articleId = dataset.articleId
  console.log(articleId)
  axios.get(`/articles/${articleId}/comments`)
    .then( (response) => {
      const comments = response.data
      comments.forEach( (comment) => {
        console.log(comment)
        $('.comment-big-box').append(
          `<div class="comment-box"><div class="comment-user-box"><div class="comment-user-icon-box"><img src="${comment.avatar_url}" class= "comment-user-icon"></div><div class="comment-user-accountname-box">${comment.accountname}</div></div><div class="comment-content-box">${comment.content}</div></div>
          `)
      

      })

      
    })
})
  



