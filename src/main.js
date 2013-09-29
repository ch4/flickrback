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
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "100px";
	div.style.background = "red";
	div.style.color = "white";
	div.setAttribute('class','gitbackmachine');
	div.appendChild(canvas);
	document.body.appendChild(div);
	
	
	var doc = new jsPDF();
	// doc.setFontSize(40);
	// doc.text(35, 25, "test");
	//doc.addImage(dataUrl, 'JPEG', 15, 40, 180, 160);
	
	doc.fromHTML($('.gitbackmachine').get(0), 15, 15, {
	'width': 170, 
	'elementHandlers': specialElementHandlers
	});
	
	doc.save('screenshot.pdf');
  }
});

