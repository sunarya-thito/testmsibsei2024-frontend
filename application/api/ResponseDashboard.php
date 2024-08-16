<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class ResponseDashboard extends BasicResponse {
	public $totalLokasi;
	public $totalProyek;

	public function __construct($status, $message, $totalLokasi, $totalProyek) {
		parent::__construct($status, $message);
		$this->totalLokasi = $totalLokasi;
		$this->totalProyek = $totalProyek;
	}
}
