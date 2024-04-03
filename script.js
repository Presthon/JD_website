let header = document.querySelector('#intro');
let anim = [
    { t: "root@kali:~# ", ms: 400 },
    { t: "root@kali:~#_", ms: 400 },
    { t: "root@kali:~# ", ms: 400 },
    { t: "root@kali:~#_", ms: 400 },
    { t: "root@kali:~#J_", ms: 100 },
    { t: "root@kali:~#JA_", ms: 100 },
    { t: "root@kali:~#JAC_", ms: 100 },
    { t: "root@kali:~#JACK_", ms: 100 },
    { t: "root@kali:~#JACK _", ms: 100 },
    { t: "root@kali:~#JACK D_", ms: 100 },
    { t: "root@kali:~#JACK D_", ms: 100 },
    { t: "root@kali:~#JACK DA_", ms: 100 },
    { t: "root@kali:~#JACK DAL_", ms: 400 },
    { t: "root@kali:~#JACK DALY_", ms: 400 },
    { t: "root@kali:~#JACK DALY ", ms: 400 },
    { t: "root@kali:~#JACK DALY_", ms: 400 },
    { t: "root@kali:~#JACK DALY ", ms: 400 },
    { t: "root@kali:~#JACK DALY_ ", ms: 400 },
    { t: "JACK DALY", ms: 400 }
];

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;

    if (step.t === "root@kali:~#JACK DALY_ ") {
        header.classList.add('fade-out');
        // Wait for the fade-out animation to complete
        header.addEventListener('transitionend', function transitionEndHandler() {
            // Remove the event listener to avoid memory leaks
            header.removeEventListener('transitionend', transitionEndHandler);
            i++; // Increment i after the fade-out animation completes
            continueUpdate(); // Call continueUpdate to proceed with the animation
        });
    } else if (step.t === "JACK DALY") {
        header.classList.add('fade-in');
        // Wait for the fade-in animation to complete
        header.addEventListener('transitionend', function transitionEndHandler() {
            // Remove the event listener to avoid memory leaks
            header.removeEventListener('transitionend', transitionEndHandler);
            i++; // Increment i after the fade-in animation completes
            continueUpdate(); // Call continueUpdate to proceed with the animation
        });
    } else {
        // If no animation is applied, increment i immediately
        i++;
        continueUpdate(); // Call continueUpdate to proceed with the animation
    }
}

function continueUpdate() {
    if (i < anim.length)
        setTimeout(update, anim[i].ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}

update(); // Start the animation loop
