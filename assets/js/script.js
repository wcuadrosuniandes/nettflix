
document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("interactiveVideo");
    var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");
    var videoModal = document.getElementById("videoModal");

    message1.style.display = "none";
    message2.style.display = "none";
    // Definir los rangos de tiempo para cada mensaje
    var messageRanges = [
        { start: 15, end: 30, message: message1 },
        { start: 45, end: 58, message: message2 }
    ];

    // Evento cuando el usuario pausa el video
    video.addEventListener("pause", function () {
        var currentTime = video.currentTime;
        // Ocultar todos los mensajes primero
        message1.style.display = "none";
        message2.style.display = "none";

        // Mostrar el mensaje correspondiente si está dentro de un rango
        messageRanges.forEach(range => {
            if (currentTime >= range.start && currentTime <= range.end) {
                range.message.style.display = "block";
            }
        });
    });

    // Evento cuando el usuario reanuda el video (ocultar mensajes)
    video.addEventListener("play", function () {
        message1.style.display = "none";
        message2.style.display = "none";
    });

    // Evento al cerrar el modal: pausar y reiniciar video
    videoModal.addEventListener("hidden.bs.modal", function () {
        video.pause();
        video.currentTime = 0;
        message1.style.display = "none";
        message2.style.display = "none";
    });
    const btnCerrar1 = document.querySelector('#btnCerrar1');
    const btnCerrar2 = document.querySelector('#btnCerrar2');

    btnCerrar1.addEventListener('click', () => {

        video.play();
    });
    btnCerrar2.addEventListener('click', () => {

        video.play();
    });
});


