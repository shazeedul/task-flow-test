function delete_modal(url, option = null) {
    $("#delete-modal-form").attr("action", url);

    if (typeof option === "string") {
        $("#delete-modal-form").attr("data-table", option);
    } else if (typeof option === "function") {
        $("#delete-modal-form").data("callback", option);
    }

    $("#delete-modal").modal("show");
}

$(document).ready(function () {
    "use strict"; // Start of use strict

    $("#delete-modal-form").submit(function (e) {
        e.preventDefault();
        // custom event
        const deleteModalSubmit = new Event("deleteModalSubmit");
        // Fire the event
        window.dispatchEvent(deleteModalSubmit);
        // get form
        var form = $(this);
        axios
            .delete(form.attr("action"))
            .then(function (response) {
                toastr.success(response.data.message, "Success");
                // custom event
                const deleteModalSuccess = new Event("deleteModalSuccess");
                // Fire the event
                window.dispatchEvent(deleteModalSuccess);
                // close modal
                $("#delete-modal").modal("hide");
                form.trigger("reset");

                if (form.attr("data-table")) {
                    $("#" + form.attr("data-table"))
                        .DataTable()
                        .ajax.reload();
                } else if ($("#page-axios-data").data("table-id") !== null) {
                    $($("#page-axios-data").data("table-id"))
                        .DataTable()
                        .ajax.reload();
                } else {
                    var callback = form.data("callback");
                    if (typeof callback === "function") {
                        callback();
                    } else {
                        var table = $("#page-axios-data").data("table-id");
                        if (table !== null) {
                            try {
                                $(table).DataTable().ajax.reload(null, false);
                            } catch (e) {
                                console.log(e);
                            }
                        } else {
                            location.reload();
                        }
                    }
                }
            })
            .catch(function (error) {
                toastr.error(error.response.data.message, "Error");
            });
    });
});
