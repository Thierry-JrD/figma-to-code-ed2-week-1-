/* Resize window */

function getWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Width: ${width}, Height: ${height}`);
}

window.addEventListener('load', getWindowDimensions);