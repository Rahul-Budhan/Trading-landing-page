const sun = document.getElementsByClassName("fa-sun");
const moon = document.getElementsByClassName("fa-moon");

function switchToBrightMode() {
    const dark = document.getElementsByClassName('dark');
    console.log(dark);
    sun[0].style.display='none';;
    moon[0].style.display='block';
    for (let i = 0; i < dark.length; i++) {
        dark[i].classList.add("bright");
        dark[i].classList.remove("dark");
    }
    console.log(dark)
}

function switchtoDarkMode() {
    const bright = document.getElementsByClassName('bright');
    console.log(bright);
    sun[0].style.display='block';;
    moon[0].style.display='none';
    for (let i = 0; i < bright.length; i++) {
        bright[i].classList.add("dark");
        bright[i].classList.remove("bright");
    }
    console.log(bright)
}

