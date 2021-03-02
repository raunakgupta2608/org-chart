var secId;
var id;
function load() {
    var elements = document.getElementsByClassName('second_level');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => {
        secId = e.target.id;
        document.getElementById('third_container').style.display = 'block';
        render(secId);
        });
    }
}


function render() {

    let sleeping_line = document.querySelectorAll('.sleeping_line');
    for(let i=0; i<sleeping_line.length; i++) {
        sleeping_line[i].style.borderBottom = "0px solid black";
    }
    document.getElementById(secId).nextElementSibling.firstElementChild.firstElementChild.style.borderBottom = '2px solid black';
}

function renderData() {
    var level = document.getElementsByClassName('level');
    let selectedRow = (id - 1);
    for(let i=0; i<level.length; i++) {
        level[i].innerHTML = obj[selectedRow][i];
    }
}

var obj = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['Tiger', 'Lion', 'Monkey', 'Deer', 'Cheetah', 'Leopard', 'Rhino', 'Fox', 'Wolf', 'Elephant',
     'Croc', 'Aligator', 'Dog', 'Cow', 'Buffalo', 'Ox', 'Jaguar', 'Snake'],
    ['Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon','Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon',
     'Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon','Parrot', 'Sparrow', 'Crow'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['Tiger', 'Lion', 'Monkey', 'Deer', 'Cheetah', 'Leopard', 'Rhino', 'Fox', 'Wolf', 'Elephant',
     'Croc', 'Aligator', 'Dog', 'Cow', 'Buffalo', 'Ox', 'Jaguar', 'Snake'],
    ['Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon','Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon',
     'Parrot', 'Sparrow', 'Crow', 'Swarn', 'Pigeon','Parrot', 'Sparrow', 'Crow'] 
];