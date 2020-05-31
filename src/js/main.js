<script> 
$(window).scroll(function() { 
  $('#animatedElement').each(function(){ 
   var imagePos = $(this).offset().top; 
   var topOfWindow = $(window).scrollTop(); 
   if (imagePos < topOfWindow+450) { 
   $(this).addClass("barrelRoll"); 
   } 
  }); 
}); 
</script>

