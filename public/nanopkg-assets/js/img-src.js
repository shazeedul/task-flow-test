// get_img_url(this, "#UserImage");
function get_img_url(input, src) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(src).attr("src", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
