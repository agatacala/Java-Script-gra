var iloscMonet = 10;

function stworzMonete(){
    var liczba = Math.floor(Math.random()*100);
    var speed = Math.floor(Math.random()*10);

    var moneta = document.createElement('div');
    moneta.classList.add('moneta');
    moneta.style.top = '10px';
    moneta.dataset.przesuniecieOdGory = 10;
    moneta.dataset.speed = (speed+1)*0.1;
    moneta.dataset.pozycja = 10*liczba;
    moneta.style.left = 10*liczba + 'px';


    var plansza = document.getElementById('planszaGry');
    plansza.appendChild(moneta);
}

function stworzMonetyNaGorze() {
    for (var i= 0; i<iloscMonet; i++) {
        stworzMonete();
    }
}

stworzMonetyNaGorze();


function opuscMonetyNaDol() {

    var monety = document.getElementsByClassName('moneta');
    var swinia = document.getElementById('swinia');

    for (var i=0; i<monety.length; i++){

        monety[i].dataset.przesuniecieOdGory = monety[i].dataset.przesuniecieOdGory*1 + monety[i].dataset.speed*0.5;
        monety[i].style.top = monety[i].dataset.przesuniecieOdGory + 'px';


        if (monety[i].dataset.przesuniecieOdGory > 400) {

            //pozycja swini
            //pozycja monety
            var pozycjaMonety = monety[i].dataset.pozycja;
            var pozycjaSwinia = swinia.dataset.pozycja;

            if (pozycjaMonety > (pozycjaSwinia-30) && pozycjaMonety < (pozycjaSwinia+30) ) {
                console.log('jupi!');

                monety[i].style.backgroundColor = 'yellow';
            }

            var plansza = document.getElementById('planszaGry');
            plansza.removeChild(monety[i]);

            stworzMonete();

        }


    }
}


setInterval(opuscMonetyNaDol, 10);


document.onkeydown = function(event) {
    var swinia = document.getElementById('swinia');


    var key = event.keyCode;
    if (key == '37' && swinia.dataset.pozycja>0) {
        swinia.dataset.pozycja = swinia.dataset.pozycja*1 - 10;
    }
    if (key == '39' && swinia.dataset.pozycja<1100) {
        swinia.dataset.pozycja = swinia.dataset.pozycja*1 + 10;
    }

    swinia.style.left = swinia.dataset.pozycja + 'px';



    //lewo 37

    //prawo 39
};


