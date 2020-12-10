import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('DOMContentLoaded', () => {
  $('.user-icon').on('click', () => {
    $('.user-icon-form-box').removeClass('hidden')
  })

  // フォロワーの数を表示
  let  followerCount = $('.follower-c').val()
  $('.follower-c').text(followerCount)

  // フォローしている数の表示
  const followingCount =$('.following-c').val()
  $('.following-c').text(followingCount)
 

  const accountId = $('.follow_json').data().accountId

  
  
  // フォローの有無でボタン切り替え
  axios.get(`/accounts/${accountId}/follows`)
    .then( (response) => {
      const has_followed = response.data.status
      if(has_followed) {
        $('.follow').addClass('hidden')
      }else{
        $('.unfollow').addClass('hidden')
      }
      
    })

    
  // フォローボタンを押したらフォローできるように
  $('.follow').on( 'click', () => {
    axios.post(`/accounts/${accountId}/follows`)
      .then( (response) => {
        if(response.data.status == 'ok'){
          $('.follow').addClass('hidden')
          $('.unfollow').removeClass('hidden')
          followerCount++
          $('.follower-c').text(followerCount)
          $('.follower-c').val(followerCount)
         
          
        }
      })
  })

  // アンフォローボタンを押したらフォローを解除
  $('.unfollow').on('click', () => {
    axios.post(`/accounts/${accountId}/unfollows`)
      .then( (response) => {
        if(response.data.status == 'ok'){
          $('.unfollow').addClass('hidden')
          $('.follow').removeClass('hidden')
          followerCount--
          $('.follower-c').text(followerCount)
          $('.follower-c').val(followerCount)

          
        }
      })
  })
  
  




  
})