<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Locations extends CI_Controller {

	public function index()
	{
		/**
		 * @var $response ResponseLokasiList
		 */
		$response = request_api(new RequestLokasiList());
		$data = array(
			'lokasi' => $response->data,
		);
		$this->load->view('locations', $data);
	}
}
