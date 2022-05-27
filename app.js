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

// $('.セレクタ名').イベント名('プロパティ1':'値１');
// ↓
// $('.box1').css({
//   'background-color':'#0000ff',
//   'color':'#ff0000'
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color':'#ff0000'});
//   });
// });

// -------------------------
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// addClass()では、対象のHTML要素にclass属性を追加
// removeClass()では、要素に設定されているclass属性が解除されます

// ーーーーーーーーーーーーーーーーーー

// 「マウスクリック」イベントを設定する

// 【マウスクリックイベントの記述】
// $('.セレクタ名').on('click',function(){
//   イベント発生時に行われる処理
// });

// $(function(){
//   $('.box1').on('click',function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });
// ------------------------------

// 「this」「children」
// this・・・イベントが発生した要素のみを変化させる
// children・・・HTML要素直下の全ての要素を取得できる

// ーーーーーーーーーーーーーーーーーーー
// thisの記述　①、②共に同じ意味

// ①
// $(function(){
//   $('.bg1').on('click',function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click',function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click',function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click',function(){
//     $('.bg4').slideUp();
//   });
// });

// ②
// $(function(){
//   $('.box1').on('click',function(){
//     $(this).slideUp();
//   });
// });
// ーーーーーーーーーーーーーーーーーー

// childrenの記述

$(function(){
  $('button').on('click',function(){
    $('ul').children().css('color','red');
  });
});