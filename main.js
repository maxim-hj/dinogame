const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


document.addEventListener('keydown', function (event) {
	jump();
})


function jump() {
	if (dino.classList != 'jump') {
		dino.classList.add('jump');
	}
	setTimeout(() => {
		dino.classList.remove('jump');
	}, 300);
}

let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

	if (cactusLeft > 515 && cactusLeft < 590 && dinoTop <= 20) {
		alert('game over')
	}
})
