// game R&P&S


let start = document.querySelector('.start>button');
let comp_op = document.querySelector('#comp_op>img');
let player_op = document.querySelector('#player_op>img');
let player_ops = document.querySelectorAll('#player_ops>img');
let now_result = document.querySelector("#now");
let computer_result = document.querySelector("#comp_result");
let player_result = document.querySelector("#player_result");
let restart = document.querySelector("#Restart");
let game = document.querySelector(".game");
let bg = document.querySelector("#Bg");

let win = 1;
let lose = 1;


// objecthttp://127.0.0.1:5500/assets/Images/paper.png

const obj = {
    rock: './assets/Images/rock.png',
    paper: './assets/Images/paper.png',
    scissors: './assets/Images/scissors.png'
};

// start click
start.addEventListener('click', () => {
    startGame();

    start.classList.add('d-none');
    bg.classList.add('d-none');
});

function startGame() {
    let all_el = document.querySelector('.all_el');

    all_el.classList.remove('d-none');
}

// user click

for (let opinion of player_ops) {
    opinion.addEventListener('click', () => {
        player_op.src = opinion.src;

        comp_op.classList.remove('rotate_img');
        player_op.classList.remove('rotate_img');
        opinion.classList.add('click_on');
        comp_op.classList.add('click_on');

        setTimeout(() => {
            opinion.classList.remove('click_on');
            comp_op.classList.remove('click_on');
        }, 100);

        let computer_url = Comp_Opinion();

        let computer = getObjectKeys(obj, computer_url);
        let user = (opinion.classList[0]).trim(); //getObjectKeys(obj, player_op.src);

        Result(computer, user);
    })
}

//Copmuter opinion
function Comp_Opinion() {
    let rand = Math.floor(Math.random() * 3)
    let values = Object.values(obj);
    comp_op.src = values[rand];

    return values[rand];
}

// get key with values(url)

function getObjectKeys(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
}

// Result

function Result(computer, user) {

    if (computer == 'rock') {
        switch (user) {
            case "rock":
                now_result.innerHTML = 'draw';
                break;
            case 'paper':
                now_result.innerHTML = 'You win';
                player_result.innerHTML = win;
                ++win;
                break;
            case 'scissors':
                now_result.innerHTML = 'You lose';
                computer_result.innerHTML = lose;
                ++lose;
                break;
        }
    }
    else if (computer == 'paper') {
        switch (user) {
            case "rock":
                now_result.innerHTML = 'You lose';
                computer_result.innerHTML = lose;
                ++lose;
                break;
            case 'paper':
                now_result.innerHTML = 'draw';

                break;
            case 'scissors':
                now_result.innerHTML = 'You win';
                player_result.innerHTML = win;
                ++win;
                break;
        }
    }
    else if (computer == 'scissors') {
        switch (user) {
            case "rock":
                now_result.innerHTML = 'You win';
                player_result.innerHTML = win;
                ++win;
                break;
            case 'paper':
                now_result.innerHTML = 'You lose';
                computer_result.innerHTML = lose;
                ++lose;
                break;
            case 'scissors':
                now_result.innerHTML = 'draw';
                break;
        }
    }

    if (win === 5 || lose === 5) {
        restart.classList.remove('d-none');
    }
}




// function* GeneratorWait() {
//     yield setInterval(function Rotate() {comp_op.classList.toggle = 'rotate';}, 100);
// }

// let wait = GeneratorWait();
// wait.next;

