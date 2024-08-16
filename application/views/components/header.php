<script>
  function onReady(callback) {
		document.addEventListener("DOMContentLoaded", callback);
  }
  const MODE_DARK = 'dark';
  const MODE_LIGHT = 'light';

  function switchMode(mode) {
		let btnDarkMode = document.getElementById('btn-dark-mode');
		let btnLightMode = document.getElementById('btn-light-mode');
		if (mode === MODE_DARK) {
			document.body.classList.add('dark');
			btnDarkMode.classList.add('active');
			btnLightMode.classList.remove('active');
		} else {
			document.body.classList.remove('dark');
			btnDarkMode.classList.remove('active');
			btnLightMode.classList.add('active');
		}
		localStorage.setItem('mode', mode);
  }

  function initMode() {
	let mode = localStorage.getItem('mode');
		if (mode === MODE_DARK) {
			switchMode(MODE_DARK);
		} else {
			switchMode(MODE_LIGHT);
		}
  }

  onReady(() => {
		initMode();
  });
</script>
<?php echo link_tag('assets/css/global.css'); ?>
<script src="<?php echo base_url('assets/js/global.js'); ?>"></script>
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/100.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/200.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/300.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/400.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/500.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/600.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/700.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/800.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/900.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/css/datepicker.min.css">
<script src="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/js/datepicker-full.min.js"></script>
<script>

</script>
