<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Projects extends CI_Controller {

	public function index()
	{
		/**
		 * @var $response ResponseProyekList
		 */
		$response = request_api(new RequestProyekList());
		$responseLokasi = request_api(new RequestLokasiList());
		$data = array(
			'projects' => $response->data,
			'locations' => $responseLokasi->data,
		);
		$this->load->view('projects', $data);
	}
}
