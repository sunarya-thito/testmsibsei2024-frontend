function toggleShowId() {
	let toggle = document.getElementById('toggle-show-id');
	console.log('dataTables', dataTables);
	let table = dataTables['projects'];
	table.fields[0].options.show = toggle.checked;
	table.renderTable();
}

function showDeleteProjectDialog(id) {
	let dialog = document.getElementById('delete-project-dialog');
	let input = document.getElementById('delete-project-id');
	input.value = id;
	dialog.showModal();
}

function closeDeleteProjectDialog() {
	let dialog = document.getElementById('delete-project-dialog');
	dialog.close();
}

function submitDeleteProject() {
	let id = document.getElementById('delete-project-id').value;
	deleteProject(id);
}

async function deleteProject(id) {
	let request = new ProyekDeleteRequest(id);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

function convertClientDate(date) {
	// convert from yyyy-mm-dd to dd/mm/yyyy
	if (!date) {
		return '';
	}
	let split = date.split('-');
	return `${split[2]}/${split[1]}/${split[0]}`;
}

function submitAddProject() {
	if (!validateForm()) {
		return;
	}
	let projectId = document.getElementById('project-id').value;
	let projectName = document.getElementById('project-name').value;
	let projectClient = document.getElementById('project-client').value;
	let projectStartDate = document.getElementById('project-start-date').value;
	let projectEndDate = document.getElementById('project-end-date').value;
	let projectLead = document.getElementById('project-lead').value;
	let projectDescription = document.getElementById('project-description').value;
	let projectLocationsList = document.getElementById('project-locations-list');
	let projectLocations = [];
	for (let location of projectLocationsList.children) {
		projectLocations.push({
			id: location.dataset.id
		});
	}
	projectStartDate = convertClientDate(projectStartDate);
	projectEndDate = convertClientDate(projectEndDate);
	if (projectId) {
		updateProject(projectId, projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations);
	} else {
		addProject(projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations);
	}
}

async function addProject(projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations) {
	let request = new ProyekCreateRequest(projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

async function updateProject(projectId, projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations) {
	console.log('params: ', projectId, projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations);
	let request = new ProyekUpdateRequest(projectId, projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations);
	let response = await requestAPI(request);
	if (response.status === 200) {
		location.reload();
	} else {
		alert(response.message);
	}
}

function validateForm() {
	let form = document.getElementById('proyek-form');
	form.reportValidity();
	return form.checkValidity();
}

function addLocation() {
	let projectLocations = document.getElementById('project-locations');
	let selectedOption = projectLocations.options[projectLocations.selectedIndex];
	let parsedValue = JSON.parse(selectedOption.value);
	let listContent = document.getElementById('project-locations-list');
	let listItem = document.createElement('div');
	let existingItem = listContent.querySelector(`[data-id="${parsedValue.id}"]`);
	if (existingItem) {
		return
	}
	listItem.classList.add('list-tile');
	listItem.dataset.id = parsedValue.id;
	listItem.innerHTML = `
		<div class="list-item-content">
		${parsedValue.namaLokasi} (${parsedValue.kota}, ${parsedValue.provinsi}, ${parsedValue.negara})
		</div>
		<button class="btn btn-destructive btn-icon" type="button" onclick="removeLocation(this)">
			<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
		</button>
	`;
	listContent.appendChild(listItem);
}

function removeLocation(button) {
	button.parentElement.remove();
}

function openSheetAddProject() {
	let title = document.querySelector('#add-project-sheet .sheet-title');
	title.innerText = 'Add Project';
	let addProjectButton = document.getElementById('sheet-add-project-button');
	addProjectButton.innerText = 'Add Project';
	let projectIdInput = document.getElementById('project-id');
	projectIdInput.value = '';
	let projectNameInput = document.getElementById('project-name');
	projectNameInput.value = '';
	let projectClientInput = document.getElementById('project-client');
	projectClientInput.value = '';
	let projectStartDateInput = document.getElementById('project-start-date');
	projectStartDateInput.value = '';
	let projectEndDateInput = document.getElementById('project-end-date');
	projectEndDateInput.value = '';
	let projectLeadInput = document.getElementById('project-lead');
	projectLeadInput.value = '';
	let projectDescriptionInput = document.getElementById('project-description');
	projectDescriptionInput.value = '';
	let projectLocationsList = document.getElementById('project-locations-list');
	projectLocationsList.innerHTML = '';
}

function convertServerDate(date) {
	if (!date) {
		return '';
	}
	// from dd/mm/yyyy to yyyy-mm-dd
	let split = date.split('/');
	return `${split[2]}-${split[1]}-${split[0]}`;
}

function openSheetEditProject(projectId, projectName, projectClient, projectStartDate, projectEndDate, projectLead, projectDescription, projectLocations) {
	let title = document.querySelector('#add-project-sheet .sheet-title');
	title.innerText = 'Edit Project';
	let addProjectButton = document.getElementById('sheet-add-project-button');
	addProjectButton.innerText = 'Update Project';
	let projectIdInput = document.getElementById('project-id');
	projectIdInput.value = projectId;
	let projectNameInput = document.getElementById('project-name');
	projectNameInput.value = projectName;
	let projectClientInput = document.getElementById('project-client');
	projectClientInput.value = projectClient;
	let projectStartDateInput = document.getElementById('project-start-date');
	projectStartDateInput.value = convertServerDate(projectStartDate);
	let projectEndDateInput = document.getElementById('project-end-date');
	projectEndDateInput.value = convertServerDate(projectEndDate);
	let projectLeadInput = document.getElementById('project-lead');
	projectLeadInput.value = projectLead;
	let projectDescriptionInput = document.getElementById('project-description');
	projectDescriptionInput.value = projectDescription;
	let projectLocationsList = document.getElementById('project-locations-list');
	projectLocationsList.innerHTML = '';
	console.log(projectLocations);
	let parsedLocations = JSON.parse(projectLocations);
	for (let location of parsedLocations) {
		let listItem = document.createElement('div');
		listItem.classList.add('list-tile');
		listItem.dataset.id = location.id;
		listItem.innerHTML = `
			<div class="list-item-content">
			${location.namaLokasi} (${location.kota}, ${location.provinsi}, ${location.negara})
			</div>
			<button class="btn btn-destructive btn-icon" type="button" onclick="removeLocation(this)">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			</button>
		`;
		projectLocationsList.appendChild(listItem);
	}
}
function toggleShowDateCreated() {
	let toggle = document.getElementById('toggle-show-date-created');
	console.log('dataTables', dataTables);
	let table = dataTables['projects'];
	table.fields[8].options.show = toggle.checked;
	table.renderTable();
}
