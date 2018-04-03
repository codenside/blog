var $ = new BaseJS();

$.ready(function() {
	$.select("pre").prepend("<div>Code</div>");

	// set all third party link to open in new tab
	$.in($.select("a")).each(function(i, el) {
		if (el.getAttribute("href").indexOf("http://") > -1 || el.getAttribute("href").indexOf("https://") > -1) {
			if (el.getAttribute("href").indexOf("codebreak") === -1) {
				console.log(el);
				el.setAttribute("target", "_blank");
			}
		}
	});
});