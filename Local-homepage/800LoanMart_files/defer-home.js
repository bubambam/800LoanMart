if (typeof (loadScript) != "function") {
    window["loadScript"] = function (url) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = url;
        document.body.appendChild(js);
    }
}
loadScriptToHead("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/tooltip.min.js", function () {
    loadScriptToHead("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/popover.min.js", function () {
        loadScriptToHead("/scripts/how_it_works.js", function () { });
    });
});