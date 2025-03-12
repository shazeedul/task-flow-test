$(document).ready(function () {
    ("use strict"); // Start of use strict

    if ($("#session_success").val()) {
        toastr.success($("#session_success").val());
    }
    if ($("#session_error").val()) {
        toastr.error($("#session_error").val());
    }
    if ($("#session_warning").val()) {
        toastr.warning($("#session_warning").val());
    }
    if ($("#session_info").val()) {
        toastr.info($("#session_info").val());
    }
    if ($("#session_error_count").val()) {
        for (let index = 0; index < $("#session_error_count").val(); index++) {
            toastr.error($("#session_error" + index).val());
        }
    }
    if ($(".session_error_array").length > 0) {
        $(".session_error_array").each(function () {
            toastr.error($(this).val());
        });
    }
});
