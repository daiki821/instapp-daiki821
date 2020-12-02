import $ from 'jquery'
import axios from 'axios'


document.addEventListener('DOMContentLoaded', () => {
  $('.like-json').each( (i,val) => {
    let dataset = $(val).data()
    let articleId = dataset.articleId
    // いいねの表示の切り替え
    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
        let hasLiked = response.data.hasLiked
        if( hasLiked == true){
          $(val).find('.no-like-btn').addClass('hidden')
        }else{
          $(val).find('.like-btn').addClass('hidden')
        }
      })

    
    

    

  })
  

})











