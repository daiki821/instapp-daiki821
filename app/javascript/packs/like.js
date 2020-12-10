import $ from 'jquery'
import axios from 'modules/axios'


document.addEventListener('DOMContentLoaded', () => {
  $('.like-json').each( (i,val) => {
    let dataset = $(val).data()
    let articleId = dataset.articleId
    // いいねの表示の切り替え
    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
        let hasLiked = response.data.hasLiked
        if(hasLiked){
          $(val).find('.no-like-btn').addClass('hidden')
        }else{
          $(val).find('.like-btn').addClass('hidden')
        }
      })

    // クリックしたときにいいねを保存する
    $(val).find('.no-like-btn').on('click', () => {
      axios.post(`/articles/${articleId}/like`)
        .then( (response) => {
          if(response.data.status === 'ok'){
            $(val).find('.no-like-btn').addClass('hidden')
            $(val).find('.like-btn').removeClass('hidden')
          }
        })
        .catch( (e) => {
          window.alert(e)
        })

    })

    // クリックしたときにいいねを削除する
    $(val).find('.like-btn').on('click', () => {
      axios.delete(`/articles/${articleId}/like`)
      .then( (response) => {
        if(response.data.status === 'ok'){
          $(val).find('.like-btn').addClass('hidden')
          $(val).find('.no-like-btn').removeClass('hidden')
        } 
      })
      .catch( (e) => {
        console.log(e)
      })
    })
    

  })
  

})











