$(function() {
    refreshViewer(getAnchor() || 'CYUL_TWR');

    $('.sheetlink').click(function(e) {
        refreshViewer(e.target.href.split('#').pop());
    });
});


function refreshViewer(doc){
    $('#pdfViewer').attr('src', `https://docs.google.com/viewer?url=${document.location.origin}/cheatsheets/${doc}.pdf&embedded=true`);

    $('.active').removeClass('active');
    $(`a[href$="#${doc}"]`).parent().addClass('active');
}

function getAnchor() {
    return $(location).attr('hash').substr(1);
}