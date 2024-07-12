// Toggle Navbar Icon
document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.navbar-toggler');
	const icon = toggleButton.querySelector('i.fas');

	// Toggle Navbar Icon
	toggleButton.addEventListener('click', function () {
		const iconClassList = icon.classList;
		iconClassList.toggle('fa-bars');
		iconClassList.toggle('fa-times');
	});
});

// Video Element Control
document.getElementById('pause-video').addEventListener('click', function () {
	const video = document.getElementById('bg-video');
	const pauseButton = document.getElementById('pause-video');

	if (video.paused) {
		video.play();
		pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		video.pause();
		pauseButton.innerHTML = '<i class="fas fa-play"></i>';
	}
});
