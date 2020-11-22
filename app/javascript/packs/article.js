import $ from 'jquery'

// 矢印の表示
const toggleChangeBtn = () => {
  let slideIndex = $('.article-image').index($('.active'))
  if(slideIndex == -1){
    $('.slider-btn-left').hide()
  }else if(slideIndex == $('.article-image').length - 1){
    $('.slider-btn-right').hide()
  }else{
    $('.slider-btn-left').show()
    $('.slider-btn-right').show()
  }
}



document.addEventListener('DOMContentLoaded', () => {
  $('.article-image:nth-of-type(n + 4)').addClass('hidden')
  toggleChangeBtn();

  let clicks = 0;
  const $fourthImage = $('.article-image:nth-of-type(4)')
  
  

  // 右ボタンを押した時の動作
  $(document).on('click','.slider-btn-right', () => {
    let activeIndex = $('.article-image').index($('.active'))
    if(activeIndex == -1){
      $('.article-image:nth-of-type(-n + 3)').addClass('hidden')
      $fourthImage.removeClass('hidden')
      $fourthImage.addClass('active')
    }else{
      let $active = $('.active')
      $active.removeClass('active')
      $active.addClass('hidden')
      $active.next().addClass('active')
      $active.next().removeClass('hidden') 
    }
    toggleChangeBtn();
  })


  // 左ボタンを押した時の動作
  $(document).on('click','.slider-btn-left', () => {
    let activeIndex = $('.article-image').index($('.active'))
    let $active = $('.active')
    if(activeIndex == 3) {
      $('.article-image:nth-of-type(-n + 3)').removeClass('hidden')
      $active.removeClass('active')
      $active.addClass('hidden')
    }else{
      $active.removeClass('active')
      $active.addClass('hidden')
      $active.prev().addClass('active')
      $active.prev().removeClass('hidden')
    }
    toggleChangeBtn();
  })
 

})




