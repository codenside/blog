var $_GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
                   .toString()
                   // get the query string
                   .replace(/^.*?\?/, '')
                   // and remove any existing hash string (thanks, @vrijdenker)
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}

if ($_GET["q"] === undefined) {
	location.replace("/");
}

var queries = $_GET["q"].toLowerCase().split(" ");
if (queries.length === 1) {
	queries = queries[0].split("+");
}
if (queries.length === 1) {
	queries = queries[0].split("%20");
}

var container = document.getElementById('search');
var is_posts = false;

for (var i = 0; i < db.length; i++) {
	for (var j = 0; j < queries.length; j++) {
		var query = queries[j];
		console.log(query);
		if (db[i]["title"].toLowerCase().indexOf(query) > -1) {
			var image = "";

			if (db[i]["thumbnail"] !== "") {
				image = '<img src="' + db[i]["thumbnail"] + '">';
			}

			var html = '<li class="post-preview">' + image + '<div class="content"> <h2> <a class="post-link" href="' + db[i]["url"] + '">' + db[i]["title"] + '</a> </h2> <span class="post-meta">' + db[i]["date"] + '</span> <p>' + db[i]["exerpt"] + '</p></div><a href="' + db[i]["url"] + '" class="read-more">READ MORE <span>&roarr;</span></a> </li>';

			container.innerHTML += html;
			is_posts = true;
			break;
		}
	}
}

if (is_posts) {
	document.getElementsByClassName('nopost')[0].style.display = "none";
}