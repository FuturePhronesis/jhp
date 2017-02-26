/**
 * Created by thomasmoore on 2/20/17.
 */

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// ---RED---

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-red .accordion-section-title-red').removeClass('active');
        $('.accordion-red .accordion-section-content-red').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-red').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-red ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// ---BLUE---
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-blue .accordion-section-title-blue').removeClass('active');
        $('.accordion-blue .accordion-section-content-blue').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-blue').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-blue ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// ----GREEN-----
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-green .accordion-section-title-green').removeClass('active');
        $('.accordion-green .accordion-section-content-green').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-green').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-green ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// -------PURPLE-------
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-purple .accordion-section-title-purple').removeClass('active');
        $('.accordion-purple .accordion-section-content-purple').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-purple').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-purple ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

//-------YELLOW-------
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-yellow .accordion-section-title-yellow').removeClass('active');
        $('.accordion-yellow .accordion-section-content-yellow').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-yellow').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-yellow ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});