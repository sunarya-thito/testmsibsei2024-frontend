<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class BasicResponse {
	public $status;
	public $message;

	public function __construct($status, $message) {
		$this->status = $status;
		$this->message = $message;
	}
}
