			
// Copyright 2006-2014 ClickTale Ltd., US Patent Pending
// PID: 24110
// WR destination: www14
// WR version: 14.17
// Recording ratio: 0.97
// Generated on: 11/24/2014 3:05:06 PM (UTC 11/24/2014 9:05:06 PM)

if (typeof(ClickTaleHooks) == 'undefined') {
    ClickTaleHooks = {
        Hooks : ['PreLoad', 'AfterPreLoad', 'PreRecording', 'AfterPreRecording', 'AdditionalCustomCode', 'AfterAdditionalCustomCode'],
        RunHook : function (hookName) {
			if (typeof window["ClickTale" + hookName + "Hook"] === "function") window["ClickTale" + hookName + "Hook"]();
            var s = 'ClickTaleSettings'; if (!ClickTaleHooks.IsValidHookName(hookName) || !(s in window) || !('PDCHooks' in window[s]) || !(hookName in window[s].PDCHooks)) return;
            var c = window[s].PDCHooks[hookName]; if (c instanceof Array) for (var i=0;i<c.length;i++) if (typeof(c[i]) == "function") c[i](); 
            if (typeof(c) == "function") c();
        },
		IsValidHookName : function (hookName) {
			if(Array.prototype.indexOf) { return ClickTaleHooks.Hooks.indexOf(hookName) >= 0; }
			for(var i = 0; i < ClickTaleHooks.Hooks.length; i++) { if(ClickTaleHooks.Hooks[i] === hookName) { return true; } } return false;
		}
    }
}    
	

function ClickTaleCDNHTTPSRewrite(u)
{
	try
	{
		var scripts = document.getElementsByTagName('script');
		if(scripts.length)
		{
			var script = scripts[ scripts.length - 1 ], s='https://clicktalecdn.sslcs.cdngc.net/';
			if(script.src && script.src.substr(0,s.length)==s )
				return u.replace('https://cdnssl.clicktale.net/',s);
		}
	}
	catch(e)
	{
	}
	return u;
} 

var ClickTaleIsXHTMLCompliant = false;

	
document.write(unescape("%3Cscript%20src='"+
(document.location.protocol=='https:'?
ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www14/pcc/cf090acb-20c8-4a42-b888-6b4740eaa6f5.js?DeploymentConfigName=Default&Version=2'):
'http://cdn.clicktale.net/www14/pcc/cf090acb-20c8-4a42-b888-6b4740eaa6f5.js?DeploymentConfigName=Default&Version=2')+
"'%20type='text/javascript'%3E%3C/script%3E"));
	
var ClickTalePrevOnReady;
if(typeof ClickTaleOnReady == 'function')
{
	ClickTalePrevOnReady=ClickTaleOnReady;
	ClickTaleOnReady=undefined;
}

if (typeof window.ClickTaleScriptSource == 'undefined')
{
	window.ClickTaleScriptSource=(document.location.protocol=='https:'
		?ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/')
		:'http://cdn.clicktale.net/www/');
}

ClickTaleHooks.RunHook('PreLoad');
// Start of user-defined pre WR code (PreLoad)b

// End of user-defined pre WR code
ClickTaleHooks.RunHook('AfterPreLoad');

