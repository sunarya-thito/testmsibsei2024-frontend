<html>
<head>
	<?php $this->load->view('components/header'); ?>
</head>
<body>
<div class="container">
	<?php $this->load->view('components/navbar'); ?>
	<div class="content stage">
		<?php $this->load->view('components/sidebar'); ?>
		<main class="main-content">
			<h1>Welcome to Project Management App</h1>
			<div class="lead">Dibuat guna memenuhi test seleksi magang di PT. Surya Energi Indotama</div>
			<p>
			<div class="card-list">
				<div class="card" onclick="window.location.href = '<?php echo base_url('projects'); ?>'">
					<div class="card-header">
						<div class="card-title">
							Total Projects
						</div>
						<div class="card-icon">
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
						</div>
					</div>
					<div class="card-body">
						<?php echo isset($totalProyek) ? $totalProyek : 0; ?>
					</div>
					<div class="card-footer">
						Projects
					</div>
				</div>
				<div class="card" onclick="window.location.href = '<?php echo base_url('locations'); ?>'">
					<div class="card-header">
						<div class="card-title">
							Total Locations
						</div>
						<div class="card-icon">
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
						</div>
					</div>
					<div class="card-body">
						<?php echo isset($totalLokasi) ? $totalLokasi : 0; ?>
					</div>
					<div class="card-footer">
						Locations
					</div>
				</div>
			</div>
		</main>
	</div>
	<?php $this->load->view('components/footer'); ?>
</div>
</body>
</html>
