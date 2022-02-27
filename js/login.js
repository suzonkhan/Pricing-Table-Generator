jQuery(document).ready(function () {
    jQuery('.userlogin').submit(function (event) {
        var formData = $(this).serializeArray();
        event.preventDefault();
        if (formData[0].value === "show" && formData[1].value === "COMpkg123") {
            sessionStorage.setItem("login", true);
            location.replace("package.html")
        } else {
            jQuery(".warning-msg").text(" Please use correct info to show this content").addClass("danger");
        }
    });
})