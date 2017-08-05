jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	//alert(pageName);
	//Content Area Mods
	if(pageName == "Page,AboutMe,ViewStore") {
		$(".pagecontainer > table:eq(1) tr:first td:first").addClass("background_jhetech");
	}else {
		$(".pagecontainer > table:eq(1) tr:first td:first").addClass("background_jhetech");
		$(".background_jhetech table:eq(2)").addClass("content_jhetech");
		$(".content_jhetech").find("br[clear = none]").remove();
	}
	

	//Footer
	var footer = "\n\r<div class=\"wrapper\"><div class=\"footer_outer\"><img src=\"http://www.jhetech.com/ebayfiles/images/logo.png\" alt=\"Jhe Technology\" /><div class=\"footer\"><ul><li><a href=\"http://stores.ebay.com/Jhe-Technology\">Home</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/about\">About&nbsp;Us</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/policy\">Our&nbsp;Policy</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/conatct\">Contact&nbsp;Us</a></li><li>|</li><li><a href=\"http://stores.ebay.com/jhetechnology/pages/faq\">FAQ</a></li><li>|</li><li><a href=\"http://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=jhetech*com&ftab=AllFeedback&myworld=true&rt=nc\">Feedback</a></li></ul><p><br /><br /><br /><br />Copyright &copy; 2013 JHE Technology. All rights reserved.<br />Design by : <a href=\"http://www.raddyx.com/\" target=\"_blank\">raddyx technologies</a></p></div><\/div><\/div>";
	if(pageName != "Page,AboutMe,ViewStore") {
		if($(".content_jhetech").length > 0) {
			$(".content_jhetech").after(footer);			
		}
	}
});