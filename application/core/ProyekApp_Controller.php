<?php

include 'application/api/APIRequest.php';
include 'application/api/BasicResponse.php';
include 'application/api/Lokasi.php';
include 'application/api/Proyek.php';
include 'application/api/RequestDashboard.php';
include 'application/api/ResponseDashboard.php';
include 'application/api/RequestLokasiList.php';
include 'application/api/ResponseLokasiList.php';
include 'application/api/RequestProyekList.php';
include 'application/api/ResponseProyekList.php';

class ProyekApp_Controller extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
}
