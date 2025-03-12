function exportColumnToTextFile() {
    const columnIndex = 0; // Change this to the index of the column you want to export (starting from 0)
    const table = document.getElementById("two-factor-recovery-codes");
    let columnContent = "";

    // Loop through each row in the table and append the content of the selected column to the columnContent variable
    for (let i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        columnContent += row.cells[columnIndex].textContent + "\n";
    }
    // Create a new Blob object with the column content and set the filename
    var fileName = "two-factor-recovery-codes.txt";
    // Create a new Blob object with the column content and set the filename
    var blob = new Blob([columnContent], { type: "text/plain" });

    // Create a new link element and set its attributes to trigger a download of the file
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document body and click it to trigger the download
    document.body.appendChild(link);

    console.log(`Link element created: ${link.outerHTML}`);

    link.click();

    // Clean up by removing the link and revoking the object URL
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

/**
 *  Two Factor Authentication
 */
function twofactore(action) {
    if (action != "enable") {
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
                $("#twofactoreFormAction").val(action);
                $("#twofactoreFormPassword").val(result.value);
                $("#twofactoreForm").submit();
            }
        });
    } else {
        $("#twofactoreFormAction").val(action);
        $("#twofactoreForm").submit();
    }
}
