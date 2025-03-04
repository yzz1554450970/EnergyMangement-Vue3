export default function () {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize)
    return fontSize
}