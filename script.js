// Sonido de alarma
const alarmSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
alarmSound.loop = true;

function joinCommunity() {
    const codeInput = document.getElementById('community-code');
    const code = codeInput.value.trim();
    
    if (code.length < 6) {
        alert('El código debe tener al menos 6 caracteres');
        return;
    }

    // Mostrar pantalla principal
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
    document.getElementById('code-display').textContent = code;
}

function triggerAlarm() {
    const button = document.getElementById('panic-button');
    button.classList.add('alarm-active');
    button.textContent = '¡ALARMA ACTIVADA!';
    
    // Reproducir sonido
    alarmSound.play();
    
    // Simular notificación
    setTimeout(() => {
        alert('¡Alarma enviada a todos los miembros de la comunidad!');
        stopAlarm();
    }, 3000);
}

function stopAlarm() {
    const button = document.getElementById('panic-button');
    button.classList.remove('alarm-active');
    button.textContent = '¡EMERGENCIA!';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}