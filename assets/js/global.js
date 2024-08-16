

const API_URL = 'http://localhost:8080/';
class APIRequest {
	requestPath = '';
	requestMethod = 'GET';
	requestParams = {};
	requestData = {};

	createResponse(response) {
		return new APIResponse();
	}
}

class DashboardRequest extends APIRequest {
	requestPath = 'dashboard';

	createResponse(response) {
		return new DashboardResponse(response.totalLokasi, response.totalProyek, response.message);
	}
}

class LokasiListRequest extends APIRequest {
	requestPath = 'lokasi';

	createResponse(response) {
		return new LokasiListResponse(parseLokasiList(response.data), response.message);
	}
}

class LokasiDeleteRequest extends APIRequest {
	requestPath = 'lokasi';
	requestMethod = 'DELETE';

	constructor(id) {
		super();
		this.requestParams = {id: id};
	}

	createResponse(response) {
		return new BasicResponse(response.message);
	}
}

class LokasiCreateRequest extends APIRequest {
	requestPath = 'lokasi';
	requestMethod = 'POST';

	constructor(namaLokasi, negara, provinsi, kota) {
		super();
		this.requestData = {
			namaLokasi: namaLokasi,
			negara: negara,
			provinsi: provinsi,
			kota: kota
		};
	}

	createResponse(response) {
		return new LokasiAddResponse(response.id, response.message);
	}
}

class LokasiUpdateRequest extends APIRequest {
	requestPath = 'lokasi';
	requestMethod = 'PUT';

	constructor(id, namaLokasi, negara, provinsi, kota) {
		super();
		this.requestData = {
			id: id,
			namaLokasi: namaLokasi,
			negara: negara,
			provinsi: provinsi,
			kota: kota
		};
	}

	createResponse(response) {
		return new BasicResponse(response.message);
	}
}

class ProyekListRequest extends APIRequest {
	requestPath = 'proyek';

	createResponse(response) {
		return new ProyekListResponse(parseProyekList(response.data), response.message);
	}
}

class ProyekDeleteRequest extends APIRequest {
	requestPath = 'proyek';
	requestMethod = 'DELETE';

	constructor(id) {
		super();
		this.requestParams = {id: id};
	}

	createResponse(response) {
		return new BasicResponse(response.message);
	}
}

class ProyekCreateRequest extends APIRequest {
	requestPath = 'proyek';
	requestMethod = 'POST';

	// @param {string} namaProyek
	// @param {string} client
	// @param {string} tanggalMulai
	// @param {string} tanggalSelesai
	// @param {string} pimpinanProyek
	// @param {string} keterangan
	// @param {Lokasi[]} lokasi
	constructor(namaProyek, client, tanggalMulai, tanggalSelesai, pimpinanProyek, keterangan, lokasi) {
		super();
		this.requestData = {
			namaProyek: namaProyek,
			client: client,
			tanggalMulai: tanggalMulai,
			tanggalSelesai: tanggalSelesai,
			pimpinanProyek: pimpinanProyek,
			keterangan: keterangan,
			lokasi: lokasi
		};
	}

	createResponse(response) {
		return new ProyekAddResponse(response.proyekId, response.message);
	}
}

class ProyekUpdateRequest extends APIRequest {
	requestPath = 'proyek';
	requestMethod = 'PUT';

	// @param {string} id
	// @param {string} namaProyek
	// @param {string} client
	// @param {string} tanggalMulai
	// @param {string} tanggalSelesai
	// @param {string} pimpinanProyek
	// @param {string} keterangan
	// @param {Lokasi[]} lokasi
	constructor(id, namaProyek, client, tanggalMulai, tanggalSelesai, pimpinanProyek, keterangan, lokasi) {
		super();
		this.requestData = {
			id: id,
			namaProyek: namaProyek,
			client: client,
			tanggalMulai: tanggalMulai,
			tanggalSelesai: tanggalSelesai,
			pimpinanProyek: pimpinanProyek,
			keterangan: keterangan,
			lokasi: lokasi
		};
	}

