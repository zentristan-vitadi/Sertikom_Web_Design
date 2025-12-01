const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const position = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", position)
}) 


const openBtn = document.querySelector('.HeroKonsultasiButton');
const modal = document.getElementById('consultationModal');
const closeBtn = document.querySelector('.close-modal');
const form = document.getElementById('consultationForm');

// Buka Popup
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Tutup popup
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Expandable textarea
const textarea = document.getElementById("pesan");
textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

// Form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Inputs
    const nama = document.getElementById('namaLengkap');
    const email = document.getElementById('email');
    const pesan = document.getElementById('pesan');

    // Error fields
    const nameError = nama.nextElementSibling;
    const emailError = email.nextElementSibling;
    const pesanError = pesan.nextElementSibling;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    pesanError.textContent = "";

    // Validate Nama
    if (nama.value.trim() === "") {
        nameError.textContent = "Nama Lengkap wajib diisi.";
        valid = false;
    }

    // Validate Email Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi.";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Format email tidak valid.";
        valid = false;
    }

    // Validate Pesan
    if (pesan.value.trim() === "") {
        pesanError.textContent = "Pesan singkat wajib diisi.";
        valid = false;
    }

    // If valid
    if (valid) {
        alert("Form berhasil dikirim!");
        // You can send data to WhatsApp / Email here
    }
});

const sections = document.querySelectorAll(".Footer-section");

sections.forEach(section =>{
    const  title = section.querySelector(".Footer-judul");

    title.addEventListener("click", () =>{
        section.classList.toggle("active");
    });
});