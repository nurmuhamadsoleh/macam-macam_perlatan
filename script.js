const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
});

// Welcome text
console.log('thanks for using javascript')

// Buat sebuah function submit
function enter(event){
	event.preventDefault();
	// menangkap value dari form username

	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let tel = document.getElementById("tel").value;
	let jenis_kelamin = document.getElementById("jenis_kelamin").value;
	let pesan = document.getElementById("pesan").value;

	// check apakah username sudah berhasil terisi
	// console.log(username)
	alert(`Selamat Datang Di Aplikasi Macam-Macam Peralatan ${username}\n
			${email}\n
			`);
	// document.write(username);
}