<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if (!function_exists('request_api')) {
	/**
	 * @param $request_api APIRequest
	 */
	function request_api($request_api) {
		$baseUrl = get_instance()->config->item('api_url');
		$curl = curl_init();
		$url = $baseUrl.$request_api->path;
		$queryParams = $request_api->queryParameters;
		if ($queryParams != null && count($queryParams) > 0) {
			$url .= "?";
			foreach ($queryParams as $key => $value) {
				$url .= $key."=".$value."&";
			}
			$url = substr($url, 0, strlen($url) - 1);
		}
		$body = $request_api->body;
		$options = array(
			CURLOPT_URL => $url,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HEADER => false,
			CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
			CURLOPT_CUSTOMREQUEST => $request_api->method,
		);
		if ($body != null) {
			$options[CURLOPT_POSTFIELDS] = json_encode($body);
		}
		curl_setopt_array($curl, $options);
		$response = curl_exec($curl);
		curl_close($curl);
		$jsonObject = json_decode($response, true);
		return $request_api->createResponse((object) $jsonObject);
	}
}
