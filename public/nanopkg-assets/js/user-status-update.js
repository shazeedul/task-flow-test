function userStatusUpdate(t, s, a) {
    axios
        .post(t, { status: $("#status_id_" + s).val() })
        .then((t) => {
            if (t.data.message) {
                toastr.success(t.data.message, "Success");
            } else {
                toastr.success("User Status Successfully Updated.");
            }
        })
        .catch((err) => {
            $("#status_id_" + s).val(a);
            if (err.response.data.message) {
                toastr.error(err.response.data.message, "Error");
            } else {
                toastr.error("Failed to Update User Status");
            }
        });
}
