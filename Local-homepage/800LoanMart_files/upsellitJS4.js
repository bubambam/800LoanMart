
var USItimerID = '';
var properClickThrough = false;
var USIdone = false;
var USI_suppress = false;
if (typeof(noChatPlease) != "undefined") {
	if (noChatPlease) {
	properClickThrough = true; USIdone = true;
	}
}







var usi_error_submits = 0;
function stopError(usi_msg, usi_url, usi_linenumber) {
	if (usi_url.indexOf("upsellit.com") != -1 && usi_url.indexOf("err.jsp") == -1 && usi_error_submits < 5) {
		usi_error_submits++;
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_errorScript = document.createElement('script');
		USI_errorScript.type = 'text/javascript';
		USI_errorScript.src = 'http://www.upsellit.com/err.jsp?oops='+escape(usi_msg)+'-'+escape(usi_url)+'-'+escape(usi_linenumber);
		USI_headID.appendChild(USI_errorScript);
	}
	return true;
}
if (location.href.indexOf("usishowerrors") == -1) {
window.onerror = stopError;
}
function usi_readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function usi_setCookie(name, value, expires) {
	var date = new Date();
	date.setTime(date.getTime()+expires);
	expires = '; expires='+date.toGMTString();
	document.cookie = name+"="+escape(value)+expires+'; path=/';
	var cookie = null;
}


var USISeenCookie = usi_readCookie('u-upsellit10690');
var cookieSuppress = 0;
if (USISeenCookie != null && (USISeenCookie == 'seenChat' || USISeenCookie == 'pixelSeen')) {
	cookieSuppress = 1;
}
USISeenCookie = usi_readCookie('u-upsellitc2243');
if (USISeenCookie != null && (USISeenCookie == 'seenChat' || USISeenCookie == 'pixelSeen')) {
	cookieSuppress = 1;
}



try{
if (!(typeof USI_placedChat === "undefined"))
    cookieSuppress = 1;
} catch(e) {}
if (cookieSuppress == 0) {
















function USI_agent(v) {
	return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0));
}
function USI_xy(e,v) {
	return(v?(USI_agent('msie')?event.clientY+document.body.scrollTop:e.pageY):(USI_agent('msie')?event.clientX+document.body.scrollTop:e.pageX));
}
function dragStart(e,dragID) {
	var d = document.getElementById(dragID);
	var USIscreenWidth = (window.innerWidth) ? window.innerWidth : document.body.clientWidth;
	var USIscreenHeight = (window.innerHeight) ? window.innerHeight : document.body.clientHeight;
	var oX = (d.style.left.indexOf('%') == -1) ? parseInt(d.style.left) : (USIscreenWidth)*(parseInt(d.style.left)/100);
	var oY = (d.style.top.indexOf('%') == -1) ? parseInt(d.style.top) : (USIscreenHeight)*(parseInt(d.style.top)/100);
	var eX=USI_xy(e),eY=USI_xy(e,1),tX,tY,USI_stop_drag;
	function dragGo(event) {
		if(!USI_stop_drag) {
			d.style.top=(tX=USI_xy(event,1)+oY-eY+'px');
			d.style.left=(tY=USI_xy(event)+oX-eX+'px');
		}
		try{
		window.event.returnValue = false;
		}catch(er1){}
	}
	function dragStop(event) {
		USI_stop_drag=1;
		if (document.detachEvent) {
			document.detachEvent("onmousemove", dragGo);
			document.detachEvent("onmouseup", dragStop);
		} else {
			document.removeEventListener("mousemove", dragGo, true);
			document.removeEventListener("mouseup", dragStop, true);
		}
	}
	if (document.attachEvent) {
		document.attachEvent("onmousemove", dragGo);
		document.attachEvent("onmouseup", dragStop);
	} else {
		document.addEventListener("mousemove", dragGo, true);
		document.addEventListener("mouseup", dragStop, true);
	}
}
function unBlurAll() {
	var formCount = 0;
	while (document.forms[formCount] != null ) {
		for (elementCount=0; document.forms[formCount].elements.length>elementCount; elementCount++) {
			elemt = document.forms[formCount].elements[elementCount];
			elemt.blur();
		}
	formCount++;
	}
}
function changeSelectBoxes(visibility){
	var element_object = document.getElementsByTagName('select');
	for (var i = 0; i != element_object.length; i++){
		element_object[i].style.visibility = visibility;
	}
}






