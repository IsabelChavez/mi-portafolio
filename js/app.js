$(document).ready(function () {
    tamano = '';
    i = 1;
    ConvertirTexto();
    setInterval(Animar, 90);

    $(function () {
        $("#slideToOpen").slider();
    });

    $(document).ready(function () {

        $('#cache').css('left', parseInt($('#slideToOpen').css('width')) + parseInt($('#slideToOpen').css('left')) + 'px');

        $(window).mousemove(function () {

            if (parseInt($('#slideToOpen > span').css('left')) >= parseInt($('#slideToOpen').css('width')) - 20) {
                $('#slideToOpen').addClass('open');
            } else {
                $('#dot').css('left', parseInt($('#slideToOpen > span').css('left')) + 35);
            }

        });

        $(window).resize(function () {

            var wi = parseInt($('#slideToOpen').css('width'));
            var le = parseInt($('#slideToOpen').css('left'));

            $('#cache').css('left', wi + le + 'px');

        });

        $('#close').click(function () {

            $('#slideToOpen > span').css('left', '0');
            $('#slideToOpen').removeClass('open');

        });

    });
});

function ConvertirTexto() {
    resultado = '';
    cadena = $('#text-animation').html();
    tamano = cadena.length;
    for (var i = 0; i < tamano; i++) {
        letra = cadena.charAt(i);
        resultado += '<span class="ta-letra ">' + letra + '</span>';
    }

    $('#text-animation').html(resultado);
}

function Animar() {
    if (i <= tamano) {
        $('.ta-letra:nth-child(' + i + ')').css('color', '#fff');
    }
    i++;
}

