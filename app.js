var box_main = document.querySelector('#box_main');
var btn_list = document.querySelector('#btn_list');
var btn_reset = document.querySelector('#btn_reset');
var btn_refresh = document.querySelector('#btn_refresh');

function list(min = document.querySelector('#min_number').value, max = document.querySelector('#max_number').value) {
    for (var i = min; i <= max; i++) {
        var box = document.createElement('div');
        box.className = 'box';
        box.id = i;
        fizz = i % document.querySelector('#fizz_number').value;
        buzz = i % document.querySelector('#buzz_number').value;
        if (i == 0) {
            box.innerText = 'Reseted';
        } else if (fizz == 0 && buzz == 0) {
            box.classList.add('fizzbuzz');
            box.innerText = 'Fizz Buzz: ' + i;
        } else if (fizz === 0) {
            box.classList.add('fizz');
            box.innerText = 'Fizz: ' + i;
        } else if (buzz === 0) {
            box.classList.add('buzz');
            box.innerText = 'Buzz: ' + i;
        } else {
            box.innerText = i;
        }
        box_main.appendChild(box);
    }
}
btn_list.addEventListener('click', () => {
    box_main.innerHTML = '';
    list();
});
btn_reset.addEventListener('click', () => {
    box_main.innerHTML = '';
    document.querySelector('#fizz_number').value = '';
    document.querySelector('#buzz_number').value = '';
    document.querySelector('#min_number').value = '';
    document.querySelector('#max_number').value = '';
    list();
});
btn_refresh.addEventListener('click', () => {
    box_main.innerHTML = '';
    document.querySelector('#fizz_number').value = 3;
    document.querySelector('#buzz_number').value = 5;
    document.querySelector('#min_number').value = 1;
    document.querySelector('#max_number').value = 100;
    list();
});
list();