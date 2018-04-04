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


	// header link reference
	$.in($.select(".post h1").add(".post h2").add(".post h3").add(".post h4").add(".post h5").add(".post h6")).each(function(i, el) {
		el = $.select(el);
		el.css({ position: "relative", cursor: "pointer" });
		id = el.html().toLowerCase().replace(/[$&+,:;=?@#|'<>.^*()%!-"\/]/ig, "").replace(/ /ig, "-")
		el.attr("id", id);
		el.prepend("<a href='#" + id + "'>#</a>");
		$.select(el[0].getElementsByTagName('a')[0]).css({
			position: "absolute",
			top: "0",
			left: "-30px",
			color: "rgba(0,0,0,.28)",
			opacity: "0",
			transition: "all .2s ease"
		});

		el[0].addEventListener("mouseover", function() {
			$.select(el[0].getElementsByTagName('a')[0]).css({
				opacity: "1"
			});
		}, false);

		el[0].addEventListener("click", function() {
			this.getElementsByTagName('a')[0].click();
		}, false);

		el[0].addEventListener("mouseout", function() {
			$.select(el[0].getElementsByTagName('a')[0]).css({
				opacity: "0"
			});
		}, false);
	});
});