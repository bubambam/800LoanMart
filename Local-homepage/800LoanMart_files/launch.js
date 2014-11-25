
var USItimerID = '';
var properClickThrough = false;
var USIdone = false;
var USI_suppress = false;
if (typeof(noChatPlease) != "undefined") {
	if (noChatPlease) {
	properClickThrough = true; USIdone = true;
	}
}







usi_alert = function(msg) {}


var USIqs = "";
var USIsiteID = "";
var USI_key = "";
var usi_url = location.href.toLowerCase();

if (usi_url.indexOf("800loanmart.com/application.aspx?step=2") != -1) {
   var USI_headID = document.getElementsByTagName("head")[0];
   var USI_dynScript2 = document.createElement("script");
   USI_dynScript2.setAttribute("type","text/javascript");
   USI_dynScript2.setAttribute("src","//www.upsellit.com/cookie.jsp?value=seenChat&maxAge=1209600&siteID=6861");
   USI_headID.appendChild(USI_dynScript2);
}

if (usi_url.indexOf("usitest") != -1) {
	USIqs = "254258223253254325338312308323343300337312314344301273312330307";
	USIsiteID = "10689";
} else {
	USIqs = "239245202230220297336309272289295334334329342324310305344291341";
	USIsiteID = "10690";
}

if (USIqs != "") {
	var USI_headID = document.getElementsByTagName("head")[0];
	var USI_dynScript = document.createElement("script");
	USI_dynScript.setAttribute("type","text/javascript");
	USI_dynScript.setAttribute("src","//www.upsellit.com/upsellitJS4.jsp?qs="+USIqs+"&siteID="+USIsiteID+"&keys="+USI_key);
	USI_headID.appendChild(USI_dynScript);
}