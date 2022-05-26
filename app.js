// $(document).ready(function(){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color':'#0000FF',
//     'height':'100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color':'#0000FF',
//       'width':'200px',
//       'height':'100px'
//     }).slideUp();
//   });
// });

// ----------------------

// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000ff'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color':'#ff0000'});
  });
});

// -------------------------
