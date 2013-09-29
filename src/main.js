// var canvas = document.documentElement;
// var dataUrl = canvas.toDataURL();
// alert(dataUrl);

var specialElementHandlers = {
	'#editor': function(element, renderer){
		return true;
	}
};

html2canvas(document.body, {
  onrendered: function(canvas) {
    // document.body.appendChild(canvas);
	var dataUrl = canvas.toDataURL();
	//alert(dataUrl);
	
	//Create temporary div to insert the canvas element for printing to pdf
	// var div = document.createElement("div");
	// div.style.width = "100px";
	// div.style.height = "100px";
	// div.style.background = "red";
	// div.style.color = "white";
	// div.setAttribute('id','gitbackmachine');
	// div.appendChild(canvas);
	//document.body.appendChild(div);
	
	
	//var doc = new jsPDF();
	// doc.setFontSize(40);
	// doc.text(35, 25, "test");
	//doc.addImage(dataUrl, 'JPEG', 15, 40, 180, 160);
	
	// doc.fromHTML($('canvas').get(0), 15, 15, {
	// 'width': 170, 
	// 'elementHandlers': specialElementHandlers
	// });
	
	
	//doc.save('screenshot.pdf');
	
	// canvas.toBlob(function(blob) {
		// saveAs(blob, "screenshot.png");
	// });
	
	var oauth, requestToken;
	var uploadParams = {
		description: "desc1",
		oauth_consumer_key : "xxxxx_your_consumer_key_xxxxx",
		oauth_nonce : "77e66489c35f97cc54a3ca20a88149f1efe906da",
		oauth_signature : "quWKoqMsaxCRKRB7yAVc8gSv0yU=",
		oauth_signature_method : "HMAC-SHA1",
		oauth_timestamp : "1364002382",
		oauth_token: "xxxx_your_oauth_token_xxxxx",
		oauth_version: "1.0",
		tags: "tags1",
		title: "title1"
	};

    oauth = OAuth(options);
	
	oauth.get('http://www.flickr.com/services/oauth/request_token', function (data) {
        // requestToken = data.oauth_token;
		// alert(requestToken);
		
		// oauth.get('http://www.flickr.com/services/oauth/access_token',
			// function(data) {
				// var accessParams = {};
				// var qvars_tmp = data.text.split('&');
				// for (var i = 0; i < qvars_tmp.length; i++) {
					// var y = qvars_tmp[i].split('=');
					// accessParams[y[0]] = decodeURIComponent(y[1]);
				// }
				
				// oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);
				// var accessData = {};
				// accessData.accessTokenKey = accessParams.oauth_token;
				// accessData.accessTokenSecret = accessParams.oauth_token_secret;
				// localStorage.setItem("flickrback_auth", JSON.stringify(accessData));
			// }
		// );               
		oauth.fetchAccessToken(function (data2) {
			alert(data2);
			flickrUpload.post(uploadParams, 'http://api.flickr.com/services/upload', binary);
		}, function (data2) {
		});
    });
	
	
  }
});

