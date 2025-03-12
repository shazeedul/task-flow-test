$(function () {
    addNewLocalRow();
    var table = $("#local-builder-table").DataTable({
        // table responsive
        responsive: true,
        serverSide: false,
        processing: true,
        saveState: true,
        ajax: $("#local-builder-table").data("ajax"),
        columns: [
            {
                data: "key",
                name: "key",
                className: "text-start",
                render: function (data, type, row) {
                    // replace underscore with space
                    data = data.replace(/_/g, " ");
                    return data;
                },
            },
            {
                data: "value",
                name: "value",
                className: "text-start",
                render: function (data, type, row) {
                    return type === "display"
                        ? `<div contenteditable="true" class="editable-value" data-key="${row.key}" data-value="${row.value}">` +
                              data +
                              "</div>"
                        : data;
                },
            },
            {
                // Action buttons column
                data: null,
                // responsivePriority
                responsivePriority: -1,
                render: function (data, type, full, meta) {
                    return `<a href="javascript:void(0);" class="btn btn-danger btn-sm" onclick="deleteLocalBuilderTable('${data.key}')"  title="Delete"><i class="fa fa-trash"></i></a>`;
                },
                orderable: false, // Disable sorting for this column
                searchable: false, // Disable searching for this column
            },
        ],
        dom: "<'row mb-3'<'col-md-4'l><'col-md-4 text-center'B><'col-md-4'f>>rt<'bottom'<'row'<'col-md-6'i><'col-md-6'p>>><'clear'>",
        buttons: [
            {
                extend: "reset",
                className: "btn btn-success box-shadow--4dp btn-sm-menu",
            },
            {
                extend: "reload",
                className: "btn btn-success box-shadow--4dp btn-sm-menu",
            },
        ],
    });
    table.on("blur", "div.editable-key", function () {
        let orginal_key = $(this).data("key");
        let orginal_value = $(this).data("value");
        var newKey = $(this).text();
        if (newKey === orginal_key) return;
        updateLocalBuilderTable(orginal_key, orginal_value, newKey);
    });
    // Add event listeners for saving changes on blur
    table.on("blur", "div.editable-value", function () {
        let orginal_key = $(this).data("key");
        let orginal_value = $(this).data("value");
        var value = $(this).text();
        if (value === orginal_value) return;
        updateLocalBuilderTable(orginal_key, value);
    });
});

function updateLocalBuilderTable(key, value, new_key = null) {
    axios
        .post($("#local-builder-table").data("ajax"), {
            key: key,
            new_key: new_key,
            value: value,
        })
        .then(function (response) {
            console.log(response);
            toastr.success(response.data.message);
            // $("#local-builder-table").DataTable().ajax.reload(null, false);
        })
        .catch(function (error) {
            toastr.error("Something went wrong! Please refresh the page.");
        });
}

function deleteLocalBuilderTable(key) {
    axios
        .delete($("#local-builder-table").data("ajax"), {
            data: {
                key: key,
            },
        })
        .then(function (response) {
            toastr.success(response.data.message);
            $("#local-builder-table").DataTable().ajax.reload(null, false);
        })
        .catch(function (error) {
            toastr.error("Something went wrong! Please refresh the page.");
        });
}

function addNewLocalRow() {
    var builder = $("#build-local");
    // count tbody tr
    var tr_count = builder.find("tr").length;
    var btn = "";
    if (tr_count <= 1) {
        btn = `<button class="btn btn-success bg-success btn-sm" onclick="addNewLocalRow()" type="button">
                    <i class="fa fa-plus"></i>
                </button>`;
    } else {
        btn = `<button class="btn btn-danger btn-sm" onclick="deleteLocalRow()" type="button">
                    <i class="fa fa-trash"></i>
                </button>`;
    }
    var tr = `<tr id="serial">
                <td class="p-2">
                    <input type="text" name="key[]" value="" class="form-control" placeholder="Enter your key" required>
                </td>
                <td class="p-2">
                    <input type="text" name="label[]" value="" class="form-control"  placeholder="Enter your value" required>
                </td>
                <td>
                    ${btn}
                </td>
            </tr> `;
    $("#build-local").append(tr);
}

function deleteLocalRow() {
    // cache event target
    var target = $(event.target);
    // get the tr
    var tr = target.closest("tr");
    // check table row count
    var tr_count = $("#build-local").find("tr").length;
    if (tr_count <= 1) {
        toastr.error("Can't delete the last row!");
    } else {
        tr.remove();
    }
}

function buildLocalForm() {
    event.preventDefault();
    var form = $("#build-local-form");
    //
    var action = form.attr("action");
    var method = form.attr("method");
    var enctype = form.attr("enctype");
    var data = new FormData(form[0]);
    // now call axios using action, method, data
    axios
        .post(action, data)
        .then(function (response) {
            toastr.success(response.data.message);
            // check if redirect is set
            var builder = $("#build-local");
            // remove all tr except first
            builder.find("tr:gt(0)").remove();
            // add new row
            addNewLocalRow();
            // reload table
            $("#local-builder-table").DataTable().ajax.reload(null, false);
        })
        .catch(function (error) {
            toastr.error("Something went wrong! Please refresh the page.");
        });
}
