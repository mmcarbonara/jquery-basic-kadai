$(function () {
  //文字色を変える
  $('#change-color').on('click', function () {
    $('#target').css('color','green');
  });
  //テキストを変える
  $('#change-text').on('click',function () {
    $('#target').text('Hello!');
  });
  //文字が消える
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });
  //文字が現れる
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
  });
