function openNextWindow(e) {
	//alert(e.source.title);
	Ti.API.info(' text ' + JSON.stringify(e.source));

	// load the table controller and call the index method
	var tableController = Alloy.getController('table');
	
	// pass in the tab since we are faking a navigation controller
	tableController.index($.tab1);

}

$.index.open();
