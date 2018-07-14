const altura = document.documentElement.scrollHeight;
const altura2 = document.documentElement.clientHeight;
const scrollUnit = (altura - altura2) / 100;
const rootStyles = document.documentElement.style;


addEventListener('scroll', () => {
    rootStyles.setProperty('--width', Math.round(scrollY / scrollUnit))
})
