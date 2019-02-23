$(function() {
    console.log( "ready!" );

    $(document).on('click', '.home-item', function() {
        $('.main').load('news-details.html .news-details-section-wrapper', function (response, status, xhr) {
            if (status == "error") {
                let msg = "Sorry but there was an error: ";
                $("#error").html(msg + xhr.status + " " + xhr.statusText);
            }
        });
    })
});
