/*jslint plusplus:true, evil:true */
/*global console, alert , $, jquery  */
$(document).ready(function () {
    "use strict";
    var s = $('#apper_img').css('backgroundImage'),
        n = $('#bttn2').css('backgroundImage');
    $('#apper_img').click(function () {
        if (s === "none") {
            s = $('#apper_img').css('backgroundImage');
        }
        
       
        if ($('#apper_img').css('backgroundImage') === s) {
            $('#apper_img').css('backgroundImage', 'url("img/mobile-close.png")');
            $('#Z').css('opacity', '.9');

        } else {
            $('#apper_img').css('backgroundImage', 'url("img/mobile-menu.png")');
            $('#Z').css('opacity', '0');
        }
    });
    $('#bttn2').click(function () {
        if (n === "none") {
            n = $('#bttn2').css('backgroundImage');
        }
        
        if ($('#bttn2').css('backgroundImage') === n) {
            $('#bttn2').css('backgroundImage', 'url("img/mobile-collapse.png")');
            $('.class_show').show();

        } else {
            $('#bttn2').css('backgroundImage', 'url("img/mobile-expand.png")');
            $('.class_show').hide();
            console.log($('#bttn2').css('backgroundImage'));
        }
    });
    $(window).on("resize mousemove", function () {
        if ($(this).width() <= 975) {
            $('#bttn2').show();
            $('.add').hide();
        } else {
            $('#bttn2').hide();
            $('.class_show').hide();
            $('#classes').one("mouseenter", function () {
                $('.add').show();
            });
            $('#classes').one("mouseleave", function () {
                $('.add').hide();
            });
        }
    });
    
});