var ClickTaleOnReady = function()
{
	var PID=24110, 
		Ratio=0.97, 
		PartitionPrefix="www14";
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return; //in preview
	   };
		
	ClickTaleHooks.RunHook('PreRecording');
	// Start of user-defined header code (PreInitialize)
	;(function(){var Filters={};Filters.Defaults={};Filters.Defaults.RecordingMethod='Fetch';Filters.Defaults.UploadScripts=true;Filters.Defaults.UploadTimeout=4;Filters.Defaults.SPAUploadTimeout=5;Filters.Defaults.PollURLChange=false;Filters.Defaults.PollingInterval=1;Filters.Rules=[];Filters.Match={};Filters.Modules={};Filters.Run=function(){if(!Filters.Rules.length)
return;Filters.MatchFound=!Filters.Rules.every(function(Rule){var RuleType=Rule.Type.match(/^\w*/)[0];if(RuleType&&(typeof Filters.Modules[RuleType]==='function')){return!Filters.Modules[RuleType](Rule);}else
return true;});};Filters.UploadSupported=function(){if((navigator.appName==='Microsoft Internet Explorer'&&(8>=document.documentMode||navigator.userAgent.match(/MSIE\s*(6|7|8)/)))||(navigator.userAgent.indexOf('Version/5.1')!=-1&&navigator.userAgent.indexOf('Safari')!=-1))
return false;else{window.ClickTaleSettings=window.ClickTaleSettings||{};window.ClickTaleIncludedOnDOMReady=true;window.ClickTaleSettings.Compression={Method:'deflate'};ClickTaleSettings.RewriteRules={OnBeforeRewrite:function(API){Filters.Defaults.UploadScripts&&API.clear();API.add({pattern:new RegExp('(<input[^>]*value=")([^"]+)("[^>]*type="text">)','gim'),replace:"$1-----$3"});API.add({pattern:new RegExp('(<input[^>]*type="text"[^>]*value=")([^"]*)("[^>]*>)','gim'),replace:"$1-----$3"});},}
var d,DOCType=document.childNodes[0].text;(d=document.doctype)&&(DOCType="<!DOCTYPE "
+d.name
+(d.publicId?' PUBLIC "'+d.publicId+'"':'')
+(!d.publicId&&d.systemId?' SYSTEM':'')
+(d.systemId?' "'+d.systemId+'"':'')
+'>');var Index=0,Atts=document.documentElement.attributes;Length=Atts.length,HTML='<html';for(;Index<Length;Index++)
HTML+=' '+Atts[Index].nodeName+'="'+Atts[Index].nodeValue+'"';HTML+='>';Filters.Defaults.UploadStartPoint=DOCType+HTML;Filters.Defaults.UploadEndPoint='</html>';return true;}}
Filters.StartMatch=function(){var RecordingMethod=Filters.Match.RecordingMethod||Filters.Defaults.RecordingMethod;if(RecordingMethod==='Fetch'){window.ClickTaleSSL=1;window.ClickTale(PID,Ratio,PartitionPrefix);return;}
if(RecordingMethod==='Upload'&&Filters.UploadSupported()){window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);return;}
if(RecordingMethod==='Delayed Upload'&&Filters.UploadSupported()){var Timeout=(Filters.Match.UploadTimeout||Filter.Defaults.UploadTimeout)*10,Selector=Filters.Match.Selector,Counter=0,Timer;Timer=setInterval(function(){if(Selector&&document.querySelector(Selector)){window.clearInterval(Timer);window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);return;}
if(Counter++>=Timeout){window.clearInterval(Timer);window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);return;}},100);}
if(RecordingMethod==='SKIP')
return;};Filters.StartDefault=function(){if(Filters.Defaults.RecordingMethod==='Fetch'){window.ClickTaleSSL=1;window.ClickTale(PID,Ratio,PartitionPrefix);}
if(Filters.Defaults.RecordingMethod==='Upload'&&Filters.UploadSupported()){window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Match.UploadStartPoint,Filters.Match.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);}
if(Filters.Defaults.RecordingMethod==='Delayed Upload'&&Filters.UploadSupported()){var Timeout=(Filters.Defaults.UploadTimeout||4)*10,Selector=Filters.Defaults.Selector,Counter=0,Timer;Timer=setInterval(function(){if(Selector&&document.querySelector(Selector)){window.clearInterval(Timer);window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);return;}
if(Counter++>=Timeout){window.clearInterval(Timer);window.ClickTaleSSL=1;window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTale(PID,Ratio,PartitionPrefix);return;}},100);}
if(Filters.Defaults.RecordingMethos==='SKIP')
return;};Filters.Modules.Add=function(Name,Filter){Filters.Modules[Name]=Filter;}
Filters.Modules.Add('URL',function(Options){var MatchFound=false,Method=Options.Method||Filters.Defaults.RecordingMethod,Type=Options.Type.indexOf('.')+1?Options.Type.substr(Options.Type.indexOf('.')+1):'Containing',Timeout=Options.Timeout||Filters.Defaults.UploadTimeout,Value=Options.Value,Selector=Options.Selector;if(Type==='Exact'&&document.location.href===Value)
MatchFound=true;if(Type==='Containing'&&document.location.href.indexOf(Value)>-1)
MatchFound=true;if(Type==='Start'&&document.location.href.indexOf(Value)===0)
MatchFound=true;if(Type==='End'&&document.location.href.indexOf(Value)>-1&&Value===document.location.href.substr(document.location.href.indexOf(Value)))
MatchFound=true;if(Type==='Protocol'&&document.location.protocol===Value+':')
MatchFound=true;if(Type==='Domain'&&document.location.hostname===Value)
MatchFound=true;if(Type==='RegEx'&&new RegExp(Value,'i').test(document.location.href))
MatchFound=true;if(MatchFound){Filters.Match.RecordingMethod=Method;Filters.Match.UploadTimeout=Timeout;Filters.Match.Selector=Selector;return true;}
return false;});Filters.Modules.Add('SPA',(function(){if(!window.ClickTaleSettings||(window.ClickTaleSettings&&!window.ClickTaleSettings.__SPASupport)){window.ClickTaleSettings=window.ClickTaleSettings||{};window.ClickTaleSettings.__SPASupport=function(){window.ClickTaleStop&&window.ClickTaleStop();window.ClickTaleIncludedOnDomReady=true;var MatchFound=!window.ClickTaleSettings.__SPASupport.Rules.every(function(Rule){if(document.location.href.indexOf(Rule.Value)>-1&&Filters.UploadSupported()){var Timeout=(Rule.Timeout||Filters.Defaults.SPAUploadTimeout)*10,Selector=Rule.Selector,Counter=0,Timer;Timer=window.setInterval(function(){if(Selector&&document.querySelector(Selector)){window.clearInterval(Timer);window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTaleLogical(document.location.href);return;}
if(Counter++>=Timeout){window.clearInterval(Timer);window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTaleLogical(document.location.href);return;}},100);return false;}else
return true;});if(!MatchFound&&Filters.UploadSupported()){window.setTimeout(function(){window.ClickTaleUploadPage(Filters.Defaults.UploadStartPoint,Filters.Defaults.UploadEndPoint);window.ClickTaleLogical(document.location.href);},Filters.Defaults.SPAUploadTimeout*1000);}}
window.ClickTaleSettings.__SPASupport.Rules=[];if(Filters.Defaults.PollURLChange){var CurrentURL=document.location.href;setInterval(function(){if(CurrentURL!==document.location.href){CurrentURL=document.location.href;window.ClickTaleSettings.__SPASupport();}},Filters.Defaults.PollingInterval);}
if(!Filters.Defaults.PollURLChange){window.addEventListener&&window.addEventListener('hashchange',window.ClickTaleSettings.__SPASupport,false);if(window.history&&window.history.pushState){var __pushState=window.history.pushState;window.history.pushState=function(){__pushState.apply(window.history,arguments);window.ClickTaleSettings.__SPASupport();}}}}
return function(Options){window.ClickTaleSettings.__SPASupport.Rules.push({Value:Options.Value,Timeout:Options.Timeout||Filters.Defaults.SPAUploadTimeout,Selector:Options.Selector});return false;}})());Filters.Rules.push({Type:'URL',Value:'https://www.800loanmart.com/Application.aspx ',Method:'Upload',});Filters.Rules.push({Type:'URL',Value:'http://www.800loanmart.com/',Method:'Upload',});Filters.Rules.push({Type:'URL',Value:'https://www.800loanmart.com/Application.aspx?Step=1 ',Method:'Upload',});Filters.Rules.push({Type:'URL',Value:'https://www.800loanmart.com/Application.aspx?Step=2 ',Method:'Upload',});Filters.Rules.push({Type:'URL',Value:'https://www.800loanmart.com/Application.aspx?Step=3 ',Method:'Upload',});Filters.Run();if(Filters.MatchFound)
Filters.StartMatch();else
Filters.StartDefault();})();return;
	// End of user-defined header code (PreInitialize)
    ClickTaleHooks.RunHook('AfterPreRecording');
	
	
	window.ClickTaleSSL=1;
	
	ClickTale(PID, Ratio, PartitionPrefix);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	ClickTaleHooks.RunHook('AdditionalCustomCode');
	// Start of user-defined footer code
	
	// End of user-defined footer code
	ClickTaleHooks.RunHook('AfterAdditionalCustomCode');
}; 
document.write(unescape("%3Cdiv%20id%3D%22ClickTaleDiv%22%20style%3D%22display%3A%20none%3B%22%3E%3C/div%3E"));

document.write(unescape("%3Cscript%20src='"+window.ClickTaleScriptSource+"tc/WRe17.js"+"'%20type='text/javascript'%3E%3C/script%3E"));




