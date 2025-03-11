const toggle_button = document.getElementById('toggleButton');
const bulb_status = document.getElementById('status');
const bulb = document.getElementById('bulb');
const body = document.getElementById('body');

toggle_button.addEventListener('click', function () {
    /**
     * bulb.classList.toggle('off')
     * 
     * if contains "off" class then it will return true and after that it will remove "off" class
     * and if not contains "off" class it will return false and after that it will add "off" class
     */

    const isOn = !bulb.classList.toggle('off');
    body.classList.toggle('dark-mode', isOn);
    bulb_status.innerText = `Status: ${isOn ? 'On' : 'Off'}`;
    toggle_button.innerText = `Turn ${isOn ? 'Off' : 'On'}`;
});
