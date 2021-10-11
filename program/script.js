function getValues() {
            
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var delta = b * b - 4 * a * c;

    if (!a || !b || !c) {
        //alert('Insira os valores em a, b, c');
        createAlert('Insira os valores em a, b e c');
    } else if (a == 0) {
        //alert('O valor de <strong>a</strong>, deve ser diferente de 0');
        createAlert('O valor de <strong>a</strong>, deve ser diferente de 0');
    } else if (delta < 0) {
        //alert('Sem raízes reais');
        createAlert('Sem raízes reais');
    } else {
        var positive = (-b + Math.sqrt(delta)) / (2 * a);
        var negative = (-b - Math.sqrt(delta)) / (2 * a);

        if (b < 0) {
            document
                .querySelector('#eq').insertAdjacentHTML('beforebegin',
                    `<span class="tag is-warning title is-6">${a}x² ${b}x + ${c} = 0</span>`);
        } else if (c < 0) {
            document
                .querySelector('#eq').insertAdjacentHTML('beforebegin',
                    `<span class="tag is-warning title is-6">${a}x² + ${b}x  ${c} = 0</span>`);
        } else {
            document
                .querySelector('#eq').insertAdjacentHTML('beforebegin',
                    `<span class="tag is-warning title is-6">${a}x² + ${b}x + ${c} = 0</span>`);
        }


        document
            .querySelector('#x1').insertAdjacentHTML('beforebegin',
                `<p style="color: red">x1 = ${positive}, <br> x2 = ${negative}</p>`);
    }

}

function createAlert(msg) {
    document
        .querySelector("#message")
        .insertAdjacentHTML("beforebegin", `<div class='notification is-link'>${msg}</div>`);

    setTimeout(function () {
        deleteAlert();
    }, 3000);
}

function deleteAlert() {
    const list = document.querySelectorAll(".notification");
    for (const item of list) {
        item.remove();
    }
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener('click', getValues)

function reset() {

    var clean = document.querySelector('#limpar');
    var form = document.querySelector('#form');
    clean.addEventListener('click', function () {
        document.forms['form'].reset();
        document.querySelector('#x1').innerHTML = ''
    })

}

