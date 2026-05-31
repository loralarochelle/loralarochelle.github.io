$(document).ready(function () {

    function showSection(sectionId) {

        $('.content-region').removeClass('active');

        $(sectionId).addClass('active');
    }

    if (window.location.hash) {
        showSection(window.location.hash);
    } else {
        showSection('#Home');
    }

    $('.main-menu a').click(function () {

        const target = $(this).attr('href');

        showSection(target);
    });

});