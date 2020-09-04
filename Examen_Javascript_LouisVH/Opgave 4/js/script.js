$('textarea').keyup(lengtetekst);
$('textarea').keydown(lengtetekst);

function lengtetekst() {
    var cs = $(this).val().length;
    $('#tekst').text(cs);
}