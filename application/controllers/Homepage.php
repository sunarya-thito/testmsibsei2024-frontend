<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Homepage extends ProyekApp_Controller {

	public function index()
	{
		/**
		 * @var $response ResponseDashboard
		 */
		$response = request_api(new RequestDashboard());
		$data = array(
			'totalProyek' => $response->totalProyek,
			'totalLokasi' => $response->totalLokasi,
		);
		$this->load->view('homepage', $data);
	}
}
