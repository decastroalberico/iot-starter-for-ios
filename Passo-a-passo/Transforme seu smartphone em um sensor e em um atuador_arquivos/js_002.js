(function() {
try {
    (function(){
/**/

})();
(function() {
    metric = function(url, wait)
    {
        setTimeout(function() {
                var e = document.createElement("img");
                e.src = url;
            }, wait);
    }
    var intervals = [0, 10];
    var inlen = intervals.length;
    for (var k = 0; k < inlen; ++k)
        this.metric("https://pixel.mathtag.com/misc/img?mm_bnc&bcdv="+k, intervals[k] * 1000);
})();
//used to sync advertiser without leaking referer to final destination
(function() {
    try {
        var frm = document.createElement('iframe');
        frm.style.visibility = 'hidden';
        frm.style.display = 'none';
        frm.src = "https://pixel.mathtag.com/sync/iframe?mt_uuid=49cd5d5d-9543-4100-814a-36a53d668531&no_iframe=1&mt_adid=171815&mt_lim=20";
        frm.setAttribute("id", "mm_sync_back_ground");

        if (document.body)
            document.body.appendChild(frm);
        else
            if (document.head)
                document.head.appendChild(frm);
    }
    catch(ex)
    {
        document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=synciframe&what="+encodeURIComponent(ex.message);
    }
})();

}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap_js&what="+encodeURIComponent(ex.message);
}
})();
