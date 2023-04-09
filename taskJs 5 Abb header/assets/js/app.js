//ABB nav

let lang_arrow = document.querySelector('#lang_arrow')

function DisplayLanguages() {
    lang_arrow.classList.toggle('rotate_arrow');
    let other_lang = document.querySelector('#other_lang');
    other_lang.classList.toggle('d-none');
}

lang_arrow.addEventListener('click', function (event) {
    event.stopPropagation();
    DisplayLanguages();
})


let languages = document.querySelectorAll('#other_lang a');
let current_lang = document.querySelector('#current_lang');


for (let language of languages) {
    language.addEventListener('click', function (event) {
        event.stopPropagation();

        DisplayLanguages();

        for (let lang of languages) {
            lang.classList.remove('d-none');
        }

        let names = language.querySelectorAll('span')
        current_lang.innerHTML = names[1].innerHTML;

        this.classList.add('d-none');
    })
}

let search = document.querySelector('.search');
let searchbar = document.querySelector('.searchbar');

search.addEventListener('click', function (event) {
    event.stopPropagation();
    searchbar.classList.toggle('d-none');
})

let exit = document.querySelector('#exit');

exit.addEventListener('click', function (event) {
    event.stopPropagation();
    searchbar.classList.add('d-none');
})


let hamburger_menu = document.querySelector('.hamburger_menu');
let menu = document.querySelector('#menu');

hamburger_menu.addEventListener('click', function (event) {
    event.stopPropagation();
    hamburger_menu.classList.toggle('d-none');
    
    if(menu.style.right === '0px' ){
        menu.style.right = '-100%';
    }
    else{
        menu.style.right = '0px';
    }
})