import $ from 'jquery'
import axios from 'axios'
import{ csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()


document.addEventListener('DOMContentLoaded', () => {
  let dataset = $('.comment-json').data()
  let articleId = dataset.articleId
  $('.comment-text-area-box').addClass('hidden')
  axios.get(`/articles/${articleId}/comments`)
    .then( (response) => {
      const comments = response.data
      comments.forEach( (comment) => {
        $('.comment-big-box').append(
          `<div class="comment-box"><div class="comment-user-box"><div class="comment-user-icon-box"><img src="${comment.avatar_url}" class= "comment-user-icon"></div><div class="comment-user-accountname-box">${comment.accountname}</div></div><div class="comment-content-box">${comment.content}</div></div>
          `)
      })
    })
  $('.comment-form-box').on('click', () => {
    $('.comment-form-box').addClass('hidden')
    $('.comment-text-area-box').removeClass('hidden')
    
  })


  $('.add-comment-btn').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/articles/${articleId}/comments`, {
        comment: {content: content}
      })
        .then( (res) => {
          const comment = res.data
          $('.comment-big-box').append(
            `<div class="comment-box"><div class="comment-user-box"><div class="comment-user-icon-box"><img src="${comment.avatar_url}" class= "comment-user-icon"></div><div class="comment-user-accountname-box">${comment.accountname}</div></div><div class="comment-content-box">${comment.content}</div></div>
            `)
            $('#comment_content').val('')
            $('.comment-text-area-box').addClass('hidden')
            $('.comment-form-box').removeClass('hidden')
        })

    }
  })



})
  



