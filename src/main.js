// var canvas = document.documentElement;
// var dataUrl = canvas.toDataURL();
// alert(dataUrl);

html2canvas(document.body, {
  onrendered: function(canvas) {
    //document.body.appendChild(canvas);
	var dataUrl = canvas.toDataURL();
	//alert(dataUrl);
	
	var doc = new jsPDF();
	// doc.setFontSize(40);
	// doc.text(35, 25, "test");
	doc.addImage(dataUrl, 'PNG', 15, 40, 180, 160);
	
	// doc.fromHTML($('body').get(0), 15, 15, {
	// 'width': 170, 
	// 'elementHandlers': specialElementHandlers
	// });
	
	doc.save('screenshot.pdf');
  }
});

