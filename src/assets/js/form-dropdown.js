
$('.btn-add,.btn-subtract').on('click touchstart', function () {

    const qadult = $('#f-qadult').val();
    const qchild = $('#f-qchild').val();
    const qinfant = $('#f-qinfant').val();

    $('.qstring').text(` ${qadult} Adults - ${qchild} Childs - ${qinfant} Infants`);
    event.stopPropagation();
    event.preventDefault();
});



function addValue(a) {
    const sum = a++;
    $('.final-count').text(`${sum}`);
}

var i = 0;

$('.btn-add').on('click touchstart', function () {
    const value = ++i;
    $('.pcount').text(`${value}`);
    addValue(value);
    event.stopPropagation();
    event.preventDefault();
});


$('.btn-subtract').on('click touchstart', function () {
    if (i == 1) {
        $('.pcount').text(1);
        addValue(1);

    } else {
        const value = --i;
        $('.pcount').text(`${value}`);
        addValue(value);
    }
    event.stopPropagation();
    event.preventDefault();
});


$('.btn-add-c').on('click touchstart', function () {
    const value = ++i;
    $('.ccount').text(`${value}`);
    addValue(value);
    event.stopPropagation();
    event.preventDefault();
});


$('.btn-subtract-c').on('click touchstart', function () {
    if (i == 1) {
        $('.ccount').text(1);
        addValue(1);
    } else {
        const value = --i;
        $('.ccount').text(`${value}`);
        addValue(value);
    }
    event.stopPropagation();
    event.preventDefault();
});



$('.btn-add-in').on('click touchstart', function () {
    const value = ++i;
    $('.incount').text(`${value}`);
    addValue(value);
    event.stopPropagation();
    event.preventDefault();
});


$('.btn-subtract-in').on('click touchstart', function () {
    if (i == 1) {
        $('.incount').text(1);
        addValue(1);
    } else {
        const value = --i;
        $('.incount').text(`${value}`);
        addValue(value);
    }
    event.stopPropagation();
    event.preventDefault();
});



$(document).ready(function () {
    $('.cabin-list button').click(function () {
        event.stopPropagation();
        event.preventDefault();
        $('.cabin-list button.active').removeClass("active");
        $(this).addClass("active");
    });
});