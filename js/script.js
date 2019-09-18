console.log("Application Started!");

document.getElementById('development-know').addEventListener('click', function () {
    if (document.getElementById('development-know').textContent === "Know More") {

        document.getElementById("design").style.display = "none";
        document.getElementById("creativity").style.display = "none";
        document.getElementById("develop-details").style.display = "block";


        setTimeout(function () {
            document.getElementById("develop-box").style.width = "90%";

        }, 10);
        document.getElementById('development-know').textContent = "Show Less"
    } else {

        document.getElementById("develop-box").style.width = "0%";
        setTimeout(function () {
            document.getElementById("develop-details").style.display = "none";
            document.getElementById("design").style.display = "block";
            document.getElementById("creativity").style.display = "block";

        }, 700);
        document.getElementById('development-know').textContent = "Know More"
    }
});

document.getElementById('design-know').addEventListener('click', function () {
    if (document.getElementById('design-know').textContent === "Know More") {
        // document.getElementById("design").style.width="0";
        document.getElementById("development").style.display = "none";
        document.getElementById("creativity").style.display = "none";
        document.getElementById("design-details").style.display = "block";
        document.getElementById("design-details-2").style.display = "block";

        document.getElementById('design-know').textContent = "Show Less"
        setTimeout(function () {
            document.getElementById("design-box").style.width = "80%";
            document.getElementById("design-box-2").style.width = "80%";

        }, 10);
    } else {
        document.getElementById("design-box").style.width = "0%";
        document.getElementById("design-box-2").style.width = "0%";

        setTimeout(function () {
            document.getElementById("development").style.display = "block";
            document.getElementById("creativity").style.display = "block";
            document.getElementById("design-details").style.display = "none";
            document.getElementById("design-details-2").style.display = "none";

        }, 700);
        document.getElementById('design-know').textContent = "Know More"
    }
});

document.getElementById('creativity-know').addEventListener('click', function () {
    if (document.getElementById('creativity-know').textContent === "Know More") {

        document.getElementById("development").style.display = "none";
        document.getElementById("design").style.display = "none";
        document.getElementById("creativity-details").style.display = "block";
        document.getElementById('creativity-know').textContent = "Show Less"
        document.getElementById("gear").style.animationName = "ckw";
        document.getElementById("gear2").style.animationName = "ccw";
        setTimeout(function () {
            document.getElementById("creativity-box").style.width = "80%";

        }, 10);
    } else {
        document.getElementById("creativity-box").style.width = "0%";
        setTimeout(function () {
            document.getElementById("development").style.display = "block";
            document.getElementById("design").style.display = "block";
            document.getElementById("creativity-details").style.display = "none";
        }, 700);
        document.getElementById('creativity-know').textContent = "Know More"
        document.getElementById("gear").style.animationName = "";
        document.getElementById("gear2").style.animationName = "";

    }
});


var show_message = function (text) {
    elem = document.getElementById('message');


    switch (text) {
        case 'C':
            elem.innerHTML = 'Creative workarounds to achieve goals.';
            document.getElementById('C').style.fontWeight = '400';
            break;
        case 'R':
            elem.innerHTML = 'Research  before development.';
            document.getElementById('R').style.fontWeight = '400';

            break;
        case 'E':
            elem.innerHTML = "Evaluate 'n' ways before selecting '1'";
            document.getElementById('E').style.fontWeight = '400';

            break;
        case 'A':
            elem.innerHTML = 'Accomplish Vision';
            document.getElementById('A').style.fontWeight = '400';

            break;
        case 'T':
            elem.innerHTML = "Thinking 'Out of the Box'";
            document.getElementById('T').style.fontWeight = '400';

            break;
        case 'I':
            elem.innerHTML = 'Implementing dream ideas';
            document.getElementById('I').style.fontWeight = '400';

            break;
        case 'V':
            elem.innerHTML = 'Visual Creativity.';
            document.getElementById('V').style.fontWeight = '400';
            break;
        case 'E2':
            document.getElementById('E2').style.fontWeight = '400';
            elem.innerHTML = 'Explore in depth';
    }
};


var hide_message = function (text) {
    elem = document.getElementById('message');
    elem.innerHTML = 'Each letter says a story!';
    setTimeout(() => {
        document.getElementById('C').style.fontWeight = '100';
        document.getElementById('R').style.fontWeight = '100';
        document.getElementById('E').style.fontWeight = '100';
        document.getElementById('A').style.fontWeight = '100';
        document.getElementById('T').style.fontWeight = '100';
        document.getElementById('I').style.fontWeight = '100';
        document.getElementById('V').style.fontWeight = '100';
        document.getElementById('E2').style.fontWeight = '100';
    }, 1000);

};

var stopAnimation = function () {

    document.querySelector('.slider').classList.add('pause-anime');
}

var startAnimation = function () {
    document.querySelector('.slider').classList.remove('pause-anime');
}

var goToSlide = function (slide) {

    var element = document.querySelector('#slider');

 
        element.classList.remove('slider');
        element.classList.add('slider-'+slide);

        setTimeout(function(){
            element.classList.remove('slider-'+slide);
            element.classList.add('slider');
        },4000);
 

}