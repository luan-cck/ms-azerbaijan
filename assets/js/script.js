
/*--------------------
set magnifier
--------------------*/
const mapContainer = document.querySelector('.map_image');
const magnifierIcons = document.querySelectorAll('.magnifier_icon');

function setIconPositions() {
    const contiainerWidth = mapContainer.offsetWidth;
    const containerHeight = mapContainer.offsetHeight;

    magnifierIcons.forEach(icon => {
        const relativeX = parseFloat(icon.getAttribute('data-x'));
        const relativeY = parseFloat(icon.getAttribute('data-y'));

        icon.style.left = `${relativeX * contiainerWidth}px`;
        icon.style.top = `${relativeY * containerHeight}px`;
    })
}

window.addEventListener('resize', setIconPositions);
document.addEventListener('DOMContentLoaded', setIconPositions);


/*--------------------
switch language
--------------------*/

document.getElementById('language-form').addEventListener('change', function (event) {
    if (event.target.value === 'japanese') {
        window.location.href = './index.html';
    } else if (event.target.value === 'english') {
        window.location.href = '/path-to-english';
    }
});
