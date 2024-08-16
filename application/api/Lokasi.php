<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Lokasi {
	public $id;
	public $namaLokasi;
	public $negara;
	public $provinsi;
	public $kota;
	public $createdAt;

	public function __construct($id, $namaLokasi, $negara, $provinsi, $kota, $createdAt) {
		$this->id = $id;
		$this->namaLokasi = $namaLokasi;
		$this->negara = $negara;
		$this->provinsi = $provinsi;
		$this->kota = $kota;
		$this->createdAt = $createdAt;
	}

	public function toJsonObject() {
		return array(
			'id' => $this->id,
			'namaLokasi' => $this->namaLokasi,
			'negara' => $this->negara,
			'provinsi' => $this->provinsi,
			'kota' => $this->kota,
			'createdAt' => $this->createdAt
		);
	}

	public static function fromJsonObject($jsonObject) {
		return new Lokasi(
			$jsonObject['id'],
			$jsonObject['namaLokasi'],
			$jsonObject['negara'],
			$jsonObject['provinsi'],
			$jsonObject['kota'],
			$jsonObject['createdAt']
		);
	}
}
