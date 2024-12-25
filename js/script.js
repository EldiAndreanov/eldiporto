document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll(".btn-custom1").forEach((button) => {
    button.addEventListener("click", function () {
      const fileUrl = this.getAttribute("data-file"); // Ambil URL file dari atribut data
      const fileName = this.getAttribute("data-name"); // Ambil nama file dari atribut data

      // Buat elemen <a> untuk memulai unduhan
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    });
});

 // Ambil elemen navbar
const navbar = document.querySelector('.navbar-dark');

 // Tambahkan event listener untuk scroll
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
     navbar.classList.add('scrolled');
     navbar.classList.remove('transparent');
   } else {
     navbar.classList.add('transparent');
     navbar.classList.remove('scrolled');
   }
 });

 function setActive(event) {
  // Hapus kelas 'active' dari semua link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  // Tambahkan kelas 'active' ke elemen yang diklik
  event.target.classList.add('active');
}