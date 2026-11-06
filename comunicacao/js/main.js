$(document).ready(function () {

    if ($(document).width() > 768) {
        console.log('desk');

        $(".header .fa-bars").on("click", function () {
            $('.main-menu').toggleClass('active');
            $('.header .fa-bars').toggleClass('active');
        });


    } else {
        console.log('mobile');
        $('#player1,#player2, #player3').addClass('img-fluid'); //AJUSTE

        $(".header .fa-bars").on("click", function () {
            $('.main-menu').addClass('active');
        });

        $(".main-menu .fas.fa-times-circle").click(function () {
            $('.main-menu').removeClass('active');
        });




    }


    $(".main-menu").click(function () {
        $(this).show("slide", { direction: "left" }, 1000);
    });

    setTimeout(function () {
        $('.chat .step-1').fadeIn();
    }, 1000);

    setTimeout(function () {
        $('.chat .step-2').fadeIn();
        _scroller();
    }, 2000);

    setTimeout(function () {
        $('.chat .step-3').fadeIn();
        _scroller();
    }, 4000);

    $(".chat .step-3").on("click", function () {
        $('.chat .step-4').fadeIn();
        _scroller();
        setTimeout(function () {
            $('.chat .step-5').fadeIn();
            _scroller();
        }, 2000);
    });

    var username;

    $(".chat #nameField").on("keypress", function (e) {
        let _char = e.charCode;
        if (_char == 13) {
            username = $(".chat #nameField").val();
            $(".chat .username").text(username);
            // $( ".chat .step-8 .username" ).text( username );
            // $( ".chat .step-10 .username" ).text( username );
            // $( ".chat .step-12 .username" ).text( username );
            // $( ".chat .step-14 .username" ).text( username );
            // $( ".chat .step-15 .username" ).text( username );

            $('.chat .step-6').fadeIn();
            setTimeout(function () {
                _scroller();
                $('.chat .step-7').fadeIn();
                _calling.play();
            }, 2000);

            _scroller();
            //$( ".chat .step-20" ).on( "click", function() {
            //      $('.chat .step-7').fadeIn();
            //    _calling.play();
            //  _scroller();
            //});
        }
    });

    $(".chat .step-5 .btn-next").on("click", function (e) {
        username = $(".chat #nameField").val();
        if (username.length) {
            $(".chat .username").text(username);
            // $( ".chat .step-8 .username" ).text( username );
            // $( ".chat .step-10 .username" ).text( username );
            // $( ".chat .step-12 .username" ).text( username );
            // $( ".chat .step-14 .username" ).text( username );
            // $( ".chat .step-15 .username" ).text( username );
            $('.chat .step-6').fadeIn();

            _scroller();

            if (navigator.platform.toLowerCase() == 'iphone') _calling.play();

            setTimeout(function () {
                _scroller();
                $('.chat .step-7').fadeIn();
                _calling.play();
            }, 2000);

            _scroller();
            //$( ".chat .step-20" ).on( "click", function() {
            //      $('.chat .step-7').fadeIn();
            //    _calling.play();
            //  _scroller();
            //});
        }
    });



    var _calling = new Audio('audio/mobile-ringtone.mp3');
    _calling.src = 'audio/mobile-ringtone.mp3';
    _calling.loop = true;


    var _voicecall = new Audio('audio/audio-tereos.mp3');
    _voicecall.src = 'audio/audio-tereos.mp3';
    // var _voicecall = new Audio('audio/mobile-ringtone.mp3');
    // _voicecall.src = 'audio/mobile-ringtone.mp3';


    _voicecall.addEventListener('ended', (e) => {
        console.log('ended');
        pause();
        setTimeout(function () {
            $('.chat .step-8').fadeIn();
            _scroller();
        }, 1000);
        setTimeout(function () {
            $('.chat .step-9').fadeIn();
            _scroller();
        }, 3000);
        // setTimeout(function () {
        //     $('.chat .step-10').fadeIn();
        //     _scroller();
        // }, 5000);
    });


    $(".chat .step-7 .btn-start").on("click", function (e) {
        console.log('click-step-7')
        e.preventDefault();
        if (!cron) {
            _calling.pause();
            _voicecall.play();

            start();
            $('.chat .step-7 .btn-start,.chat .step-7 .btn-end').removeClass('heartbeat');
        }
    });


    $(".chat .step-7 .btn-end").on("click", function (e) {
        e.preventDefault();
        _calling.pause();
        _voicecall.pause();
        pause();
        cron = true;
        setTimeout(function () {
            $('.chat .step-8').fadeIn();
            _scroller();
        }, 1000);
        setTimeout(function () {
            $('.chat .step-9').fadeIn();
            _scroller();
        }, 3000);
        $('.chat .step-7 .btn-start,.chat .step-7 .btn-end').removeClass('heartbeat');
    });


    $('.chat .step-9').on("click", function () {
        $('.chat .step-10').fadeIn();
        _scroller();
        player.playVideo();
    });

    $('.chat .step-12').on("click", function () {
        $('.chat .step-13').fadeIn();
        _scroller();
        player2.playVideo();
    });

    $('.chat .step-16').on("click", function () {
        const pdfPath = 'documents/guia-do-colaborador-tereos.pdf';

        // Verifica se o arquivo existe
        $.ajax({
            url: pdfPath,
            type: 'HEAD',
            success: function () {
                // Se o arquivo existir, inicia o download
                const link = document.createElement('a');
                link.href = pdfPath;
                link.download = pdfPath;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setTimeout(function () {
                    $('.chat .step-16b').fadeIn();
                    _scroller();
                }, 1000);
            },
            error: function () {
                // Se o arquivo não existir, exibe uma mensagem de erro
                console.log('O download falhou: o arquivo não foi encontrado.');
            }
        });

    });

    //NOVO
    $('.chat .step-16b').on("click", function () {
        $('.chat .step-17').fadeIn();
        _scroller();

        const pdfPath = 'documents/guia-de-orientacoes-gerais-tereos.pdf';

        // Verifica se o arquivo existe
        $.ajax({
            url: pdfPath,
            type: 'HEAD',
            success: function () {
                // Se o arquivo existir, inicia o download
                const link = document.createElement('a');
                link.href = pdfPath;
                link.download = pdfPath;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setTimeout(function () {
                    $('.chat .step-18').fadeIn();
                    _scroller();
                }, 1000);
            },
            error: function () {
                // Se o arquivo não existir, exibe uma mensagem de erro
                console.log('O download falhou: o arquivo não foi encontrado.');
            }
        });

    });

    $('.chat .step-18').on("click", function () {
        $('.chat .step-19').fadeIn();
        _scroller();
        player3.playVideo();
    });

    // $( ".chat .step-13" ).on( "click", function() {
    //     $('.chat .step-14').fadeIn();
    //     _scroller();
    //     setTimeout(function (){
    //         $('.chat .step-15').fadeIn();
    //         $('.chat .step-16').fadeIn();
    //         _scroller();
    //     },3000);
    // });



    var hh = 0;
    var mm = 0;
    var ss = 0;

    var tempo = 1000;//Quantos milésimos valem 1 segundo?
    var cron;

    //Inicia o temporizador
    function start() {
        cron = setInterval(() => { timer(); }, tempo);
    }

    //Para o temporizador mas não limpa as variáveis
    function pause() {
        clearInterval(cron);
    }

    //Para o temporizador e limpa as variáveis
    function stop() {
        clearInterval(cron);
        hh = 0;
        mm = 0;
        ss = 0;

        document.getElementById('counter').innerText = '00:00:00';
    }

    //Faz a contagem do tempo e exibição
    function timer() {
        ss++; //Incrementa +1 na variável ss

        if (ss == 59) { //Verifica se deu 59 segundos
            ss = 0; //Volta os segundos para 0
            mm++; //Adiciona +1 na variável mm

            if (mm == 59) { //Verifica se deu 59 minutos
                mm = 0;//Volta os minutos para 0
                hh++;//Adiciona +1 na variável hora
            }
        }

        //Cria uma variável com o valor tratado HH:MM:SS
        var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

        //Insere o valor tratado no elemento counter
        document.getElementById('counter').innerText = format;

        //Retorna o valor tratado
        return format;
    }



    window.audio.addEventListener('timeupdate', (e) => {
        var _currentTime = window.audio.currentTime;
        var _duration = window.audio.duration;
        var _percent = (_currentTime / _duration) * 100;
        var _totalTime = Math.round(_duration);
        var _totalCurrent = Math.round(_currentTime);

        // console.log(_currentTime, 1);
        // console.log(_duration, 2);
        // console.log(_percent, 3);
        // console.log(_totalTime, 4);
        // console.log(_totalCurrent, 5);

        if (!window.drag) {
            // console.log(_percent, 'agora foi');
            $('.audio-music input[type=range]').val(_percent);
        }
        $('.reproduction .current-time').text('00:' + (_totalCurrent < 10 ? '0' + _totalCurrent : _totalCurrent));
        $('.reproduction .duration').text('00:' + (_totalTime < 10 ? '0' + _totalTime : _totalTime));
    });

    $('.audio-music input[type=range]').on('click mouseleave', function (e) {
        window.audio.currentTime = (window.audio.duration / 100) * e.target.value;
        window.drag = false;
    });

    $('.audio-music input[type=range]').on('mousemove', function (e) {
        window.drag = true;
    });

    $('.playing').click(function () {
        if (window.playing == false) {
            $('.fa-play').addClass('active');
            window.audio.play();
            window.playing = true;
            console.log('click no audio');

        } else {
            $('.fa-play').removeClass('active');
            window.audio.pause();
            window.playing = false;
        }
    });

    window.audio.addEventListener('ended', function () {
        setTimeout(function () {
            $('.chat .step-10').fadeIn();
            _scroller();
        }, 1000);
    })

});




