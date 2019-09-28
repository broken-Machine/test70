var count = 100;
var t = +new Date();
var a = function () {
	
		var temp_url = 'https://app.polomi.com/online/linkedinServer/checkSignature.php';
		$.ajax({
		  'url':temp_url+'?url='+encodeURIComponent(location.href.split('#')[0]),
		  'type': 'GET',
		  'success': function(data){
		     console.log(data);
		    count--;
		    console.log(count);
		    if (count > 0) {
		    	a();
		    } else {
		    	console.log(+new Date() - t);
		    }
		  }
		});
};
a();


var count = 20;
var t = +new Date();
var a = function (c) {
	
		var temp_url = 'https://app.polomi.com/online/linkedinServer/checkSignature.php';
		$.ajax({
		  'url':temp_url+'?url='+encodeURIComponent(location.href.split('#')[0]),
		  'type': 'GET',
		  'success': function(data){
		     //console.log(data);
		    //count--;
		    console.log(c);
		    console.log(+new Date() - t);
		  }
		});
};
for (var i = 0; i < 100; i ++) {
	a(i);
}