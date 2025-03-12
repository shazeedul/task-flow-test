$(function () {
    ("use strict"); // Start of use strict


    $(".message-content").on('click', function(){
        var value = $(this).attr('data-value');
        $(".message-content").removeClass('sb-active');

        $(this).addClass('sb-active');
        $("#chat_box_background_image").val(value);
    });


    // Initialize clipboard
    new ClipboardJS(".clipboard");
    // start extraOptionDoc
    $("#extraOptionDocOpen").on("click", function () {
        $("#extraOptionDetails").css({
            display: "block",
        });
        $(this).css({
            display: "none",
        });
        $("#extraOptionDocClose").css({
            display: "inline-block",
        });
    });
    $("#extraOptionDocClose").on("click", function () {
        $("#extraOptionDetails").css({
            display: "none",
        });
        $(this).css({
            display: "none",
        });
        $("#extraOptionDocOpen").css({
            display: "inline-block",
        });
    });
    // end extraOptionDoc

    // start extraOption
    $("#extraOptionOpen").on("click", function () {
        $("#extraOption").css({
            display: "block",
        });
        $(this).css({
            display: "none",
        });
        $("#extraOptionClose").css({
            display: "inline-block",
        });
    });
    $("#extraOptionClose").on("click", function () {
        $("#extraOption").css({
            display: "none",
        });
        $(this).css({
            display: "none",
        });
        $("#extraOptionOpen").css({
            display: "inline-block",
        });
        $("#setting_details_textarea").val("");
    });
    // end extraOption

    // start addNote
    $("#addNoteOpen").on("click", function () {
        $("#addNote").css({
            display: "block",
        });
        $(this).css({
            display: "none",
        });
        $("#addNoteClose").css({
            display: "inline-block",
        });
    });
    $("#addNoteClose").on("click", function () {
        $("#addNote").css({
            display: "none",
        });
        $(this).css({
            display: "none",
        });
        $("#addNoteOpen").css({
            display: "inline-block",
        });
        $("#setting_note_textarea").val("");
    });
    // end addNote

    for (
        var e = document.getElementsByClassName("ace_editor"), t = 0;
        t < e.length;
        t++
    ) {
        var n = ace.edit(e[t].id),
            r = document.getElementById(e[t].id + "_textarea");
        e[t].getAttribute("data-theme") &&
            n.setTheme("ace/theme/" + e[t].getAttribute("data-theme")),
            e[t].getAttribute("data-language") &&
                n
                    .getSession()
                    .setMode("ace/mode/" + e[t].getAttribute("data-language")),
            n.on("change", function (e, t) {
                var data_language = t.container.getAttribute("data-language");
                (ace_editor_id = t.container.id),
                    (r = document.getElementById(ace_editor_id + "_textarea")),
                    (ace_editor_instance = ace.edit(ace_editor_id)),
                    (ace_editor_value = ace_editor_instance.getValue());

                if (data_language && data_language == "json") {
                    try {
                        JSON.parse(ace_editor_value);
                    } catch (e) {
                        return (ace_editor_value = {});
                    }
                }
                r.value = ace_editor_value;
            });
    }
    tinymce.init({
        selector: ".tinymce",
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
            "imagetools",
            "code",
            "codesample",
        ],
        menubar: false,
        // statusbar: false,
        toolbar: false,
        toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist table | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen preview save print || insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment|code ",
        content_css: [
            "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
            "//www.tiny.cloud/css/codepen.min.css",
        ],
    });
    $(".select2").select2();
    $(".select2Tag").select2({
        tags: true,
    });
});

function delete_action(url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            $("#setting-delete-form").attr("action", url).submit();
            Swal.fire({
                type: "success",
                title: "Deleted!",
                text: "Your file has been deleted.",
                confirmButtonClass: "btn btn-success",
            });
        }
    });
}
