$ = jQuery


 let time = 0
 setInterval(()=> {
     console.log(time++);
 }, 1000)
$( document ).ready(function() {
    $( ".burger-icon" ).click(function() {
        $(this).toggleClass('active')
     
     
      })
})
