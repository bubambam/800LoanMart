//Third party scripts

// Accordion
$(document).ready(function () {
    $("#accordion").accordion();
    if (currentPage == "/" || currentPage == "/home.aspx")
        $("#divReadMore").show();
});
function ToggleAccordion() {
    $("#pSummary").hide();
    $(".ui-accordion-content").css("height", "auto");
    $(".ui-accordion-content").css("overflow", "visible");
    $(".ui-accordion-content").css("padding", "30px");
    $("#divAccordion").show();
}

//adroll
adroll_adv_id = "OGSOJDI22JDL3D7BNBS2QB";
adroll_pix_id = "BUCCNOSPM5F2FNQ63P2QCF";
(function () {
    var oldonload = window.onload;
    window.onload = function () {
        __adroll_loaded = true;
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
        if (oldonload) { oldonload() }
    };
} ());