function PaaswordConfrim() {
    Swal.fire({
        title: "Confirm Password",
        text: "For your security, please confirm your password to continue.",
        input: "password",
        inputAttributes: {
            autocapitalize: "password",
            placeholder: "Enter Your Password",
            required: "required",
        },
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#49cdd0",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
        confirmButtonClass: "btn ",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: true,
        inputValidator: (value) => {
            if (!value) {
                return "Password field can't be empty";
            }
        },
    }).then(function (result) {
        if (result.value) {
            $("#PaaswordConfrimFormPassword").val(result.value);
            $("#PaaswordConfrimForm").submit();
        }
    });
}
