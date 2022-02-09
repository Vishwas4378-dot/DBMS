function callApi2(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data
    }).done(function (msg) {
        window.location ="C:/Users/Sande/Documents/Flask2/ui/index.html";
    });
}