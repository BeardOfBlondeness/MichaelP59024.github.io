function loadPosts() {

$.ajax({
    url: "/posts/",
    success: function (data) {
        var image_count = $(data).length();     
    }
});
}
