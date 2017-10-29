"use strict";
//nothing is filled out yet
var fn = false;
var ln = false;
var em = true;
//hide all warnings and disable the submit button at the beginning
$('#firstNameMandatory').hide();
$('#lastNameMandatory').hide();
$('#emailMandatory').hide();
checkSubmit();
$('#otherMediaChannel').hide();
//all the events
//checks the first name field
$('#firstName').blur(function () {
    if (!$(this).val()) {
        $('#firstNameMandatory').show();
        fn = false;
    }
    else {
        $('#firstNameMandatory').hide();
        fn = true;
    }
    checkSubmit();
});
//checks the last name field
$('#lastName').blur(function () {
    if (!$(this).val()) {
        $('#lastNameMandatory').show();
        ln = false;
    }
    else {
        $('#lastNameMandatory').hide();
        ln = true;
    }
    checkSubmit();
});
//checks the email field
$('#email').blur(function () {
    checkEmail();
});
$('#newsletter').on("click", function () {
    checkEmail();
});
function checkEmail() {
    if (!$('#email').val() && $('input.form-check-input').is(':checked')) {
        $('#emailMandatory').show();
        em = false;
    }
    else {
        $('#emailMandatory').hide();
        em = true;
    }
    checkSubmit();
}
//check optional selection
$('#mediaChannelSelect').on("change", function () {
    if ($('#mediaChannelSelect option:selected').text() == 'Other') {
        $('#otherMediaChannel').show();
    }
    else {
        $('#otherMediaChannel').hide();
    }
});
//function to check if the submit button should be enabled or disabled
function checkSubmit() {
    if (fn && ln && em) {
        $(':input[type="submit"]').prop("disabled", false);
    }
    else {
        $(':input[type="submit"]').prop("disabled", true);
    }
}
