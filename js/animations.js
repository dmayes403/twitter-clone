$(document).ready(function(){
    $('#tweet-submit').hide();
    $('#char-count').hide();
    $('.tweet-actions').hide();
    $('.stats').hide();

    $('.tweet-compose').focus(function(){
        $(this).css({height: '5em'})
        $('#tweet-submit').show();
        $('#char-count').show();
    })

    // $('.tweet-compose').blur(function(){
    //     $(this).css({height: '2.5em'})
    //     $('#tweet-submit').hide();
    //     $('#char-count').hide();
    // })

    $('#tweet-content .tweet-compose').keypress(function(){
        var counter = 140
        var text = $(this).val();
        console.log(text);
        counter-=text.length;
        var charCount = $('#char-count')
        charCount.text(counter);
        if(counter <= 10){
          charCount.css({color: 'red'});
        }
        if(counter < 0){
          $('#tweet-submit').hide();
        }
    })

    // var newTweet = $('.tweet');
    var newTweet = $('.tweet:first').clone();
    var currentImage = $('.avatar').attr('src');
    console.log(newTweet);

    $('#tweet-submit').click(function(){
      var newTweet = $('.tweet:first').clone();
      var text = $('#tweet-content .tweet-compose').val();
      $(newTweet).find(".avatar").attr('src', currentImage);
      $(newTweet).find(".fullname").text($('#profile-summary p').text());
      $(newTweet).find(".username").text('@DaveMayes');
      $(newTweet).find(".tweet-text").text(text);
      $('#stream').prepend(newTweet);
      // $('#tweet-content .tweet-compose').val() = '';
      $('#tweet-content .tweet-compose').val('');
    })

    $('.tweet').hover(function(){
      $(this).find('.tweet-actions').fadeIn();
    },
    function(){
      $(this).find('.tweet-actions').fadeOut();
    })


    $('.tweet').click(function(){
      $(this).find('.stats').fadeIn();
    });





})
