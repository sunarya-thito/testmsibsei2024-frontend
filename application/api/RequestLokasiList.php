<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class RequestLokasiList extends APIRequest {
	public function __construct() {
		parent::__construct('lokasi', 'GET', array(), NULL);
	}

	public function createResponse($json) {
		$data = array();
		foreach ($json->data as $lokasi) {
			$data[] = Lokasi::fromJsonObject($lokasi);
		}
		return new ResponseLokasiList(NULL, $json->message, $data);
	}
}
