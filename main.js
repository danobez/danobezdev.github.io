document.querySelectorAll('.grid').forEach(container => {
    const video = container.querySelector('.hover-video');

    container.addEventListener('mouseenter', () => {
        video.play().then(() => {
            console.log("Видео запущено!");
        }).catch(error => console.error("Ошибка воспроизведения:", error));
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Возвращаем в начало
    });
});
