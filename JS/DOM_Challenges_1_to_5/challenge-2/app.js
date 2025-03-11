const heading = document.getElementById('mainHeading');
const childElement = document.querySelector('.color-buttons').childNodes;

childElement.forEach(child => {
    child.addEventListener('click', function () {
        const computedStyle = getComputedStyle(child);
        heading.style.color = computedStyle.backgroundColor;
    })
});