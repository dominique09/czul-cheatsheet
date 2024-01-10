$(function() {
    refreshViewer(getAnchor());

    $('.sheetlink').click(function(e) {
        refreshViewer(e.target.href.split('#').pop());
    });
});


function refreshViewer(doc){
    console.log(doc);
    $('#pdfReader').attr('data', `cheatsheets/${doc}.pdf`);

    $('.active').removeClass('active');
    $(`a[href$="#${doc}"]`).parent().addClass('active');
}

function getAnchor() {
    return $(location).attr('hash').substr(1);
}