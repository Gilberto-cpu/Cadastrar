let clientes = [];

function adicionarCliente() {
    const nomeClienteInput = document.getElementById("nomeCliente");
    const nomeCliente = nomeClienteInput.value.trim();
    if (nomeCliente !== "") {
        clientes.push(nomeCliente);
        renderizarLista();
        nomeClienteInput.value = "";
    }
    idade_real();
    apagarAno();
}

function excluirSelecionados() {
    var anoFinal = document.getElementById('resAno');
    const checkboxes = document.querySelectorAll(".checkbox-cliente");
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            clientes.splice(index, 1);
        }
        anoFinal.value = ""
    });
    renderizarLista();
}

function renderizarLista() {
    const listaClientesDiv = document.getElementById("listaClientes");
    listaClientesDiv.innerHTML = "";
    clientes.forEach((cliente, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox-cliente";

        const nomeClienteSpan = document.createElement("span");
        nomeClienteSpan.textContent = cliente;

        const itemListaCliente = document.createElement("div");
        itemListaCliente.className = "client-list";
        itemListaCliente.appendChild(checkbox);
        itemListaCliente.appendChild(nomeClienteSpan);

        listaClientesDiv.appendChild(itemListaCliente);
    });
}

let idade_real = function() {
    var ano1 = document.getElementById('ano');
    var anoFinal = document.createElement('resAno');
    var resultado = document.createElement('res');

    var resultado = 2023 - ano1.value;
    anoFinal.value = resultado.value;
    document.getElementById('resAno').value = resultado;
}

function apagarAno() {
    var anoFinal = parseInt(document.getElementById('resAno').value);

    var ano1 = document.getElementById('ano');
    ano1.value = "";
    if (anoFinal > 60) {
        let msg = "O cliente tem direito a carterinha";
        alert(msg);
        ano1.focus();
    }
}

function mudarCor(elemento) {
    elemento.style.backgroundColor = "#f0f0f0";
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        var btn = document.getElementById("btn");
        btn.click();
    }
});
