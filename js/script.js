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