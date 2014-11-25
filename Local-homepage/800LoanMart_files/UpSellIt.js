function USI_installCode() {
	var USI_headID = document.getElementsByTagName("head")[0];
	var USI_installID = document.createElement('script');
	USI_installID.type = 'text/javascript';
	USI_installID.src = 'http' + (document.location.protocol == 'https:' ? 's://www' : '://www') + '.upsellit.com/launch.jsp?qs=269204235220337298307314292338312295291290341331292295298310&siteID=6861';
	USI_headID.appendChild(USI_installID);
}
if (window.addEventListener) {
 	window.addEventListener('load', USI_installCode, true);
} else if (window.attachEvent) {
	window.attachEvent('onload', USI_installCode);
} else {
	USI_installCode();
}