	createResponse(response) {
		return new BasicResponse(response.message);
	}
}

class APIResponse {
	status;
}

class BasicResponse extends APIResponse {
	message;

	constructor(message) {
		super();
		this.message = message;
	}
}

class LokasiAddResponse extends BasicResponse {
	id;

	constructor(id, message) {
		super(message);
		this.id = id;
	}
}

class LokasiListResponse extends BasicResponse {
	// @type {Lokasi[]}
	data;

	constructor(data, message) {
		super(message);
		this.data = data;
	}
}

class ProyekAddResponse extends BasicResponse {
	proyekId;

	constructor(proyekId, message) {
		super(message);
		this.proyekId = proyekId;
	}
}

class ProyekListResponse extends BasicResponse {
	// @type {Proyek[]}
	data;

	constructor(data, message) {
		super(message);
		this.data = data;
	}
}

class DashboardResponse extends BasicResponse {
	totalLokasi;
	totalProyek;

	constructor(totalLokasi, totalProyek, message) {
		super(message);
		this.totalLokasi = totalLokasi;
		this.totalProyek = totalProyek;
	}
}

class Lokasi {
	id;
	namaLokasi;
	negara;
	provinsi;
	kota;

	constructor(id, namaLokasi, negara, provinsi, kota) {
		this.id = id;
		this.namaLokasi = namaLokasi;
		this.negara = negara;
		this.provinsi = provinsi;
		this.kota = kota;
	}
}

class Proyek {
	id;
	namaProyek;
	client;
	tanggalMulai;
	tanggalSelesai;
	pimpinanProyek;
	keterangan;
	createdAt;
	// @type {Lokasi[]}
	lokasi;

	constructor(id, namaProyek, client, tanggalMulai, tanggalSelesai, pimpinanProyek, keterangan, createdAt, lokasi) {
		this.id = id;
		this.namaProyek = namaProyek;
		this.client = client;
		this.tanggalMulai = tanggalMulai;
		this.tanggalSelesai = tanggalSelesai;
		this.pimpinanProyek = pimpinanProyek;
		this.keterangan = keterangan;
		this.createdAt = createdAt;
		this.lokasi = lokasi;
	}
}


// @param {Object[]} data
// @return {Lokasi[]}
function parseLokasiList(data) {
	let lokasiList = [];
	for (let i = 0; i < data.length; i++) {
		let lokasi = data[i];
		lokasiList.push(new Lokasi(lokasi.id, lokasi.namaLokasi, lokasi.negara, lokasi.provinsi, lokasi.kota));
	}
	return lokasiList;
}

// @param {Object[]} data
// @return {Proyek[]}
function parseProyekList(data) {
	let proyekList = [];
	for (let i = 0; i < data.length; i++) {
		let proyek = data[i];
		let lokasiList = parseLokasiList(proyek.lokasi);
		proyekList.push(new Proyek(proyek.id, proyek.namaProyek, proyek.client, proyek.tanggalMulai, proyek.tanggalSelesai, proyek.pimpinanProyek, proyek.keterangan, proyek.createdAt, lokasiList));
	}
	return proyekList;
}

async function requestAPI(request) {
	// use fetch
	try {
		let config = {
			method: request.requestMethod,
			headers: {
				'Content-Type': 'application/json'
			}
		};
		let url = new URL(API_URL + request.requestPath);
		if (Object.keys(request.requestParams).length > 0) {
			url.search = new URLSearchParams(request.requestParams).toString();
		}
		if (Object.keys(request.requestData).length > 0) {
			config.body = JSON.stringify(request.requestData);
		}
		let response = await fetch(url, config);
		let responseJSON = await response.json();
		let responseData = request.createResponse(responseJSON);
		responseData.status = response.status;
		return responseData;
	} catch (error) {
		console.error(error);
		return new BasicResponse('Terjadi kesalahan');
	}
}