function _scroller() {
    // let _maxScroll = $('.container-chat')[0].scrollHeight - $('.container-chat').height();
    let _maxScroll = $('body')[0].scrollHeight;// - $('body').height();
    $("html, body").animate({ scrollTop: _maxScroll }, 1000);
}


var player, player2, player3; //AJUSTE
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//https://www.youtube.com/watch?v=WYswnr-rzA4
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        // height: '360',
        width: '100%',
        videoId: 'WYswnr-rzA4',
        playerVars: {
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    //https://www.youtube.com/watch?v=-ZKOSxomyvg
    player2 = new YT.Player('player2', {
        //height: '360',
        width: '100%',
        videoId: '-ZKOSxomyvg',
        playerVars: {
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    //https://www.youtube.com/watch?v=33GYqwukfxM
    player3 = new YT.Player('player3', {
        height: '360',
        width: '640',
        videoId: '33GYqwukfxM',
        playerVars: {
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('Player READY', event.target.v.id);
    //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    var playerId = 'player' + event.target.id;
    console.log('Player STATE CHANGE', event, playerId);
    if (event.data == YT.PlayerState.ENDED) {
        switch (playerId) {
            case 'player1':
                $('.chat .step-11').fadeIn();
                _scroller();
                setTimeout(function () {
                    $('.chat .step-12').fadeIn();
                    _scroller();
                }, 2000);
                break;
            case 'player2':
                $('.chat .step-13').fadeIn();
                _scroller();
                setTimeout(function () {
                    $('.chat .step-14').fadeIn();
                    _scroller();
                }, 2000);
                setTimeout(function () {
                    $('.chat .step-15').fadeIn();
                    _scroller();
                }, 4000);
                setTimeout(function () {
                    $('.chat .step-16').fadeIn();
                    _scroller();
                }, 6000);
                break;

            case 'player3':
                $('.chat .step-20').fadeIn();
                _scroller();
                break;
        }

        done = true;
    }
}




// $(".chat .step-14").on("click", function () {
//     $('.chat .step-15').fadeIn();
//     _scroller();

//     setTimeout(function () {
//         $('.chat .step-16').fadeIn();
//         _scroller();
//     }, 2000);
//     setTimeout(function () {
//         $('.chat .step-17').fadeIn();
//         _scroller();
//     }, 4000);
//     setTimeout(function () {
//         $('.chat .step-18').fadeIn();
//         _scroller();
//     }, 6000);
// });

// $(".chat .step-22").on("click", function () {
//     $('.chat .step-23').fadeIn();
//     _scroller();

//     setTimeout(function () {
//         $('.chat .step-24').fadeIn();
//         _scroller();
//     }, 2000);
//     setTimeout(function () {
//         $('.chat .step-25').fadeIn();
//         _scroller();
//     }, 4000);
//     setTimeout(function () {
//         $('.chat .step-26').fadeIn();
//         _scroller();
//     }, 6000);
// })


// $(".chat .step-18").on("click", function () {
//     $('.chat .step-19').fadeIn();
//     _scroller();
//     player2.playVideo();
// });




// $(".chat .step-26").on("click", function () {
//     $('.chat .step-27').fadeIn();
//     _scroller();
//     player3.playVideo();
// });