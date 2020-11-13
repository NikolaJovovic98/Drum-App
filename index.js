


(function () {
    const bankOne = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    ];


    const bankTwo = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }];



    const bankButton = document.getElementById('myToggle2')

    bankButton.addEventListener('change', toggleBank)

    function toggleBank() {

        if (bankButton.checked) {

            return true


        }

        else return false

    }

   



    const powerButton = document.getElementById('myToggle')

    powerButton.addEventListener('change', powerFunction)

    function powerFunction() {

        const appPanel = document.getElementById('app-panel')
        const soundMode = document.getElementById('sound-mode-text')


        if (powerButton.checked === false) {

            window.removeEventListener('keydown', pressedKey)
            soundMode.innerHTML = "NO SOUND"
            appPanel.classList.remove('app-panel-color')

        }

        else {

            window.addEventListener('keydown', pressedKey)
            appPanel.classList.add('app-panel-color')

        }

    }

    const sliderVolume = document.getElementById('range-slider-input')

    sliderVolume.addEventListener('change', soundVolume)


    function soundVolume() {

        return sliderVolume.value / 100

    }

    function createAudioElement(url) {

        const audio = new Audio(url)

        audio.volume = soundVolume()

        return audio.play()

    }

    function pressedKey(e) {

        var keynum;

        if (e.which) {

            keynum = e.which;

        }

        return myKeyPress(String.fromCharCode(keynum))
    }

    function addClassTimeout(param, className, timeOut) {

        param.classList.add(className)

        setTimeout(function () {
            param.classList.remove(className);
        }, timeOut);


    }

    //bankOne.filter(bank => bank.keyTrigger === button.innerText)

    function myKeyPress(keyArg) {

        const buttonKeys = document.getElementsByClassName('button-keys')

        const key = keyArg;

        let url;

        Array.from(buttonKeys).forEach(button => {

            const soundMode = document.getElementById('sound-mode-text')

            if (button.innerText.toLowerCase() === key.toLowerCase()) {


                if (toggleBank()) {

                    url = bankTwo.filter(bank => bank.keyTrigger === button.innerText)
                }

                else {

                    url = bankOne.filter(bank => bank.keyTrigger === button.innerText)
                }

                addClassTimeout(button, 'active-button', 400)

                soundMode.innerHTML = url[0].id

                return createAudioElement(url[0].url)

            }
        })
    }






})()




window.onload = function () {

    const slider = document.getElementById('range-slider-input')
    const sliderValue = document.getElementById('sound-volume-text')
    sliderValue.innerHTML = slider.value

    slider.addEventListener('input', displayVolume)

    function displayVolume() {

        sliderValue.innerHTML = this.value

    }
}
