$(document).ready(function () {
    ("use strict"); // Start of use strict

    $("#create-permission-group").select2({
        dropdownParent: $("#create-permission-modal"),
        tags: true,
    });

    $("#create-permission-form").submit(function (e) {
        e.preventDefault();
        store($(this));
    });

    $("#edit-permission-group").select2({
        dropdownParent: $("#edit-permission-modal"),
        tags: true,
    });
    $("#update-permission-form").submit(function (e) {
        e.preventDefault();
        update($(this));
    });
});

function showCreateModal() {
    $("#create-permission-group").empty();
    axios
        .get($("#page-axios-data").data("only-groups"))
        .then((res) => {
            $.each(res.data.data, function (key, value) {
                $("#create-permission-group").append(
                    '<option value="' + value + '">' + value + "</option>"
                );
            });
        })
        .catch((err) => {
            showAxiosErrors(err);
        });

    $("#create-permission-modal").modal("show");
}

function showEditModal(id) {
    axios
        .get($("#page-axios-data").data("edit"), {
            params: {
                id: id,
            },
        })
        .then((res) => {
            $("#update_permission_name").val(res.data.data.permission.name);
            $("#update_permission_id").val(res.data.data.permission.id);
            $("#edit-permission-group").empty();
            $.each(res.data.data.groups, function (key, value) {
                let selected =
                    value == res.data.data.permission.group ? "selected" : null;
                $("#edit-permission-group").append(
                    '<option value="' +
                        value +
                        '" ' +
                        selected +
                        ">" +
                        value +
                        "</option>"
                );
            });

            $("#edit-permission-modal").modal("show");
        })
        .catch((err) => {
            showAxiosErrors(err);
        });
}

/**
 * Store data
 * @param form
 */
function store(form) {
    var data = form.serialize();
    axios
        .post($("#page-axios-data").data("create"), data)
        .then(function (response) {
            toastr.success(response.data.message, "Success");
            $("#create-permission-modal").modal("hide");
            form.trigger("reset");
            $($("#page-axios-data").data("table-id"))
                .DataTable()
                .ajax.reload(null, false);
        })
        .catch((err) => {
            showAxiosErrors(err);
        });
}

/**
 * Update data
 * @param form
 */
function update(form) {
    var data = form.serialize();
    axios
        .put($("#page-axios-data").data("update"), data)
        .then(function (response) {
            toastr.success(response.data.message, "Success");
            $("#edit-permission-modal").modal("hide");
            form.trigger("reset");
            $($("#page-axios-data").data("table-id"))
                .DataTable()
                .ajax.reload(null, false);
        })
        .catch((err) => {
            showAxiosErrors(err);
        });
}