USI_placedShadow = 0;
function USI_placeBackgroundShadow() {
	try {
		if (USI_placedShadow == 0) {
			USI_placedShadow = 1;
			var USI_overlayDivStyle = document.createElement('style');
			USI_overlayDivStyle.setAttribute('type', 'text/css');
			
			var backgroundStyle = '#USI_overlayDiv {background: url(http://www.upsellit.com/images/overlay1.png);}';
			
			if (USI_overlayDivStyle.styleSheet) { // IE does it this way
				USI_overlayDivStyle.styleSheet.cssText = backgroundStyle;
			} else {
				var styleTextNode = document.createTextNode(backgroundStyle);
				USI_overlayDivStyle.appendChild(styleTextNode);
			}
			document.getElementsByTagName('head')[0].appendChild(USI_overlayDivStyle);
			var USI_overlayDiv = document.createElement('div');
			USI_overlayDiv.setAttribute('id','USI_overlayDiv');
			USI_overlayDiv.style.position = 'absolute';
			USI_overlayDiv.style.left = '0px';
			USI_overlayDiv.style.top = '0px';
			USI_overlayDiv.style.width = '100%';
			USI_overlayDiv.style.height = '100%';
			USI_overlayDiv.style.zIndex = 99201;
			USI_overlayDiv.style.display = 'none';
			document.getElementsByTagName('body')[0].appendChild(USI_overlayDiv);
		}
	} catch (e) {}
}
function USI_getDocHeight() {
	return Math.max(
		Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
		Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
		Math.max(document.body.clientHeight, document.documentElement.clientHeight)
	);
}
function USI_getDocWidth() {
	return Math.max(
		Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
		Math.max(document.body.offsetWidth, document.documentElement.offsetWidth),
		Math.max(document.body.clientWidth, document.documentElement.clientWidth)
	);
}
function USI_grayOut(bool) {
	try {
		if (bool) {
			var overlay_object = document.getElementById('USI_overlayDiv');
			overlay_object.style.height = USI_getDocHeight() + 'px';
			overlay_object.style.width = USI_getDocWidth() + 'px';
			overlay_object.style.display = 'inline';
			overlay_object.onclick = function() {  }
		} else {
			var overlay_object = document.getElementById('USI_overlayDiv');
			overlay_object.style.display = 'none';
		}
	} catch (e) {}
}

var usi_useSecondOpeners = false;

var usi_messageArray = new Array();
var link1 = "http://www.800loanmart.com/up", link2 = "http://www.800loanmart.com/contact.aspx", link3 = "", chatID = "2201037487330849817777", usi_country = "us", agentName = "Jenny", usi_remoteIP = "199.188.130.62";

window_left = 10;
window_top = 20;


var usi_isLive = 0;

var usi_getLastActiveTime = -1;
var usi_scriptID = 0;
function usi_LoadDynamics(theURL) {
	try {
		usi_scriptID++;
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_dynScript = document.createElement("script");
		USI_dynScript.setAttribute("id","usi_AJAXScript"+usi_scriptID);
		USI_dynScript.setAttribute("type","text/javascript");
		USI_dynScript.setAttribute("src","http://www.upsellit.com/"+theURL+"&bustCache="+Math.random());
		USI_headID.appendChild(USI_dynScript);
		setTimeout('usi_removeScript('+usi_scriptID+')', 10000);
	} catch(e) {}
}
function usi_removeScript(usi_scriptRemoveID) {
	var scriptToRemove = document.getElementById("usi_AJAXScript"+usi_scriptRemoveID);
	if (scriptToRemove != null) {
		document.getElementsByTagName("head")[0].removeChild(scriptToRemove);
	}
}
var usi_chatDisplayerID = -1, usi_updateCheckerID = -1, usi_agentIsTypingID = -1, usi_BeenIdleID = -1, usi_lastTalker = 0, usi_customerHasTyped = 0, usi_isTyping = 0;
var usi_updateFrequencyRate = 500, usi_idleTime=2.0, usi_currentlyTypingMsg = "", usi_session_id="6DEC3D3D78372BE2AEBF7F2E79D92DEA";

var usi_aname = '', usi_hybrid_invite="null";
var usi_idleMsg='<b>Jenny Says:</b> I\'ll be here if you have any more questions :)', usi_extraHybridInfo = '';
if (usi_hybrid_invite == "true") {
	usi_extraHybridInfo = "&sess="+usi_session_id+"&aname="+ usi_aname;
} else if (usi_session_id != "") {
	usi_extraHybridInfo = "&sess="+usi_session_id;
}

