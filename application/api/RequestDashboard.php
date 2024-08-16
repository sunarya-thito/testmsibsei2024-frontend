<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class RequestDashboard extends APIRequest {
	public function __construct() {
		parent::__construct('dashboard', 'GET', array(), NULL);
	}

	public function createResponse($json) {
		return new ResponseDashboard(NULL, $json->message, $json->totalLokasi, $json->totalProyek);
	}
}
