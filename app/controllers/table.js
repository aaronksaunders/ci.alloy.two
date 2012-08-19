// does what is says
function openModalDialog(e) {
	Ti.API.info(' openModalDialog ' + JSON.stringify(e.source));
	
	// sets the left nav button based on the object created in the
	// table.xml file.
	//
	// notice there are multiple object in the table.xml file, not sure 
	// if this is recommened approach, but it worked
	$.login.setLeftNavButton($.login_cancel);
	$.login.open({
		modal : true
	});
}

// does what is says
function closeModalDialog(e) {
	Ti.API.info(' closeModalDialog ' + JSON.stringify(e.source));
	$.login.close();
}

// this is the exported function that opens the controller and displays
// the main window
exports.index = function(_tab) {
	_tab.open($.win2);
}
