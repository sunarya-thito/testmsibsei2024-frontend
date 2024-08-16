<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class APIRequest {
	public $path;
	public $method;
	public $queryParameters;
	public $body;

	public function __construct($path, $method, $queryParameters, $body) {
		$this->path = $path;
		$this->method = $method;
		$this->queryParameters = $queryParameters;
		$this->body = $body;
	}

	public function createResponse($json) {
		return new BasicResponse(NULL, $json->message);
	}
}
