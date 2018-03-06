$(document).ready(function () {
    $("#textarea").on('input', function (e) {

        // Get maxlength attribute from textarea, otherwise set maxlength to 100
        var maxlength = $(this).attr('maxlength') || 100,

        // Get amount of chars
        box = $(this).val(),

        main = box.length * 100,
        value = main / maxlength,
        count = maxlength - box.length;

        if (box.length <= maxlength) {
            // Show counter and progressbar
            $('.count').html(count);
            $('.bar').animate({'width': value + '%'}, 1);
        }

        if (box.length === maxlength) {
            $(this).css({'border' : '1px solid red'});
            $('.bar').css({"background-color" : "red", "width" : "100%"});
        } else if (box.length < maxlength) {
            $(this).css({'border': '1px solid green'});
            $('.bar').css({'background-color' : 'green'});
        }

        e.preventDefault();
    });
});