const ORDER_ASC = 'asc';
const ORDER_DESC = 'desc';
const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_RIGHT = 'right';

class Data {
	/**
	 * @type {{Field: HTMLElement}}
	 */
	fields;
	/**
	 * @type {boolean}
	 */
	show = true;
}

class FieldOptions {
	/**
	 * @type {boolean}
	 */
	sortable;

	/**
	 * @type {boolean}
	 */
	showLabel;

	/**
	 * @param text {string}
	 * @returns {*}
	 */
	parse(text) {
		return text;
	}

	/**
	 * @type {string}
	 */
	align = 'left';

	/**
	 * @type {boolean}
	 */
	show = true;

	constructor({sortable, showLabel, parse, align, show}) {
		this.sortable = sortable;
		this.showLabel = showLabel;
		if (parse !== undefined) {
			this.parse = parse;
		}
		if (align !== undefined) {
			this.align = align;
		}
		if (show !== undefined) {
			this.show = show;
		}
	}
}

class Field {
	/**
	 * @type {string}
	 */
	id;
	/**
	 * @type {string}
	 */
	label;
	/**
	 * @type {FieldOptions}
	 */
	options;
	/**
	 * @type {string}
	 */
	order = ORDER_ASC;
}

class DataTable {
	/**
	 * @type {HTMLElement}
	 */
	element;

	/**
	 * @type {Data[]}
	 */
	data;
	/**
	 * @type {Field[]}
	 */
	fields;

	/**
	 * @type {string}
	 */
	sortIcon = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';

	readTable() {
		this.data = [];
		this.fields = [];
		// find all fields
		let ths = this.element.querySelectorAll('thead th');
		for (let i = 0; i < ths.length; i++) {
			let field = new Field();
			field.id = ths[i].id;
			field.label = ths[i].textContent;
			let options = new FieldOptions({sortable: true, showLabel: true});
			// data-options-sortable, data-options-show-label, data-options-parse, data-options-align
			let optionsSortable = ths[i].getAttribute('data-options-sortable');
			if (optionsSortable !== null) {
				options.sortable = optionsSortable === 'true';
			}
			let optionsShowLabel = ths[i].getAttribute('data-options-show-label');
			if (optionsShowLabel !== null) {
				options.showLabel = optionsShowLabel === 'true';
			}
			let optionsParse = ths[i].getAttribute('data-options-parse');
			if (optionsParse !== null) {
				options.parse = new Function('text', optionsParse);
			}
			let optionsAlign = ths[i].getAttribute('data-options-align');
			if (optionsAlign !== null) {
				options.align = optionsAlign;
			}
			let optionsShow = ths[i].getAttribute('data-options-show');
			if (optionsShow !== null) {
				options.show = optionsShow === 'true';
			}
			field.options = options;
			this.fields.push(field);
		}
		// find all rows
		let trs = this.element.querySelectorAll('tbody tr');
		for (let i = 0; i < trs.length; i++) {
			let tr = trs[i];
			let data = new Data();
			let trChildren = tr.children;
			data.fields = {};
			for (let j = 0; j < this.fields.length; j++) {
				let field = this.fields[j];
				data.fields[field.id] = trChildren[j];
			}
			this.data.push(data);
		}
	}

	sortTable(fieldId) {
		let field = this.fields.find(f => f.id === fieldId);
		if (!field.options.sortable) {
			return;
		}
		let order = field.order === ORDER_ASC ? ORDER_DESC : ORDER_ASC;
		field.order = order;
		this.data.sort((a, b) => {
			let valueA = field.options.parse(a.fields[fieldId].textContent);
			let valueB = field.options.parse(b.fields[fieldId].textContent);
			if (order === ORDER_ASC) {
				return valueA > valueB ? 1 : -1;
			} else {
				return valueA < valueB ? 1 : -1;
			}
		});
		this.renderTable();
	}

