import $ from 'jquery'




document.addEventListener('DOMContentLoaded', () => {

  // 画像が３枚以下だった時の処理
  const imageCount = (val) => {
    let imageIndex = $(val).find('.article-image').length
    if(imageIndex == 1){
      $(val).find('.article-image-box').removeClass('grid')
      $(val).find('.article-image').addClass('one-image')
    }else if(imageIndex == 2){
      $(val).find('.article-image-box').removeClass('grid')
      $(val).find('.img2').removeClass('article-image')
      $(val).find('.article-image-box').addClass('two-image')
    }
  }

  // 画像の４枚目以降を隠す
  $('.article-image:nth-of-type(n + 4)').addClass('hidden')

  // 矢印の表示
  const toggleChangeBtn = (val) => {
    let index = $(val).find('.active')
    let activeIndex = $(val).find('.article-image').index(index)
    let imageIndex = $(val).find('.article-image').length
    if(imageIndex <= 3){
      // 画像が3枚以下の場合
      $(val).find('.slider-btn-left').hide()
      $(val).find('.slider-btn-right').hide()
    }else if(activeIndex == -1){
      // 最初の３枚が表示されているとき
      $(val).find('.slider-btn-left').hide()
      $(val).find('.slider-btn-right').show()
    }else if(activeIndex == $(val).find('.article-image').length - 1){
      // 画像が最後だったとき
      $(val).find('.slider-btn-right').hide()
      $(val).find('.slider-btn-left').show()
    }else{
      // 画像がまだ右にも左にも表示できる時
      $(val).find('.slider-btn-left').show()
      $(val).find('.slider-btn-right').show()
    }
  }

  //記事1つ1つに処理
  $('.user-articles-box').each( (i,val) => {

    imageCount(val);
    toggleChangeBtn(val);

    // 次の画像に進むの処理
    $(val).on('click', '.slider-btn-right', () => {
      let index = $(val).find('.active')
      let activeIndex = $(val).find('.article-image').index(index)
      let $fourthImage = $(val).find('.article-image:nth-of-type(4)')
      if(activeIndex == -1){
        // 最初の３枚が表示されている時
        $(val).find('.article-image:nth-of-type(-n + 3)').addClass('hidden')
        $fourthImage.removeClass('hidden')
        $fourthImage.addClass('active')
      }else{
        // 最初の3枚以外が表示されている
        let $active = $(val).find('.active')
        $active.removeClass('active')
        $active.addClass('hidden')
        $active.next().addClass('active')
        $active.next().removeClass('hidden') 
      }
      toggleChangeBtn(val);
    })


    // 前の画像に戻る処理
    $(val).on('click','.slider-btn-left', () => {
      let index = $(val).find('.active')
      let activeIndex = $(val).find('.article-image').index(index)
      let $active = $(val).find('.active')
      if(activeIndex == 3) {
        // ４枚目が表示されている時
        $(val).find('.article-image:nth-of-type(-n + 3)').removeClass('hidden')
        $active.removeClass('active')
        $active.addClass('hidden')
      }else{
        // それ以外
        $active.removeClass('active')
        $active.addClass('hidden')
        $active.prev().addClass('active')
        $active.prev().removeClass('hidden')
      }
      toggleChangeBtn(val);
    })

  })

})







