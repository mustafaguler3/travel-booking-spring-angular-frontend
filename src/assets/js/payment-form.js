$(document).ready(function () {
    $('input[type="radio"]').on('click', function () {
        var inputValue = $(this).val(); // get the value of the selected radio button
        var targetBox = $("." + inputValue); // select the corresponding payment box
        $(".payment_toggle").not(targetBox).hide(); // hide other payment boxes
        targetBox.show(); // show the selected payment box
    });
});