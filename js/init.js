$ = jQuery

let time = 0
setInterval(() => {
  //console.log(time++);
}, 1000)
$(document).ready(function () {
  $(".burger-icon").click(function () {
    $(this).toggleClass('active')
  })
  handlePositionScroll()
  window.scroll(0,0)
})


$(window).scroll(() => {
  handlePositionScroll()
})

function handlePositionScroll() {
  let header = $('header')
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > header.height()) {
    header.addClass('scrolled')
  } else {
    header.removeClass('scrolled')
  }
}