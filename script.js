document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul.nav-list');

    // Hamburger Menü Aç/Kapat
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Navigasyon Linklerine Tıklama
    const links = document.querySelectorAll('nav ul.nav-list li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // 🚨 Eğer link "index.html" veya "about.html" ise normal yönlendirmeye izin ver
            if (targetId === "index.html" || targetId === "about.html") {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active'); // Mobil menüyü kapat
                }
                return; // Sayfa yönlendirmesi devam etsin
            }

            // ❗ Sayfa içi bağlantılar (# ile başlayanlar) için smooth scroll uygula
            if (targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Mobil menüyü kapatma (Mobilde bir linke tıklanınca kapanır)
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // İletişim Formu Gönderim İşlemi
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mesajınız gönderildi. Teşekkürler!');
            contactForm.reset();
        });
    }

    // Yukarı Çık Butonu Kontrolü
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Yukarı Çık Butonu İşlevselliği
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
