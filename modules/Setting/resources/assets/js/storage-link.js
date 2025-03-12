function storageLink(url) {
    axios
        .get(url)
        .then(function (response) {
            toastr.success(response.data.message);
        })
        .catch(function (error, response) {
            showAxiosErrors(error);
        });
}
