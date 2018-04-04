var $ = new BaseJS();

$.ready(function() {
	$.select("pre").prepend("<div>Code</div>");

	// set all third party link to open in new tab
	$.in($.select("a")).each(function(i, el) {
		if (el.getAttribute("href").indexOf("http://") > -1 || el.getAttribute("href").indexOf("https://") > -1) {
			if (el.getAttribute("href").indexOf("codebreak") === -1) {
				el.setAttribute("target", "_blank");
			}
		}
	});

	// light box
	$.in($.select(".post img")).each(function(i, el) {
		el.addEventListener("click", function() {
			$.select("#overlay").css({
				"visibility": "visible",
				"opacity": "1"
			});
			$.select("#lightbox").css({
				"visibility": "visible",
				"opacity": "1"
			});

			var image = this.getAttribute("src");
			var downloadingImage = new Image();
			downloadingImage.onload = function(){
				var img = $.select("#lightbox img");
			    img[0].src = this.src;
			    img.css({"width": "100%"});
			};
			downloadingImage.src = image;
		}, false);
	});

	document.getElementById('lightbox').addEventListener("click", function() {
		$.select("#lightbox").css({
			"visibility": "hidden",
			"opacity": "0"
		});
		$.select("#overlay").css({
			"visibility": "hidden",
			"opacity": "0"
		});
	});
	document.getElementById('overlay').addEventListener("click", function() {
		$.select("#lightbox").css({
			"visibility": "hidden",
			"opacity": "0"
		});
		$.select("#overlay").css({
			"visibility": "hidden",
			"opacity": "0"
		});
	});
});