// Dinamik saat göstergesi
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = `Saat: ${timeString}`;
}

// Her saniye saati güncelle
setInterval(updateTime, 1000);
updateTime();



// hakkımda button tasarımı 
function toggleBio() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggleButton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Daha Fazla Gör";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Daha Az Gör";
        moreText.style.display = "inline";
    }
}


function showPopularProject() {
    // Proje 2'yi göster, Proje 3'ü gizle
    document.getElementById('proje2').style.display = 'block';
    document.getElementById('proje3').style.display = 'none';
}

function showRecentProject() {
    // Proje 3'ü göster, Proje 2'yi gizle
    document.getElementById('proje2').style.display = 'none';
    document.getElementById('proje3').style.display = 'block';
}


// sertifika button tasarımı

function toggleCertificates() {
    const certificates = document.querySelectorAll('.certificate'); // Sadece .certificate olanları seç
    const button = document.getElementById('showMoreBtn');

    certificates.forEach(cert => {
        cert.classList.toggle('hidden'); // hidden sınıfını aç/kapat
    });

    // Buton metnini değiştir
    button.textContent = button.textContent.trim() === "Sonraki Sayfa" ? "Önceki Sayfa" : "Sonraki Sayfa";
}

function formİçerik() {
    alert("Mesajınız başarıyla gönderilmiştir");
}