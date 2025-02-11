(function() {
try {
    (function(args) {
    try {

	function mm_encode(str) {
	    return encodeURIComponent(str);
	}

	var elements = {};

	if (typeof MathTag != 'undefined') {
	    for (var key in MathTag) {

		var value = MathTag[key];

		if (key == "event_type_path")
		{
                    var match_target = window.location.href
                    if (MathTag['event_match'])
			match_target = MathTag['event_match']

		    for (var subkey in value)
		    {
			var page = value[subkey];
			if (match_target.match(new RegExp(page[1])))
			{
			    elements["mt_id"] = page[2];
			    elements["event_type"] = page[0];
			    break;
			}
		    }
		}

		try {
		    if (typeof value == 'undefined' || !value || value == null || value == "" || value == 'undefined')
			continue;

		    if ((value instanceof Object) && !(value instanceof Array))
  			continue;
		}
		catch(ex) {
		    continue;
		}

		elements[key] = value.toString();
	    }
	}

        for (var k in args) {
            if (args[k] != "") {
		elements[k] = mm_encode(args[k]);
	    }
	}

        if (document.title) {
            elements["document_title"] = document.title;
	}

	if (!elements["location"] && window.location.href) {
	    elements["location"] = window.location.href;
	}

        if (!elements["document_path"] && window.location.pathname) {
            elements["document_path"] = window.location.pathname;
        }

        if (elements["revenue"]) {
	    elements["v1"] = elements["revenue"];
	}

        if (elements["currency"] && !elements["v2"]) {
	    elements["v2"] = elements["currency"];
	}

	if (!Date.now) {
	    Date.now = function() { return new Date().getTime(); }
	}

	elements["mt_cb"] = Date.now();

        var queries = [];

        for (var k in elements) {
	    queries.push(mm_encode(k) + "=" + mm_encode(elements[k]));
	}

	var scp = document.createElement("script");
        scp.async = true;
	scp.src="//pixel.mathtag.com/event/js?mt_pp=2&"+queries.join("&");
	scp.setAttribute("id", "mm_pp_background");

	if (document.body)
	    document.body.appendChild(scp);
	else if (document.head)
	    document.head.appendChild(scp);
    }
    catch(ex)
    {
	document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=proper_pixel_1&what="+mm_encode(ex.message);
    }
})({"mt_lim":20,"language":"pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3","UUID":"49cd5d5d-9543-4100-814a-36a53d668531"});


}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap_js&what="+encodeURIComponent(ex.message);
}
})();
