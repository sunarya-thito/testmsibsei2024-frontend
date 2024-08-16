function openSheetAddLocation() {
	let title = document.querySelector('#add-location-sheet .sheet-title');
	title.innerText = 'Add Location';
	let addLocationButton = document.getElementById('sheet-add-location-button');
	addLocationButton.innerText = 'Add Location';
	let locationIdInput = document.getElementById('location-id');
	locationIdInput.value = '';
	let locationNameInput = document.getElementById('location-name');
	locationNameInput.value = '';
	let locationCountryInput = document.getElementById('location-country');
	locationCountryInput.value = '';
	let locationProvinceInput = document.getElementById('location-province');
	locationProvinceInput.value = '';
	let locationCityInput = document.getElementById('location-city');
	locationCityInput.value = '';
}

function openSheetEditLocation(locationId, locationName, locationCountry, locationProvince, locationCity) {
	let title = document.querySelector('#add-location-sheet .sheet-title');
	title.innerText = 'Edit Location';
	let editLocationButton = document.getElementById('sheet-add-location-button');
	editLocationButton.innerText = 'Update Location';
	let locationIdInput = document.getElementById('location-id');
	locationIdInput.value = locationId;
	let locationNameInput = document.getElementById('location-name');
	locationNameInput.value = locationName;
	let locationCountryInput = document.getElementById('location-country');
	locationCountryInput.value = locationCountry;
	let locationProvinceInput = document.getElementById('location-province');
	locationProvinceInput.value = locationProvince;
	let locationCityInput = document.getElementById('location-city');
	locationCityInput.value = locationCity;
}

function submitAddLocation() {
	if (!validateForm()) {
		return;
	}
	let locationName = document.getElementById('location-name').value;
	let locationCountry = document.getElementById('location-country').value;
	let locationProvince = document.getElementById('location-province').value;
	let locationCity = document.getElementById('location-city').value;
	let locationId = document.getElementById('location-id').value;
	if (locationId) {
		updateLocation(locationId, locationName, locationCountry, locationProvince, locationCity);
	} else {
		addLocation(locationName, locationCountry, locationProvince, locationCity);
	}
}

async function updateLocation(locationId, locationName, locationCountry, locationProvince, locationCity) {
	let request = new LokasiUpdateRequest(locationId, locationName, locationCountry, locationProvince, locationCity);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

async function addLocation(locationName, locationCountry, locationProvince, locationCity) {
	let request = new LokasiCreateRequest(locationName, locationCountry, locationProvince, locationCity);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

function showDeleteDialog(id) {
	let dialog = document.getElementById('delete-location-dialog');
	let input = document.getElementById('delete-location-id');
	input.value = id;
	dialog.showModal();
}

function closeDeleteDialog() {
	let dialog = document.getElementById('delete-location-dialog');
	dialog.close();
}

function submitDeleteLocation() {
	let id = document.getElementById('delete-location-id').value;
	deleteLocation(id);
}

async function deleteLocation(id) {
	let request = new LokasiDeleteRequest(id);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

function toggleShowId() {
	let toggle = document.getElementById('toggle-show-id');
	console.log('dataTables', dataTables);
	let table = dataTables['locations'];
	table.fields[0].options.show = toggle.checked;
	table.renderTable();
}

function validateForm() {
	let form = document.getElementById('location-form');
	form.reportValidity();
	return form.checkValidity();
}

function toggleShowDateCreated() {
	let toggle = document.getElementById('toggle-show-date-created');
	console.log('dataTables', dataTables);
	let table = dataTables['locations'];
	table.fields[5].options.show = toggle.checked;
	table.renderTable();
}
