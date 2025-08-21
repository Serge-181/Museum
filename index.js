const progress = document.querySelector('.progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

const volumeLevel = document.querySelector('.volume-slider');

volumeLevel.addEventListener('input', function () {
    const vvalue = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${vvalue}%, #c4c4c4 ${vvalue}%, #c4c4c4 100%)`
})