function usi_sendCustomerInput() {
	var usi_sendMsg = document.getElementById("usi_chatInput").value;
	document.getElementById("usi_chatInput").value = "";
	document.getElementById("usi_chatInput").focus();
	usi_sendMsg = usi_sendMsg.replace("<", "&lt;").replace(">", "&gt;");
	try {
		usi_sendMsg = usi_sendMsg.replace(/\r/g,' ').replace(/\n/g,' ');
	} catch (e) {}
	if (usi_sendMsg.replace(/^\s+|\s+$/g, '') == "") {
		return;
	}
	if (usi_customerHasTyped == 0) {
		usi_customerHasTyped = 1;
		usi_removeOpeners();
	}
	usi_isTyping = 0;
	usi_LoadDynamics("httpPost_js.jsp?command=MSG&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(usi_sendMsg) + usi_extraHybridInfo);
	usi_displayMsg("<font color='#0000FF'><b>You: </b>"+usi_sendMsg+"</font>", 1, -1);
	usi_updateFrequencyRate = 500;
	usi_getLastActiveTime = usi_getCurrentTimeStamp();
	usi_startHTTPUpdates();
}
function usi_removeOpeners() {
	var usi_intro = 0;
	usi_agentIsTypingClear();
	usi_currentlyTypingMsg = "";
	var theLength = usi_messageArray.length;
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
		usi_intro = t[3];
		msg = t[2];
		if (usi_intro != 1) {
			usi_messageArray.unshift(t);
		}
	}
}
function HTTPMsgProcess(msg) {
	usi_httpMessageReceived(msg);
}
function usi_httpMessageReceived(msg){
	msg = new String(decodeURIComponent(msg));
	msg = msg.split('\r').join('');
	msg = msg.split('\n').join('');
	msg = msg.replace(new RegExp('\\+', 'g'), ' ');
	var t = msg.split("|");
	var i = 0;
	while (t[i] != undefined)
	{
		while (t[i] == "" && t[i] != undefined) {
			i++;
		}
		if (t[i] == undefined) {
			return;
		}
		var theCommand = t[i];
		if (t[i] == "JOINED") {
			i = i+2;
		} else if (t[i] == "MSG") {
			usi_addToChatWindow(t[i+1], t[i+2], t[i+3], t[i+4], t[i+5]);
			i = i+6;
		} else if (t[i] == "ISTYPING") {
			usi_agentIsTyping();
			i = i+1;
		} else if (t[i] == "TOPMSG") {
			usi_addToChatWindowTop(t[i+1], t[i+2], t[i+3]);
			i = i+4;
		} else if (t[i] == "BOTTOMMSG") {
			usi_addToChatWindowBottom(t[i+1], t[i+2], t[i+3], t[i+4], t[i+5]);
			i = i+6;
		} else if (t[i] == "CLOSECHAT") {
			shutDown();
			i = i+1;
		} else if (t[i] == "CLEARMESSAGEQUEUE") {
			usi_clearMessageQueue();
			i = i+1;
		} else if (t[i] == "CLEARMSG") {
			usi_clearMsg(t[i+1]);
			i = i+2;
		} else {
			return;
		}
	}
}
function usi_addToChatWindowBottom(delay, inMsg, agentIsTypingDelay, usi_intro, chatLineNumber) {
	if (usi_messageArray.length == 0) {
		clearInterval(usi_chatDisplayerID);
		usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+agentIsTypingDelay*1000);
		usi_startAgentIsTypingDelay(agentIsTypingDelay*1000);
	}
	usi_messageArray.unshift([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
}
function usi_addToChatWindowTop(delay, inMsg, chatLineNum) {
	clearInterval(usi_chatDisplayerID);
	usi_displayMsg(inMsg, 0, chatLineNum);
	usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, 7000);
}
function usi_clearMessageQueue() {
	clearInterval(usi_agentIsTypingID);
	clearInterval(usi_chatDisplayerID);
	theLength = usi_messageArray.length;
	usi_agentIsTypingClear();
	usi_currentlyTypingMsg = "";
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
	}
	usi_isTyping = 0;
}
function targetOpener(url) {
	try{
		if (window.opener)
			window.opener.location = url;
		else
			window.top.location = url;
	} catch(Error){}
}
goToAgentPushPage = targetOpener;
function usi_sayIt(usi_anchor) {
	usi_LoadDynamics("httpPost_js.jsp?command=MSG&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(usi_anchor.name));
	if (usi_customerHasTyped == 0) {
		usi_customerHasTyped = 1;
		usi_removeOpeners();
	}
}
function usi_clearMsg(msgNum) {
	theLength = usi_messageArray.length;
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
		currentlyTypingChatLineNumber = t[4];
		if (msgNum != currentlyTypingChatLineNumber) {
			var msgToRemove = t[2];
			usi_messageArray.unshift(t);
			if (usi_currentlyTypingMsg == msgToRemove) {
				usi_agentIsTypingClear();
				usi_currentlyTypingMsg = "";
			}
		}
	}
}
function usi_getCurrentTimeStamp() {
	var usi_d = new Date();
	return usi_d.getTime();
}
function usi_setLive() {
	usi_isLive = 1;
	usi_requestUpdate();
}
function usi_startHTTPUpdates() {
	if (usi_updateCheckerID == -1) {
		usi_getLastActiveTime = usi_getCurrentTimeStamp();
		if (usi_isLive == 0) { usi_updateFrequencyRate = 30000; }
		usi_updateCheckerID = setInterval(usi_requestUpdate, usi_updateFrequencyRate);
	}
}
function usi_requestUpdate() {
	clearInterval(usi_updateCheckerID);
	usi_LoadDynamics("httpPost_js.jsp?command=UPDATES&chatID="+encodeURIComponent(chatID));
	if (usi_isLive == 1) {
		if (usi_updateFrequencyRate < 5000) usi_updateFrequencyRate+=500;
	} else {
		usi_updateFrequencyRate = 30000;
	}
	if (usi_getCurrentTimeStamp() - usi_getLastActiveTime < 1*60*60*1000) { //1 hour for timeout
		usi_updateCheckerID = setInterval(usi_requestUpdate, usi_updateFrequencyRate);
	} else {
		usi_updateCheckerID = -1;
	}
}
function usi_customerIsTyping() {
	if (usi_isLive == 1) {
		if (usi_isTyping == 0) {
			usi_isTyping = 1;
			usi_LoadDynamics("httpPost_js.jsp?command=IMTYPING&chatID="+encodeURIComponent(chatID) + usi_extraHybridInfo);
		}
	}
}
function usi_replaceAll(txt, replace, with_this) {
	return txt.replace(new RegExp(replace, 'g'),with_this);
}
function usi_addToChatWindow(delay, inMsg, agentIsTypingDelay, usi_intro, chatLineNumber) {
	if (usi_messageArray.length == 0) {
		clearInterval(usi_chatDisplayerID);
		if (delay == 0) agentIsTypingDelay = 0;
		usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+agentIsTypingDelay*1000);
		if (delay*1000+agentIsTypingDelay*1000 > 0) {
			usi_agentIsTypingClear();
			usi_startAgentIsTypingDelay(agentIsTypingDelay*1000);
		}
	}
	if (usi_intro == 1) {
		usi_messageArray.unshift([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
	} else {
		usi_messageArray.push([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
	}
}
function usi_chatMsgDisplayer() {
	var usi_intro = 0;
	clearInterval(usi_chatDisplayerID);
	if (usi_messageArray.length != 0) {
		if (usi_currentlyTypingMsg == "") {
			var t = usi_messageArray.pop();
			delay = t[0];
			startTypingDelay = t[1];
			usi_currentlyTypingMsg = t[2];
			usi_intro = t[3];
			currentlyTypingChatLineNumber = t[4];
		}
		usi_displayMsg(usi_currentlyTypingMsg, 0, currentlyTypingChatLineNumber);
		if (usi_intro == 1) {
			usi_openerDisplayed(usi_currentlyTypingMsg);
		}
		if (usi_messageArray.length != 0) {
			var msgSplit = usi_messageArray.pop();
			delay = msgSplit[0];
			startTypingDelay = msgSplit[1];
			usi_currentlyTypingMsg = msgSplit[2];
			usi_intro = msgSplit[3];
			currentlyTypingChatLineNumber = msgSplit[4];
			usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+startTypingDelay*1000);
		} else {
			usi_currentlyTypingMsg = "";
		}
		if (usi_currentlyTypingMsg != "") {
			if (usi_currentlyTypingMsg.indexOf("AUTO_LINK") == -1) {
				if (startTypingDelay+delay > 0) usi_startAgentIsTypingDelay(startTypingDelay*1000);
			}
		}
	} else if (usi_currentlyTypingMsg != "") {
		usi_displayMsg(usi_currentlyTypingMsg, 0, currentlyTypingChatLineNumber);
		if (usi_intro == 1) {
			usi_openerDisplayed(usi_currentlyTypingMsg);
		}
		usi_currentlyTypingMsg = "";
	}
}
function usi_openerDisplayed(opener) {
	usi_LoadDynamics("httpPost_js.jsp?command=OPENER&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(opener) + usi_extraHybridInfo);
}
function usi_startAgentIsTypingDelay(delay) {
	usi_agentIsTypingClear();
	clearInterval(usi_agentIsTypingID);
	usi_agentIsTypingID = setInterval(usi_isTypingDelay, delay);
}
function usi_isTypingDelay() {
	clearInterval(usi_agentIsTypingID);
	usi_agentIsTyping();
}
function usi_agentIsTypingClear() {
	document.getElementById("usi_agentIsTypingMsgDiv").style.visibility="hidden";
}
function usi_agentIsTyping() {

	document.getElementById("usi_agentIsTypingMsgDiv").style.visibility="visible";

}
function usi_handleInput(e) {
	if (!e) e = window.event;
	if(e.keyCode==13) {
		usi_sendCustomerInput();
		e.returnValue = false;
		if (e.preventDefault) e.preventDefault();
		return false;
	} else {
		usi_customerIsTyping();
		e.returnValue = true;
		return true;
	}
}
function usi_AddBottomSpacer(displayWindow) {
	new_div = document.createElement("div");
	new_div.innerHTML= "<div style='font-size:17px;line-height:17px;padding:0;margin:0;'><br/></div>";
	new_div.id= "usi_bottomSpacer";
	displayWindow.appendChild(new_div);
}
function usi_RemoveBottomSpacer(displayWindow) {
	usi_bottomSpacerID = document.getElementById("usi_bottomSpacer");
	if (usi_bottomSpacerID != null) {
		displayWindow.removeChild(usi_bottomSpacerID);
	}
}
function usi_displayMsg(inMsg, me, lineNumber) {
	displayWindow = document.getElementById("usi_chatDisplay");
	var path, javascriptStr, sayItStr;
	if (inMsg == "") {
		return;
	}
	if (inMsg.indexOf("CLOSECHAT") != -1) {
		shutDown();
		return;
	} else if (inMsg.indexOf("AUTO_LINK")>0) {
		openAndRecord(inMsg.substring(inMsg.indexOf("AUTO_")+5, inMsg.length)+",1");
		return;
	}
	if (inMsg.indexOf("<<SOUND:") != -1) {
		path = inMsg.substring(inMsg.indexOf("<<SOUND:")+8, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<SOUND:"+path+">>").join("");
		if (initial_question !== undefined && lineNumber == -1) {
		} else {
			playTheSound(protocol+"://"+ip+port+path);
		}
	}
	if (inMsg.indexOf("<<JAVASCRIPT:") != -1) {
		javascriptStr = inMsg.substring(inMsg.indexOf("<<JAVASCRIPT:")+13, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<JAVASCRIPT:"+javascriptStr+">>").join("");
		eval(javascriptStr);
	}
	if (inMsg.indexOf("<<SAYIT:") != -1) {
		sayItStr = inMsg.substring(inMsg.indexOf("<<SAYIT:")+8, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<SAYIT:"+sayItStr+">>").join("");
		usi_sayIt(sayItStr);
	}
	inMsg = inMsg.split("agentName").join(agentName);
	if (inMsg.indexOf("<br><br>") != -1) {
		inMsg = usi_replaceAll(inMsg, "<br><br>", "<br>");
	}
	if (inMsg.split("Says:")[1] == "" || inMsg.split("Says:")[1] == " " || inMsg == "") {
		return;
	}
	usi_RemoveBottomSpacer(displayWindow);
	if (usi_lastTalker != me) {
		displayWindow.innerHTML += "<hr style='color:#333333;background-color:#333333;margin:4px 0 4px 0;padding:0px;display:block;float:none;position:static;border:none;'/>";
	} else {
		displayWindow.innerHTML += "<div style='font-size:8px;line-height:8px;padding:0;margin:0;float:none;'><br/></div>";
	}
	displayWindow.innerHTML += inMsg;
	usi_AddBottomSpacer(displayWindow);
	usi_lastTalker = me;
	if (me == 0) {
		usi_agentIsTypingClear();
		if (lineNumber != -1) {
			usi_LoadDynamics("httpPost_js.jsp?command=LINESEEN&chatID="+encodeURIComponent(chatID)+"&lineNum="+encodeURIComponent(lineNumber));
		}
	} else {
		usi_displayedIdle = 0;
	}
	displayWindow.scrollTop = displayWindow.scrollHeight;
	if (usi_idleMsg != null && usi_idleMsg != "" && usi_idleTime != null && usi_idleTime != 0) {
		clearInterval(usi_BeenIdleID);
		usi_BeenIdleID = setInterval(usi_displayIdleMsg, usi_idleTime*60*1000);
	}
	usi_updateFrequencyRate = 200;
}
function usi_displayIdleMsg() {
	if (usi_idleMsg != "") {
		clearInterval(usi_BeenIdleID);
		usi_displayMsg(usi_idleMsg, 0, -1);
		usi_openerDisplayed(usi_idleMsg);
	}
	usi_idleMsg = "";
}

function usi_offScreenPreload(usi_src) {
	var usi_img_preloader= document.createElement("div");
	document.getElementsByTagName('body')[0].appendChild(usi_img_preloader);
	usi_img_preloader.innerHTML = '<div style="position:absolute;left:-2000px;top:-2000px;"><img src="'+usi_src+'"/></div>';
    var usi_imageArray = new Image();
    usi_imageArray.src = usi_src
}




function USI_includeFlash() {
	document.getElementById('USIflashContentDiv').innerHTML = '<div id="usi_chatDisplay" style="position:absolute;width:337px;height:217px;top:53px;left:60px;margin:5px;padding:0px;text-align:left;color:#000000;font-size:12px;line-height:14px;text-indent:0;overflow-x:hidden; overflow-y:scroll;border-width:0px;font-family:Verdana;background-color:transparent;z-index:9002; word-wrap:break-word;"><b>Jenny Says:</b> Before you leave, remember getting an auto title loan is simple. The entire approval process takes just minutes and you can have the cash same-day. We guarantee the lowest rates, and will give you the most money. We work with all types of credit.<br/><br/><a href=\'javascript:;\' onclick=\'followClickHereLink(1); return false;\'><font color=\'#1E00FF\'><b><u>CLICK HERE</u></b></font></a> to see how much you qualify for!</div><div id="usi_agentIsTypingMsgDiv" style="position:absolute;width:139px;height:18px;top:259px;left:60px;z-index:9007;padding:0px;margin:0px;visibility:hidden;"><img width="139" height="18" src="http://www.upsellit.com/images/agent-typing-animation.gif" id="usi_agentIsTypingImg" style="float:left;border:0" border="0"/></div><div id="usi_chatInputDiv" style="position:absolute;width:235px;height:30px;top:288px;left:60px;background-color:transparent;z-index:9005;"><textarea id="usi_chatInput" style="overflow:auto;display:block;position:absolute;width:227px;height:34px;top:0px;left:5px;border-width:0px;border-style:none;outline:none; padding:0px; margin:0px; line-height:normal;border:none;font-family:Arial;line-height:15px;font-size: 15px;resize: none;background-color: rgba(255,255,255,1);color: rgba(0,0,0,1);background:url(\'http://www.upsellit.com/images/spacer.gif\'); "></textarea></div><div id="usi_chatSendDiv" style="cursor:pointer;position:absolute;z-index:9002;width:98px;height:46px;top:279px;left:300px;"><img width="98" height="46" src="http://www.upsellit.com/images/spacer.gif" onclick="usi_sendCustomerInput();" id="usi_chatSend" border="0" style="width:98px;height:46px;border-style:none;border-width:0px;MARGIN:0px;display:inline;"/></div><div id="usi_chatHelperDiv" style="cursor:pointer;position:absolute;z-index:9008;width:120px;height:260px;top:50px;left:420px;"><img  width="120" height="260"  src="http://www.upsellit.com/images/spacer.gif" onclick="followClickHereLink(1);" id="usi_agentHelper" border="0" style="width:120px;height:260px;border-style:none;border-width:0px;MARGIN:0px;display:inline;"/></div>';
	
	
}


function usi_placePoweredBy() {
	var usi_css = '.USI_bottom_powered_by{left:0px;bottom:20px;z-index:100000;display:block;visibility: visible;position:fixed;_position:absolute;_top:expression(document.body.scrollTop+document.body.clientHeight-this.clientHeight);}';
	var usi_cssStyle = document.createElement('style');
	usi_cssStyle.setAttribute('type', 'text/css');
	if (usi_cssStyle.styleSheet) { // IE does it this way
		usi_cssStyle.styleSheet.cssText = usi_css;
	} else {
		var styleTextNode = document.createTextNode(usi_css);
		usi_cssStyle.appendChild(styleTextNode);
	}
	document.getElementsByTagName('head')[0].appendChild(usi_cssStyle);
	usi_bottom_powered=document.createElement("div");
	usi_bottom_powered.innerHTML = '<div class="USI_bottom_powered_by" id="usi_bottom_powered_by"><a style="outline:none;text-decoration:none;font-family:Verdana,Arial,Geneva,sans-serif;font-size:12px;font-weight:bold;color:#FFFFFF" target="_new" href="http://www.upsellit.com/customer-recovery-solutions.jsp?'+document.domain+'"><img src="https://www.upsellit.com/images/upsellitpoweredby.png" border="0"/></a></div>';
	document.getElementById("USI_overlayDiv").appendChild(usi_bottom_powered);
}

var USI_placedChat = 0;
function USI_placeChat() {
	if (USI_placedChat == 0) {
		if (typeof(document.getElementsByTagName('body')[0]) == 'undefined') {
			tryItAnyhowID = setTimeout('USI_placeChat()', 1000);
		} else {
			USI_placedChat = 1;
			USI_placeBackgroundShadow();
            usi_placePoweredBy();
			var USI_dd = document.createElement('div');
			USI_dd.id = 'flashChatDiv';
			if ((document.compatMode=="CSS1Compat")||(navigator.appVersion.indexOf("MSIE")==-1)) {
				USI_dd.style.position='fixed';
				USI_dd.style.left = '10px';
				USI_dd.style.top = '20px';
			} else {
				USI_dd.style.position='absolute';
				USI_dd.style.left = window_left+'px';
				USI_dd.style.top = window_top+'px';
			}
			USI_dd.style.left = '10px';
			USI_dd.style.top = '20px';
			USI_dd.style.width = '574px';
			USI_dd.style.height = '362px';
			USI_dd.style.zIndex = 99202;
			USI_dd.style.visibility = 'hidden';
			USI_dd.style.display = 'none';
			USI_dd.style.fontWeight = 'normal';
			USI_dd.innerHTML = '<div id="USIchatskinDiv" style="position:absolute;left:0px;top:0px;Z-INDEX:9000;"><img src="http://www.upsellit.com/chatskins/800loanmart-2013.png" id="imgChatTop" border="0" style="MARGIN:0px;display:inline;max-width:none"/><img id="usi_agentImage" src="http://www.upsellit.com/images/spacer.gif" style="display:none; position:absolute; left:425px; top:65px; " /></div><div id="USIflashContentDiv" style="position:absolute;top:0px;left:0px;Z-INDEX:9001;"></div><div id="USItopToolBarDiv" style="position:absolute;width:450px;height:42px;top:0px;left:0px;Z-INDEX:9994;"><div id="USIDragBarDiv" style="position:absolute;width:450px;height:42px;top:0px;left:0px;Z-INDEX:9995;margin-right:0px;margin-left:0px;"><img width="453" height="40" src="http://www.upsellit.com/images/spacer.gif" onmousedown="dragStart(event, \'flashChatDiv\');return false;" id="imgChatDrag" border="0" style="MARGIN: 0px;display:inline;cursor: move;height:42px !important;width:450px !important"/></div><div id="closeButton" style="cursor:pointer;position:absolute;width:140px;height:45px;top:0px;left:450px;Z-INDEX:9998;margin-right:0px;margin-left:0px;border:0;" ><img id="imgChatTop2"  width="140" height="45"  style="MARGIN:0px;display:inline;max-width:none;width:140px;height:45px;" src="http://www.upsellit.com/images/spacer.gif" onclick="shutDown();" border="0"/></div></div><div id="USI_poweredBy" style="text-align:left;position:absolute;width:1px;height:1px;top:1px;left:1px;Z-INDEX:9994;"></div>';
			document.getElementsByTagName('body')[0].appendChild(USI_dd);
			
			USI_includeFlash();
			
		}
	}
}

USI_placeChat();


function shutDown() {
	changeSelectBoxes('visible');
	USI_grayOut(false);
	flashChatDivHandle = document.getElementById('flashChatDiv');
	flashChatDivHandle.style.visibility='hidden';
	flashChatDivHandle.style.display='none';
	flashChatDivHandle.style.top = -1000;
	if (typeof(second_pop) != 'undefined') {
		window.open(second_pop);
	} else {
	
	}
	
	
	usi_LoadDynamics('httpPost.jsp?command=DISCONNECTED&chatID='+encodeURIComponent(chatID)+'&chatClosed=1&external=1');
	
	clearInterval(usi_BeenIdleID);
	clearInterval(usi_updateCheckerID);
	clearInterval(usi_agentIsTypingID);
	clearInterval(usi_chatDisplayerID);
}

function showChat() {
	if (USI_suppress) return;
	try {
		
		unBlurAll();
		
		changeSelectBoxes('hidden');
		
		USI_grayOut(true);
		yPos = (window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||0)+( (typeof window_top != "undefined") ? window_top : 50 );
		flashChatDivHandle = document.getElementById('flashChatDiv');
		flashChatDivHandle.style.visibility='visible';
		flashChatDivHandle.style.display='block';
		
		
		if (flashChatDivHandle.style.position == 'absolute') flashChatDivHandle.style.top = yPos + 'px'; 
		registerDisplayAttempt();
		if (window.addEventListener)
			document.getElementById("usi_chatInput").addEventListener("keydown",usi_handleInput,false);
		else
			document.getElementById("usi_chatInput").attachEvent("onkeydown",usi_handleInput);
		try { document.getElementById("usi_chatInput").focus(); } catch(eer3) {}
		usi_addToChatWindow(12, '<b>Jenny Says:</b> Just type \'HI\' or \'Hello\' in the space below to let me know you are there.', 1, 1, -1);
		usi_openerDisplayed('<b>Jenny Says:</b> Before you leave, remember getting an auto title loan is simple. The entire approval process takes just minutes and you can have the cash same-day. We guarantee the lowest rates, and will give you the most money. We work with all types of credit.<br/><br/><a href=\'javascript:;\' onclick=\'followClickHereLink(1); return false;\'><font color=\'#1E00FF\'><b><u>CLICK HERE</u></b></font></a> to see how much you qualify for!');
		usi_BeenIdleID = setInterval(usi_displayIdleMsg, usi_idleTime*60*1000);
		displayWindow = document.getElementById("usi_chatDisplay");
		displayWindow.scrollTop = displayWindow.scrollHeight;
		
		if (usi_isLive) { //start on load
			usi_startHTTPUpdates();
		}
		
		
	} catch(err2) {}
}
function registerDisplayAttempt() {
	usi_LoadDynamics('upsellitChatLoaded.jsp?chatID='+encodeURIComponent(chatID)+'&siteID=10690&companyID=2243&u=1&c=86400');
	
	var date = new Date();
	date.setTime(date.getTime()+(86400*1000));
	var expires = '; expires='+date.toGMTString();
	
	document.cookie = 'u-upsellitc2243=seenChat'+expires+'; path=/';
	
	document.cookie = 'u-upsellit10690=seenChat'+expires+'; path=/';
	
}
function usi_followDynamicLink(dynURL) {
	top.location.href = 'http://www.upsellit.com/follow.jsp?companyid=2243&sid=10690&cid=2201037487330849817777&duration=1209600&dbupdate=1&url=' + escape(dynURL);
}
function followClickHereLink(whichLink) {

	if (whichLink == 1) {
	
		top.location.href = 'http://www.upsellit.com/follow.jsp?companyid=2243&sid=10690&cid=2201037487330849817777&duration=1209600&dbupdate=1&url=http%3A%2F%2Fwww.800loanmart.com%2Fup';
		
	
	} else if (whichLink == 2) {
	
		top.location.href = 'http://www.upsellit.com/follow.jsp?companyid=2243&sid=10690&cid=2201037487330849817777&duration=1209600&dbupdate=1&url=http%3A%2F%2Fwww.800loanmart.com%2Fcontact.aspx';
	
	} else if (whichLink == 3) {
	
	}
}

function sendUSIChatDetails() { }
function usi_changeAgentPic(newAgentName, picURL) {
	document.getElementById("usi_agentImage").src = picURL;
	document.getElementById("usi_agentImage").style.display = "block";
}
function usi_removePic() {
	document.getElementById("usi_agentImage").style.display = "none";
}
function usi_noAgentsAvailable(chatsinqueue) {}



var USI_NoPopPageQuadrent = .0;

var usi_isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
if (!usi_isMac) USI_NoPopPageQuadrent = .125;

var timedShowChatID = -1;
var usi_TimeAboveYDelay = 500;
function TestMove(e) {
	if (!USIdone) {
		Y_pos = document.all? event.clientY: e.pageY - ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop);
		if (typeof(Y_pos) == 'undefined') return;
		if (Y_pos < 0) {
			Y_pos = 0;
		}
		if (Y_pos < 20 && onPage > 0) {
			if (timedShowChatID == -1) {
				if ((Number(new Date()) - onPage) < 500) {
					X_pos = document.all? event.clientX: e.pageX - ((document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft);
					if (X_pos/screen.width <= USI_NoPopPageQuadrent)
						timedShowChatID = 1;
					else
						timedShowChatID = setTimeout ( "timedShowChat()", usi_TimeAboveYDelay );
				}
			}
		}
		if (Y_pos > 20 && timedShowChatID != -1) {
			clearTimeout(timedShowChatID);
			timedShowChatID = -1;
		}
		if (Y_pos > 100) {
			onPage =  Number(new Date());
		}
	}
}
var onPage = 0;
function attachMouseEvent() {
	if (document.attachEvent) {
		document.attachEvent("onmousemove", TestMove);
	}
	if (document.addEventListener) {
		document.addEventListener("mousemove", TestMove,  true);
	}
}
var usi_OverPage = 0;
function USI_MouseOut() {
	usi_OverPage = 0;
}
function USI_MouseOver() {
	usi_OverPage = 1;
}
if (document.attachEvent) {
	document.attachEvent("onmouseout", USI_MouseOut);
	document.attachEvent("onmouseover", USI_MouseOver);
}
if (document.addEventListener) {
	document.addEventListener("mouseout", USI_MouseOut, true);
	document.addEventListener("mouseover", USI_MouseOver, true);
}
timedShowChatID = setTimeout("attachMouseEvent()", 0*500 );
function timedShowChat() {
	if (usi_OverPage == 1) {
		return;
	}
	clearTimeout (timedShowChatID);
	if (USI_suppress) return;
	if (!properClickThrough) {
		USIdone = true;
		showChat();
		
		timedShowChatID = setTimeout ( "window.onbeforeunload = null;", 2000 );
	}
}


document.getElementById("USI_poweredBy").style.top = "380px";
document.getElementById("USI_poweredBy").style.left = "50px";
document.getElementById("USI_overlayDiv").style.zIndex = 1199201;
document.getElementById("flashChatDiv").style.zIndex = 1199202;

}

