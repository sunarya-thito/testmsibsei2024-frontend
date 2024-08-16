<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Proyek {
	public $id;
	public $namaProyek;
	public $client;
	public $tanggalMulai;
	public $tanggalSelesai;
	public $pimpinanProyek;
	public $keterangan;
	public $createdAt;
	public $lokasi;

	public function __construct($id, $namaProyek, $client, $tanggalMulai, $tanggalSelesai, $pimpinanProyek, $keterangan, $createdAt, $lokasi) {
		$this->id = $id;
		$this->namaProyek = $namaProyek;
		$this->client = $client;
		$this->tanggalMulai = $tanggalMulai;
		$this->tanggalSelesai = $tanggalSelesai;
		$this->pimpinanProyek = $pimpinanProyek;
		$this->keterangan = $keterangan;
		$this->createdAt = $createdAt;
		$this->lokasi = $lokasi;
	}

	public function toJsonObject() {
		$lokasi = array();
		foreach ($this->lokasi as $lokasiItem) {
			$lokasi[] = $lokasiItem->toJsonObject();
		}
		return array(
			'id' => $this->id,
			'namaProyek' => $this->namaProyek,
			'client' => $this->client,
			'tanggalMulai' => $this->tanggalMulai,
			'tanggalSelesai' => $this->tanggalSelesai,
			'pimpinanProyek' => $this->pimpinanProyek,
			'keterangan' => $this->keterangan,
			'createdAt' => $this->createdAt,
			'lokasi' => $lokasi
		);
	}

	public static function fromJsonObject($jsonObject) {
		$lokasi = array();
		foreach ($jsonObject['lokasi'] as $lokasiItem) {
			$lokasi[] = Lokasi::fromJsonObject($lokasiItem);
		}
		return new Proyek(
			$jsonObject['id'],
			$jsonObject['namaProyek'],
			$jsonObject['client'],
			$jsonObject['tanggalMulai'],
			$jsonObject['tanggalSelesai'],
			$jsonObject['pimpinanProyek'],
			$jsonObject['keterangan'],
			$jsonObject['createdAt'],
			$lokasi
		);
	}
}