	renderTable() {
		let thead = this.element.querySelector('thead');
		thead.innerHTML = '';
		let tr = document.createElement('tr');
		for (let i = 0; i < this.fields.length; i++) {
			let field = this.fields[i];
			let th = document.createElement('th');
			let fieldButton = document.createElement('button');
			fieldButton.classList.add('btn', 'btn-ghost');
			if (field.options.sortable) {
				fieldButton.innerHTML = field.label + this.sortIcon;
			} else {
				fieldButton.textContent = field.label;
			}
			fieldButton.onclick = () => {
				this.sortTable(field.id);
			}
			th.id = field.id;
			if (field.options.showLabel) {
				th.appendChild(fieldButton);
			}
			if (!field.options.show) {
				th.style.display = 'none';
			}
			tr.appendChild(th);
		}
		thead.appendChild(tr);
		let tbody = this.element.querySelector('tbody');
		tbody.innerHTML = '';
		let count = 0;
		for (let i = 0; i < this.data.length; i++) {
			let data = this.data[i];
			let tr = document.createElement('tr');
			for (let j = 0; j < this.fields.length; j++) {
				let field = this.fields[j];
				let td = data.fields[field.id];
				td.style.textAlign = field.options.align;
				if (!field.options.show) {
					td.style.display = 'none';
				} else {
					td.style.display = '';
				}
				tr.appendChild(td);
			}
			if (!data.show) {
				tr.style.display = 'none';
			} else {
				count++;
			}
			tbody.appendChild(tr);
		}
		if (count === 0) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');
			td.colSpan = this.fields.length;
			td.classList.add('data-table-empty')
			td.textContent = 'Tidak ada data';
			tr.appendChild(td);
			tbody.appendChild(tr);
		}
	}
}

/**
 * @param element {HTMLElement}
 * @returns {DataTable}
 */
function createDataTable(element) {
	let dataTable = new DataTable();
	dataTable.element = element;
	dataTable.readTable();
	dataTable.renderTable();

	let existingButtons = document.querySelector('.data-table-buttons[data-target-table="' + element.id + '"]');

	let wrapper = document.createElement('div');
	wrapper.classList.add('data-table-wrapper');
	element.parentNode.insertBefore(wrapper, element);

	let header = document.createElement('div');
	header.classList.add('data-table-header');
	wrapper.appendChild(header);

	let filter = document.createElement('input');
	filter.placeholder = 'Cari...';
	filter.classList.add('data-table-filter');
	filter.oninput = () => {
		let filterValue = filter.value.toLowerCase();
		for (let i = 0; i < dataTable.data.length; i++) {
			let data = dataTable.data[i];
			let show = false;
			for (let j = 0; j < dataTable.fields.length; j++) {
				let field = dataTable.fields[j];
				let value = data.fields[field.id].textContent;
				if (value.toLowerCase().includes(filterValue)) {
					show = true;
					break;
				}
			}
			data.show = show;
		}
		dataTable.renderTable();
	}
	header.appendChild(filter);

	if (existingButtons !== null) {
		header.appendChild(existingButtons);
	}

	wrapper.appendChild(element);
	return dataTable;
}

function bindDropdown(trigger, dropdown) {
	trigger.onclick = () => {
		dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
	}
}

const dataTables = {};

document.addEventListener('DOMContentLoaded', () => {
	let dataTableNodes = document.querySelectorAll('.data-table');
	for (let i = 0; i < dataTableNodes.length; i++) {
		let dataTable = dataTableNodes[i];
		dataTables[dataTable.id] = createDataTable(dataTable);
	}

	let datePickers = document.querySelectorAll('.date-picker');
	for (let i = 0; i < datePickers.length; i++) {
		let datePicker = datePickers[i];
		new Datepicker(datePicker, {
			autohide: true,
			buttonClass: 'btn btn-ghost',
			format: 'yyyy-mm-dd'
		});
	}
});
