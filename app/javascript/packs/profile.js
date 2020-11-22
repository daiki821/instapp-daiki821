import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
  $('.user-icon').on('click', () => {
    $('.user-icon-form-box').removeClass('hidden')
  })
})