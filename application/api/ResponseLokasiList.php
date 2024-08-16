<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class ResponseLokasiList extends BasicResponse {
	public $data;

	public function __construct($status, $message, $data) {
		parent::__construct($status, $message);
		$this->data = $data;
	}
}
