$(function(){
  $('.gnb-toggle').data({'open' : false}).on('click', function(){
    if( $(this).data().open ){
      $('.gnb').removeClass('on');
      $(this).data({open:false});
    } else {
      $('.gnb').addClass('on');
      $(this).data({open:true});
    }

  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAkKCcuZ25iLXRvZ2dsZScpLmRhdGEoeydvcGVuJyA6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOmZhbHNlfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3Blbjp0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59KTsiXX0=
