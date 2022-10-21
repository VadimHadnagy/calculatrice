function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}

function darkmode() {
    let nomachoisir = document.querySelector('.main');
    nomachoisir.classList.toggle('dark');
}

// document.write('<button onclick="darkmode()">test</button');

