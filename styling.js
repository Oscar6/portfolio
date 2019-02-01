$(document).ready(function () {
    $('.work').click(function () {
        if ($('.workContent').hasClass('slide-up')) {
            $('.workContent').addClass('slide-down', 1000);
            $('.workContent').removeClass('slide-up');

        } else {
            $('.workContent').removeClass('slide-down');
            $('.workContent').addClass('slide-up', 1000);
        }
    });
});

$(document).ready(function () {
    $('.about').click(function () {
        if ($('.aboutContent').hasClass('slide-up')) {
            $('.aboutContent').addClass('slide-down', 1000);
            $('.aboutContent').removeClass('slide-up');

        } else {
            $('.aboutContent').removeClass('slide-down');
            $('.aboutContent').addClass('slide-up', 1000);
        }
    });
});

$(document).ready(function () {
    $('.contact').click(function () {
        if ($('.contactContent').hasClass('slide-up')) {
            $('.contactContent').addClass('slide-down', 1000);
            $('.contactContent').removeClass('slide-up');

        } else {
            $('.contactContent').removeClass('slide-down');
            $('.contactContent').addClass('slide-up', 1000);
        }
    });
});
