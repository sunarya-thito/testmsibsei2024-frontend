<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class RequestProyekList extends APIRequest {
	public function __construct() {
		parent::__construct('proyek', 'GET', array(), NULL);
	}

	public function createResponse($json) {
		$data = array();
		foreach ($json->data as $proyek) {
			$data[] = Proyek::fromJsonObject($proyek);
		}
		return new ResponseProyekList(NULL, $json->message, $data);
	}
}
