function uploadFile(blobInfo, success, failure) {
    let data = new FormData();
    data.append("file", blobInfo.blob(), blobInfo.filename());
    axios
        .post($("#media-upload-url").attr("data-file-upload-url"), data)
        .then(function (res) {
            success(res.data.location);
        })
        .catch(function (err) {
            failure("HTTP Error: " + err.message);
        });
}
tinymce.init({
    selector: ".setting-tinymce",
    height: 372 - 99,
    plugins: [
        "autolink",
        "lists",
        "link",
        "image",
        // 'charmap',
        "anchor",
        // 'searchreplace',
        // 'visualblocks',
        "fullscreen",
        // 'insertdatetime',
        "table",
        "paste",
        "image",
        "media",
        "file",
        "code",
        "codesample",
    ],
    menubar: true,
    // statusbar: false,
    toolbar: true,
    toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist table | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen preview save print || insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment|code ",
    content_css: [
        "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
        "//www.tiny.cloud/css/codepen.min.css",
    ],
    convert_urls: false,
    automatic_uploads: true,
    // file_picker_types: "image",
    // images_upload_handler: uploadFile,
    file_picker_types: "media file image",
    /* and here's our custom image picker*/
    file_picker_callback: function (callback, value, meta) {
        var input = document.createElement("input");
        input.setAttribute("type", "file");

        if (meta.filetype == "image") {
            input.setAttribute("accept", "image/*");
        }
        if (meta.filetype == "media") {
            input.setAttribute("accept", "video/*");
        }
        if (meta.filetype == "file") {
            input.setAttribute("accept", "*");
        }
        /*
  Note: In modern browsers input[type="file"] is functional without
  even adding it to the DOM, but that might not be the case in some older
  or quirky browsers like IE, so you might want to add it to the DOM
  just in case, and visually hide it. And do not forget do remove it
  once you do not need it anymore.
*/
        input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
                /*
  Note: Now we need to register the blob in TinyMCEs image blob
  registry. In the next release this part hopefully won't be
  necessary, as we are looking to handle it internally.
*/
                var id = "blobid" + new Date().getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(",")[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                let data = new FormData();
                data.append("file", blobInfo.blob(), blobInfo.filename());
                axios
                    .post(
                        $("#media-upload-url").attr("data-file-upload-url"),
                        data
                    )
                    .then(function (res) {
                        callback(res.data.location);
                    })
                    .catch(function (err) {
                        failure("HTTP Error: " + err.message);
                    });

                /* call the callback and populate the Title field with the file name */
            };
            reader.readAsDataURL(file);
        };

        input.click();
    },
});
