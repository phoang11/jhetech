jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	//alert(pageName);
	//Content Area Mods
	if(pageName == "Page,AboutMe,ViewStore") {
		$(".pagecontainer > table:eq(1) tr:first td:first").addClass("main");
	}else {
		$(".pagecontainer > table:eq(1) tr:first td:first").addClass("main");
		$(".main table:eq(2)").addClass("content_store");
		$(".content_store").find("br[clear = none]").remove();
	}
	

	//Footer
	var footer = "\n\r<div class=\"footer_outer\"><img src=\"http://ebay.jhetech.com/jhe-tech/images/logo.png\" alt=\"Jhe Technology\"><div class=\"footer\"><ul><li><a href=\"http://stores.ebay.com/Jhe-Technology\" target=\"_blank\">Home</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/about\" target=\"_blank\">About&nbsp;Us</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/policy\" target=\"_blank\">Our&nbsp;Policy</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/policy\" target=\"_blank\">Contact&nbsp;Us</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/faq\" target=\"_blank\">FAQ</a></li><li>|</li><li><a href=\"http://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&amp;userid=jhetech*com\" target=\"_blank\">Feedback</a></li></ul><p><br><br><br><br>Copyright &copy; 2013 JHE Technology. All rights reserved.<br>Design by : <a href=\"http://www.raddyx.com/\" target=\"_blank\">raddyx technologies</a></p></div></div>";
	if(pageName != "Page,AboutMe,ViewStore") {
		if($(".content_store").length > 0) {
			$(".content_store").after(footer);			
		}
	}
});