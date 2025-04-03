// JavaScript untuk mengatur video sebagai background
// https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Lamp-Maid-Anime-Girl.mp4

document.addEventListener("DOMContentLoaded", function () {
    // Tentukan URL video
    const videoUrl = "https://gilbertclaus.pythonanywhere.com/video/Lamp-Maid-Anime-Girl.mp4";

    // Ambil elemen video dan set source video
    let video = document.getElementById("dynamicVideo");
    let videoSource = document.getElementById("videoSource");
    
    // Set source video secara dinamis
    videoSource.src = videoUrl;

    // Memulai video setelah URL ditetapkan
    video.load();
});
