// JavaScript Document

// JavaScript Document

function dispResultsuser() {
	if(errorMessage) {
		element('results').innerHTML = errorMessage;
		return;
	}
	
	var visitlink = document.getElementById('visitlink');
	
	$('#visitlink').attr('href', 'http://myspace/index.php?option=com_traindefectlogger&view=defects&filter_number=');
		
	var t = new bwTable();
	t.addRow( ['Fullname : ', db_user.getItem('fullname')] );
	t.addRow( ['Mobile : ', db_user.getItem('mobilenumber')] );
	t.addRow( ['Depot : ', db_user.getItem('depot')] );
	element('results').innerHTML = t.getTableHTML();
}

	function dbGouser() {
	if(errorMessage) return;
	var f = element('userForm');
	db_user.setItem('fullname', f.elements['fullname'].value);
	db_user.setItem('mobilenumber', f.elements['mobilenumber'].value);
	db_user.setItem('depot', f.elements['depot'].value);
	db_user.setItem('toc', 1);
	dispResultsuser();
}